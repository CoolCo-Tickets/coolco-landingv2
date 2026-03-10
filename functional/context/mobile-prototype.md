# Mobile prototype — COOLCO Redesign (MVP)

**Purpose**: Single source of context for building the mobile version of the Coolco landing app. Use this document together with the Figma design to implement pixel-perfect mobile layouts and components.

**Figma file**: [COOLCO-REDESIGN](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN)  
**Mobile node (all MVP pages)**: `2002:248`  
**Direct link**: https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=2002-248&p=f&t=0pYnnPfV2KTgYGR1-0

**Screenshots**: Mobile reference images are in [`screenshots/mobile/`](../screenshots/mobile/). See [screenshots/README.md](../screenshots/README.md) for the full inventory. Key files: `HOME FS TICKETS OFF.png`, `HOME FS TICKETS ON HOVER.png`, `HOME FS FANTOFAN OFF.png`, `HOME FS FANTOFAN ON HOVER.png`, `HOME FS CASHLESS OFF.png` (carousel slides); `LANDING TICKETS.png`, `LANDING FANTOFAN.png`, `LANDING EVENTO.png` (destination landings); `COMPRA TICKETS 01.png`–`03.png` (purchase flow). Do not deviate from layout, spacing, or colors without aligning with these images.

---

## 1. Figma reference

| Item | Value |
|------|--------|
| **File key** | `idfgTN8DJ56tNotnxLyNRP` |
| **Node ID (mobile)** | `2002:248` (page/frame containing all mobile MVP screens) |
| **Usage** | Call Figma MCP `get_design_context` with `fileKey` + `nodeId: "2002:248"` to obtain code, structure, and asset URLs for the mobile frames. For individual screens, use the node IDs of child frames from `get_metadata` on `2002:248`. |

---

## 2. Scope (MVP mobile)

- **Breakpoint**: Mobile = viewport &lt; 1024px (Tailwind default and `sm:`, `md:`). Design frames are typically 375px or 390px width.
- **Pages to build** (same routes as desktop; layout and components adapt):
  1. **Home** — **Carousel** of 3 slides: **TICKETS** (1st), **FAN TO FAN** (2nd), **CASHLESS** (3rd). Each slide has default and hover/active state; “Ingresar” CTA on TICKETS; tap navigates to destination. Reference `screenshots/mobile/HOME FS *.png`.
  2. **Destination pages** — TICKETS landing (`LANDING TICKETS.png`), FAN TO FAN (`LANDING FANTOFAN.png`), event (`LANDING EVENTO.png`); purchase flow `COMPRA TICKETS 01`–`03.png`.
- **Global**: Footer (CoolCo logo, social, links), typography, touch targets ≥ 44px, spacing.

---

## 3. Pages and screens (mobile)

| # | Screen name | Route | Screenshot reference | Notes |
|---|--------------|--------|----------------------|--------|
| 1 | Home carousel (mobile) | `/` | `mobile/HOME FS TICKETS OFF.png`, `HOME FS TICKETS ON HOVER.png`, `HOME FS FANTOFAN OFF.png`, `HOME FS FANTOFAN ON HOVER.png`, `HOME FS CASHLESS OFF.png` | 3 slides: TICKETS, FAN TO FAN, CASHLESS; default and hover states. |
| 2 | TICKETS landing (mobile) | e.g. `/tickets` | `mobile/LANDING TICKETS.png` | Hero, event cards, “Comprar”, Fan to Fan bar. |
| 3 | FAN TO FAN landing (mobile) | e.g. `/fantofan` | `mobile/LANDING FANTOFAN.png` | FAN TO FAN mobile landing. |
| 4 | Event landing (mobile) | e.g. `/evento` | `mobile/LANDING EVENTO.png` | Event mobile layout. |
| 5 | Compra tickets (mobile) | flow from TICKETS | `mobile/COMPRA TICKETS 01.png`–`03.png` | Purchase flow steps. |

---

## 4. Components (mobile)

- **Layout**: Mobile header (logo, menu icon), main content (full width or padded), footer if in design.
- **Navigation**: Hamburger/drawer, bottom nav, or inline links; ensure touch targets ≥ 44px.
- **Home**: **Carousel** — 3 slides (TICKETS, FAN TO FAN, CASHLESS); scroll-snap or swipe; default and hover/active state; “Ingresar” on TICKETS slide; each slide links to destination. Reference `screenshots/mobile/HOME FS *.png`.
- **Destination pages**: TICKETS landing (hero, event cards, “Comprar”), FAN TO FAN landing, event landing; stacked/full-width. Reference `LANDING TICKETS.png`, `LANDING FANTOFAN.png`, `LANDING EVENTO.png`.
- **Compra flow**: Multi-step; reference `COMPRA TICKETS 01`–`03.png`.
- **Shared**: Buttons (e.g. “Ingresar”, “Comprar”, “Descubrí más”), links, footer; same icon set as desktop.

Document for each: variant, states (default, active, focus for a11y), and Tailwind classes or `@theme` tokens.

---

## 5. Design tokens and theming (mobile)

Reuse the same `@theme` as desktop for consistency; override only where the mobile design differs.

- **Colors**: Same palette; ensure contrast for small text and touch areas.
- **Typography**: Possibly smaller base or different scale on mobile; match Figma text styles.
- **Spacing**: Tighter padding/margins; document values used in mobile frames.
- **Touch targets**: Min height/width 44px for interactive elements; spacing between tappable areas.
- **Safe area**: Account for notches/status bar if design assumes safe areas (e.g. `env(safe-area-inset-*)`).

---

## 6. Breakpoints and layout (mobile)

- **Mobile first**: Base styles for mobile; then `sm:`, `md:`, `lg:` for larger viewports.
- **Design width**: Note Figma frame width (e.g. 375px). Use as reference for max-width or padding; avoid horizontal scroll.
- **Layout**: Single column; header sticky if in design; content scrollable; optional sticky CTA on item detail.

---

## 7. Assets (mobile)

- **Images**: Same as desktop where possible; consider smaller or cropped variants for mobile if Figma specifies.
- **Icons**: Same set; ensure size and stroke weight work at small sizes.
- **Paths**: Same as desktop (`apps/landing/public/` or assets folder).

---

## 8. Implementation notes (mobile)

- **Stack**: Same as desktop (React 18, TypeScript, Tailwind v4, Vite, Nx). Reuse `Layout`, `Home`, `ItemDetail`; use responsive classes and conditional rendering where layout differs.
- **Figma → code**: For each mobile screen, call `get_design_context(fileKey, nodeId)` with the mobile frame node ID; adapt to React and Tailwind; keep components shared with desktop where possible (different class overrides for mobile).
- **Touch and a11y**: Adequate touch targets, focus visible, avoid hover-only interactions for critical actions.
- **Router**: Same routes; layout and content adapt via Tailwind breakpoints and component structure.

---

## 9. Checklist before implementation

- [ ] Obtain design context from Figma for node `2002:248` (and per-screen nodes if needed).
- [ ] Fill §3 (Pages and screens) with actual frame names and node IDs.
- [ ] Fill §4 (Components) from design inspection.
- [ ] Confirm §5 (Design tokens) matches or extends desktop theme; add mobile-specific tokens if needed.
- [ ] Export or document assets (§7) and wire into components.
- [ ] Implement mobile layout and pages in `apps/landing` using this doc and Figma as reference.
