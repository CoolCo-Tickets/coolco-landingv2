# Data Model (Phase 1) — 002-landing-redesign

**Branch**: `002-landing-redesign`  
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

The feature is a client-only SPA. The “data model” here covers route/section identity, UI state for Home (desktop hover, mobile carousel + delay), and Compra flow state. No persistent storage or backend entities in MVP.

---

## 1. Route and section identity

| Concept        | Type / Values | Notes |
|----------------|----------------|--------|
| **Destination slug** | `'tickets' \| 'fantofan' \| 'cashless'` | Fixed routes per spec; maps to `/tickets`, `/fantofan`, `/cashless`. |
| **Section order (desktop)** | CASHLESS (left), TICKETS (center), FAN TO FAN (right) | Index 0, 1, 2 for layout. |
| **Section order (mobile carousel)** | TICKETS (1st), FAN TO FAN (2nd), CASHLESS (3rd) | Same three sections; different order and layout. |

Validation: Only these three slugs are valid destination routes. Invalid or unknown paths redirect to Home or 404 as per router config.

---

## 2. Home page UI state

| State | Type | Purpose |
|-------|------|---------|
| **Desktop: hovered section** | `0 \| 1 \| 2 \| null` | Which trapezoid is hovered (0=CASHLESS, 1=TICKETS, 2=FAN TO FAN); drives grow animation. |
| **Mobile: carousel active index** | `0 \| 1 \| 2` | Which slide is “current” (0=TICKETS, 1=FAN TO FAN, 2=CASHLESS). |
| **Mobile: pending paint** | `boolean` or timestamp | After user changes section, wait 1 s before applying “painted”/active state; this flag or timer drives the delay. |

No persistence; state is component or store (e.g. Zustand) in memory.

---

## 3. Compra flow (TICKETS purchase)

| State | Type | Purpose |
|-------|------|---------|
| **Current step** | `number` (step index) or step id | Which Compra step is shown; matches design screens (COMPRA 2–6 desktop, COMPRA TICKETS 01–03 mobile). |
| **Step data (mock)** | Optional key-value or minimal DTO | If mock backend or local state holds form data per step, keep it minimal and in-memory. |

Backend/payment is mock or placeholder; no server entities. State can live in React state or Zustand; optional URL or search param for step (see contracts).

---

## 4. Design assets (reference)

Assets are files, not domain entities. Reference only:

- **Fonts**: Montserrat (Bold, Light, Regular, SemiBold) — see `functional/context/resourses/README.md`.
- **Images**: `coolco-bg.png`, `coolco-bg-active.png`.
- **Logos**: CoolCo Cashless/Fan2Fan/Tickets (grey, white) — see inventory.

Implementation uses these paths/URLs; no separate “asset entity” in app state.

---

## 5. State transitions (summary)

- **Home desktop**: User hovers section → hovered index set → trapezoid grow animation; mouse leave → index null.
- **Home mobile**: User swipes/scrolls → active index updates after 1 s delay → new section painted.
- **Navigation**: User clicks section/slide → router navigates to `/tickets` \| `/fantofan` \| `/cashless`.
- **Compra**: User starts Compra → step 1; next → step + 1; back/cancel → TICKETS or Home per design.

No lifecycle beyond in-session UI; no server sync in MVP.
