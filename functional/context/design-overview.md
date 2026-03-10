# Design overview — COOLCO Redesign (functional)

**Source of truth**: Figma [COOLCO-REDESIGN](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN).  
**App**: `apps/landing` (test app that must **mutate** to match this design).

**Visual reference for pixel-perfect implementation**: Screenshots live in [`screenshots/desktop/`](./screenshots/desktop/) and [`screenshots/mobile/`](./screenshots/mobile/). See the [inventory and naming convention](./screenshots/README.md) in `screenshots/README.md`. When implementing, compare the UI against these images so the apariencia sea exacta.

---

## Home page (landing)

The three sections are named **CASHLESS**, **TICKETS**, and **FAN TO FAN**. CASHLESS shows “Próximamente” (coming soon).

- **Desktop (≥ lg)**: **3 polygon sections** (trapezoidal): left = CASHLESS, center = TICKETS, right = FAN TO FAN. Each is a link to its destination page. **On hover, the trapezoid MUST grow with a smooth animation** (expanded state) as shown in `screenshots/desktop/home-with-expanded-ticket-hover.png`, `home-with-expanded-fantofan-hover.png`. Reference: `screenshots/desktop/home-without-hover.png`, `home-with-ticket-hover.png`, `home-with-fantofan-hover.png`, `home-with-expanded-*.png`.
- **Mobile (&lt; lg)**: **Carousel** of 3 slides (TICKETS, FAN TO FAN, CASHLESS). **When moving to another section, the carousel MUST wait 1 second before painting/displaying the new section** as shown in the mobile screenshots. Each slide has default and hover/active state; tap navigates to the destination. Reference: `screenshots/mobile/HOME FS TICKETS OFF.png`, `HOME FS TICKETS ON HOVER.png`, `HOME FS FANTOFAN OFF.png`, `HOME FS FANTOFAN ON HOVER.png`, `HOME FS CASHLESS OFF.png`.

**Navigation**: Each section (polygon on desktop, carousel slide on mobile) **derives to a separate destination page**. Those pages and the purchase (Compra) flow have their own layouts in Figma; see screenshots in `screenshots/desktop/` and `screenshots/mobile/`.

---

## Destination pages (3)

| # | Section (Home) | Destination | Screenshots (examples) |
|---|----------------|-------------|--------------------------|
| 1 | **CASHLESS** (left polygon / 3rd carousel slide) | CASHLESS page; “Próximamente” on Home | — |
| 2 | **TICKETS** (center polygon / 1st carousel slide) | TICKETS landing + purchase flow | Desktop: `tickets-page.png`, `your-tickets-page.png`, `event-detail-pages.png`, `COMPRA 2–6.png`. Mobile: `LANDING TICKETS.png`, `COMPRA TICKETS 01–03.png`. |
| 3 | **FAN TO FAN** (right polygon / 2nd carousel slide) | FAN TO FAN landing | Desktop: `fantofan-page.png`. Mobile: `LANDING FANTOFAN.png`. |

**Routes**: Align with product (e.g. `/tickets`, `/fantofan`, `/cashless` or `/seccion/tickets`, etc.). The app may use placeholders until routes are final.

---

## Implementation mapping

| Figma / screenshot | App implementation |
|--------------------|--------------------|
| Desktop Home (node `0:1`), `screenshots/desktop/home-*.png` | `Home.tsx` (lg:): 3 polygon areas (CASHLESS, TICKETS, FAN TO FAN); on hover trapezoid grows with smooth animation (expanded state); each `Link` to destination. |
| Mobile Home (node `2002:248`), `screenshots/mobile/HOME FS *.png` | `Home.tsx` (&lt; lg): carousel with 3 slides (TICKETS, FAN TO FAN, CASHLESS); when changing section, 1 s delay before painting new section; default and hover states; each slide `Link` to destination. |
| `tickets-page.png`, `LANDING TICKETS.png` | TICKETS destination + landing; event list, hero, “Comprar” CTAs. |
| `fantofan-page.png`, `LANDING FANTOFAN.png` | FAN TO FAN destination + landing. |
| `your-tickets-page.png`, `event-detail-pages.png` | Your tickets and event detail pages. |
| `COMPRA *.png`, `COMPRA TICKETS *.png` | Purchase (Compra) flow; multi-step desktop and mobile. |

---

## Design references

- **Desktop (all MVP pages)**: [Figma node 0:1](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=0-1&p=f&t=0pYnnPfV2KTgYGR1-0)
- **Mobile (all MVP pages)**: [Figma node 2002:248](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=2002-248&p=f&t=0pYnnPfV2KTgYGR1-0)

Use `desktop-prototype.md` and `mobile-prototype.md` for tokens, components, and per-viewport notes.
