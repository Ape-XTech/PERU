"""
Backend tests for Arequipa Mission Trip Resource Hub
Covers: root, contact CRUD-ish, prayer-requests CRUD-ish, pray increment, _id leakage
"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # fallback to frontend .env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ============ Root ============
class TestRoot:
    def test_root_welcome(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Arequipa" in data["message"]


# ============ Contact ============
class TestContact:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST_Goer One",
            "email": "TEST_goer@example.com",
            "interest": "trip",
            "message": "I want to go to Arequipa with the team.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "_id" not in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["interest"] == payload["interest"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data

    def test_create_contact_invalid_email(self, client):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "interest": "trip",
            "message": "hi",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_field(self, client):
        payload = {"name": "TEST_Missing", "email": "x@y.com", "interest": "trip"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_list_contacts_recent_first(self, client):
        # create marker contact
        marker = {
            "name": "TEST_RecentMarker",
            "email": "TEST_recent@example.com",
            "interest": "donate",
            "message": "marker",
        }
        client.post(f"{API}/contact", json=marker)

        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        assert len(rows) >= 1
        # No _id leakage
        for row in rows:
            assert "_id" not in row
        # Most recent first: first row should be the marker (or at least a TEST_ row)
        assert rows[0]["email"] == "TEST_recent@example.com" or any(
            r2["email"] == "TEST_recent@example.com" for r2 in rows[:5]
        )


# ============ Prayer Requests ============
class TestPrayerRequests:
    @pytest.fixture(scope="class")
    def created_id(self, client):
        payload = {
            "name": "TEST_PrayerOne",
            "request": "Pray for safe travels.",
            "is_public": True,
        }
        r = client.post(f"{API}/prayer-requests", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "_id" not in data
        assert data["name"] == payload["name"]
        assert data["request"] == payload["request"]
        assert data["is_public"] is True
        assert data["prayer_count"] == 0
        assert "id" in data
        return data["id"]

    def test_create_prayer_request(self, created_id):
        assert isinstance(created_id, str) and len(created_id) > 0

    def test_create_private_prayer_excluded_from_list(self, client):
        payload = {
            "name": "TEST_PrivatePrayer",
            "request": "private only",
            "is_public": False,
        }
        r = client.post(f"{API}/prayer-requests", json=payload)
        assert r.status_code == 200
        priv_id = r.json()["id"]
        r2 = client.get(f"{API}/prayer-requests")
        assert r2.status_code == 200
        rows = r2.json()
        ids = [row["id"] for row in rows]
        assert priv_id not in ids

    def test_list_prayer_requests_public(self, client, created_id):
        r = client.get(f"{API}/prayer-requests")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        for row in rows:
            assert "_id" not in row
            assert row["is_public"] is True
        ids = [row["id"] for row in rows]
        assert created_id in ids
        # sorted desc by created_at
        if len(rows) >= 2:
            assert rows[0]["created_at"] >= rows[-1]["created_at"]

    def test_pray_increments_count(self, client, created_id):
        # initial
        r0 = client.get(f"{API}/prayer-requests")
        before = next(p for p in r0.json() if p["id"] == created_id)["prayer_count"]

        r = client.post(f"{API}/prayer-requests/{created_id}/pray")
        assert r.status_code == 200, r.text
        data = r.json()
        assert "_id" not in data
        assert data["id"] == created_id
        assert data["prayer_count"] == before + 1

        # again
        r = client.post(f"{API}/prayer-requests/{created_id}/pray")
        assert r.status_code == 200
        assert r.json()["prayer_count"] == before + 2

    def test_pray_unknown_id_404(self, client):
        r = client.post(f"{API}/prayer-requests/does-not-exist-xyz/pray")
        assert r.status_code == 404
