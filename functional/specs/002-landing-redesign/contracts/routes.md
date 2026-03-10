# Route contract — COOLCO Landing (MVP)

**Branch**: `002-landing-redesign`  
**Spec**: [spec.md](../spec.md) | **Plan**: [plan.md](../plan.md)

This document defines the **route surface** of the SPA: URLs, behaviour, and optional query/path params. It is the contract between navigation (links, router) and implementation.

---

## Base URL

- App is served from `BASE_URL` (Vite `base` / env). All paths below are relative to that base.
- Example: if `base` is `/`, then Home is `/`, TICKETS is `/tickets`, etc.

---

## Fixed routes (MVP)

| Path | Purpose | Notes |
|------|---------|--------|
| `/` | Home | Desktop: 3 trapezoidal sections (CASHLESS, TICKETS, FAN TO FAN). Mobile: carousel (TICKETS, FAN TO FAN, CASHLESS). All link to the three destinations. |
| `/tickets` | TICKETS destination | Landing (events, “Comprar”), your tickets, event detail. Entry to Compra flow. |
| `/fantofan` | FAN TO FAN destination | FAN TO FAN landing per design. |
| `/cashless` | CASHLESS destination | “Próximamente” / coming-soon content. |

No trailing slash requirement. Case-sensitive paths. Invalid paths MUST redirect to `/` or a defined 404 behaviour.

---

## Compra flow (from TICKETS)

Compra is a multi-step flow started from `/tickets`. Steps are defined by design (screenshots COMPRA 2–6 desktop, COMPRA TICKETS 01–03 mobile).

**Options (implementation choice)**:

- **A**: Compra steps are under `/tickets` with optional search param, e.g. `/tickets?step=2` or `/tickets/compra/2`.
- **B**: Compra steps are separate routes, e.g. `/tickets/compra`, `/tickets/compra/2`, etc.

Contract requirement: From `/tickets`, user can start Compra and move through steps; back/cancel returns to TICKETS or Home per design. Exact URL shape is an implementation detail as long as it is consistent and documented.

---

## Navigation expectations

- Links from Home (desktop polygons or mobile carousel) MUST navigate to `/tickets`, `/fantofan`, or `/cashless` without full page reload (client-side routing).
- “Ingresar” and “Mi cuenta” are UI-only in MVP; they MAY link to `/tickets` or a placeholder; no login/session.
- Back/home controls on destination pages MUST allow return to `/`.

---

## Summary

| Route | Description |
|-------|-------------|
| `/` | Home (desktop polygons + mobile carousel) |
| `/tickets` | TICKETS landing + Compra entry |
| `/fantofan` | FAN TO FAN landing |
| `/cashless` | CASHLESS “Próximamente” |

All routes are in-app; no backend route contract in MVP.
