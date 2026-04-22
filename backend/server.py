from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Arequipa Mission Trip Resource Hub")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============ Models ============
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    interest: str = Field(..., description="trip|donate|prayer|volunteer|other")
    message: str = Field(..., min_length=1, max_length=2000)


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    interest: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class PrayerRequestCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=80)
    request: str = Field(..., min_length=1, max_length=1000)
    is_public: bool = True


class PrayerRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    request: str
    is_public: bool = True
    prayer_count: int = 0
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ============ Routes ============
@api_router.get("/")
async def root():
    return {"message": "Arequipa Mission Trip Resource Hub API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


# ----- Contact / Sign-up -----
@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)
    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    rows = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


# ----- Prayer Requests -----
@api_router.post("/prayer-requests", response_model=PrayerRequest)
async def create_prayer_request(payload: PrayerRequestCreate):
    pr = PrayerRequest(**payload.model_dump())
    doc = pr.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.prayer_requests.insert_one(doc)
    return pr


@api_router.get("/prayer-requests", response_model=List[PrayerRequest])
async def list_prayer_requests():
    rows = await db.prayer_requests.find(
        {"is_public": True}, {"_id": 0}
    ).sort("created_at", -1).to_list(200)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.post("/prayer-requests/{req_id}/pray", response_model=PrayerRequest)
async def pray_for_request(req_id: str):
    result = await db.prayer_requests.find_one_and_update(
        {"id": req_id},
        {"$inc": {"prayer_count": 1}},
        projection={"_id": 0},
        return_document=True,
    )
    if not result:
        raise HTTPException(status_code=404, detail="Prayer request not found")
    if isinstance(result.get('created_at'), str):
        result['created_at'] = datetime.fromisoformat(result['created_at'])
    return result


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
