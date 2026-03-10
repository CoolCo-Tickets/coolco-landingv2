# Design reference screenshots

Screenshots from Figma used as **visual reference for pixel-perfect implementation**. Layout is in `desktop/` and `mobile/`. Use these images to match layout, spacing, typography, and colors exactly.

## Folder structure

| Folder | Content |
|--------|---------|
| `desktop/` | Desktop viewport (≥ 1024px): Home, destination pages, purchase flow. |
| `mobile/` | Mobile viewport (&lt; 1024px): Home carousel slides, landings, purchase flow. |

---

## Figma node URLs

**Base URL** (other nodes):  
`https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=<NODE_ID>`  
Use `<NODE_ID>` with hyphen (e.g. `0-1` → node `0:1`).

| Context | Node ID | URL |
|---------|---------|-----|
| Desktop (all MVP) | `0:1` | https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=0-1 |
| Mobile (all MVP) | `2002:248` | https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=2002-248 |

The three Home sections in the design are **CASHLESS** (Próximamente), **TICKETS**, and **FAN TO FAN**. Each section links to its own destination page/flow.

---

## Current screenshot inventory

### Desktop (`desktop/`)

| File | Description | Use for |
|------|-------------|---------|
| `home-without-hover.png` | Home: 3 polygon sections (CASHLESS, TICKETS, FAN TO FAN), default state, no hover | Base Home layout, trapezoidal sections, footer |
| `home-with-ticket-hover.png` | Home: TICKETS section highlighted (hover) | TICKETS hover state, color overlay |
| `home-with-fantofan-hover.png` | Home: FAN TO FAN section highlighted (hover) | FAN TO FAN hover state |
| `home-with-expanded-ticket-hover.png` | Home: TICKETS section expanded on hover | TICKETS expanded hover |
| `home-with-expanded-fantofan-hover.png` | Home: FAN TO FAN section expanded on hover | FAN TO FAN expanded hover |
| `tickets-page.png` | TICKETS destination page (desktop) | TICKETS section landing layout |
| `fantofan-page.png` | FAN TO FAN destination page (desktop) | FAN TO FAN section landing layout |
| `your-tickets-page.png` | Your tickets / Mis entradas (desktop) | Your-tickets page layout |
| `event-detail-pages.png` | Event detail page(s) (desktop) | Event detail layout |
| `COMPRA 2.png` | Purchase flow — step 2 | Compra flow desktop |
| `COMPRA 3.png` | Purchase flow — step 3 | Compra flow desktop |
| `COMPRA 4.png` | Purchase flow — step 4 | Compra flow desktop |
| `COMPRA 6.png` | Purchase flow — step 6 | Compra flow desktop |
| `COMPRA boceto ideal.png` | Purchase flow — ideal sketch | Compra flow reference |

### Mobile (`mobile/`)

| File | Description | Use for |
|------|-------------|---------|
| `HOME FS TICKETS OFF.png` | Home carousel: TICKETS slide, default | Carousel slide 1 (TICKETS), “Ingresar” CTA |
| `HOME FS TICKETS ON HOVER.png` | Home carousel: TICKETS slide, active/hover | TICKETS slide hover state |
| `HOME FS FANTOFAN OFF.png` | Home carousel: FAN TO FAN slide, default | Carousel slide 2 (FAN TO FAN) |
| `HOME FS FANTOFAN ON HOVER.png` | Home carousel: FAN TO FAN slide, active/hover | FAN TO FAN slide hover state |
| `HOME FS CASHLESS OFF.png` | Home carousel: CASHLESS slide, default | Carousel slide 3 (CASHLESS, Próximamente) |
| `LANDING TICKETS.png` | TICKETS landing after “Ingresar” (mobile) | TICKETS mobile landing, hero, event cards |
| `LANDING FANTOFAN.png` | FAN TO FAN landing (mobile) | FAN TO FAN mobile landing |
| `LANDING EVENTO.png` | Event landing (mobile) | Event mobile landing |
| `COMPRA TICKETS 01.png` | Purchase flow — step 1 (mobile) | Compra tickets mobile |
| `COMPRA TICKETS 02.png` | Purchase flow — step 2 (mobile) | Compra tickets mobile |
| `COMPRA TICKETS 03.png` | Purchase flow — step 3 (mobile) | Compra tickets mobile |

---

## Descriptive naming convention (for new exports)

Use lowercase, hyphens, and a consistent pattern so files are easy to find:

| Pattern | Example | Meaning |
|---------|---------|---------|
| `home-default.png` | `desktop/home-default.png` | Home, no hover |
| `home-<section>-hover.png` | `desktop/home-tickets-hover.png` | Home, one section in hover state |
| `home-<section>-expanded-hover.png` | `desktop/home-fantofan-expanded-hover.png` | Home, section expanded on hover |
| `page-<name>.png` | `desktop/page-tickets.png` | Destination or app page |
| `carousel-<section>-default.png` | `mobile/carousel-tickets-default.png` | Carousel slide, default |
| `carousel-<section>-hover.png` | `mobile/carousel-fantofan-hover.png` | Carousel slide, active/hover |
| `landing-<section>.png` | `mobile/landing-tickets.png` | Section landing on mobile |
| `compra-step-N.png` | `desktop/compra-step-2.png` | Purchase step N |

Sections: `tickets`, `fantofan`, `cashless`.

---

## How to add screenshots from Figma

1. Open the **Figma node URL** (see table above) or the file and go to the frame.
2. Select the frame in the layers panel if needed.
3. Export: right panel **Export** (or right‑click → Export) → **PNG** (1x or 2x).
4. Save in `desktop/` or `mobile/` using the naming convention above.

---

## Usage

- When implementing, open the matching screenshot next to the code and compare layout, spacing, and colors.
- Reference paths in docs as `screenshots/desktop/...` or `screenshots/mobile/...` (e.g. “See `screenshots/desktop/home-without-hover.png` for polygon placement”).
- Prefer 2x export for sharp reference; if files are too large, use 1x or resize.
