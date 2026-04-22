# Arequipa Mission Trip Resource Hub — PRD

## Original problem statement
"create a site to act as a resource hup for a mission trip to arequipa peru"

User chose: **go with defaults** (public info site, all sections, warm Peru-inspired design, contact form — no auth, no payments).

## Architecture
- **Frontend:** React (single-page scroll) + Tailwind + Shadcn primitives + Sonner toasts. Fonts: Cormorant Garamond + Outfit. Palette: sillar / terracotta / ochre / volcanic charcoal.
- **Backend:** FastAPI + Motor/MongoDB. UUID ids, ISO datetimes, `_id` excluded from all responses.
- **Routes:**
  - `GET /api/` — health
  - `POST /api/contact` — sign-up / inquiry
  - `POST /api/prayer-requests` — create request
  - `GET /api/prayer-requests` — list public
  - `POST /api/prayer-requests/{id}/pray` — increment counter
- **Collections:** `contacts`, `prayer_requests`, `status_checks`.

## User personas
- **Team members** — preparing for the trip (packing, itinerary, prayer wall).
- **Prospective volunteers** — discover info, submit interest via contact form.
- **Donors/supporters** — understand giving tiers, contact team.

## Core requirements (static)
- Hero, About Arequipa (bento grid), Itinerary timeline, Packing list, Team roster, Prayer wall, FAQ, Donate tiers, Contact form, Footer.
- Sticky glass navbar with smooth scroll anchors. Mobile menu.
- All interactive elements have `data-testid`.

## What's been implemented (v1 — 2026-04-22)
- Full single-page site with all 9 sections + navbar + footer.
- Working contact form → MongoDB.
- Working prayer wall (create + list + pray counter) → MongoDB.
- Comprehensive end-to-end testing passed (backend 10/10, frontend 9/9).
- Removed public `GET /api/contact` listing for privacy.

## Backlog
### P1
- Admin view for contact submissions (authenticated).
- Real payment integration for Donate (Stripe).
- CMS/editable content for itinerary, team roster, updates blog.
- Team-only password-protected resource area (travel docs, emergency contacts).
### P2
- Updates/blog feed (posts from the field).
- Image gallery after trip.
- Mailing list signup + drip updates.
- i18n (English/Spanish).

## Next tasks
- Capture the church's real team, dates, and logo to swap into `/app/frontend/src/data/tripContent.js`.
- Decide whether to add Stripe for the Donate section.
