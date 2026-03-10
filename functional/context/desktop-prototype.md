# Desktop prototype — COOLCO Redesign (MVP)

**Purpose**: Single source of context for building the desktop version of the Coolco landing app. Use this document together with the Figma design to implement pixel-perfect desktop layouts and components.

**Figma file**: [COOLCO-REDESIGN](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN)  
**Desktop node (all MVP pages)**: `0:1`  
**Direct link**: https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=0-1&p=f&t=0pYnnPfV2KTgYGR1-0

**Screenshots**: Desktop reference images are in [`screenshots/desktop/`](../screenshots/desktop/). See [screenshots/README.md](../screenshots/README.md) for the full inventory. Key files: `home-without-hover.png` (Home default), `home-with-ticket-hover.png`, `home-with-fantofan-hover.png`, `home-with-expanded-ticket-hover.png`, `home-with-expanded-fantofan-hover.png` (hover states); `tickets-page.png`, `fantofan-page.png`, `your-tickets-page.png`, `event-detail-pages.png` (destination pages); `COMPRA 2.png`–`COMPRA 6.png` (purchase flow). Do not deviate from layout, spacing, or colors without aligning with these images.

---

## 1. Figma reference

| Item | Value |
|------|--------|
| **File key** | `idfgTN8DJ56tNotnxLyNRP` |
| **Node ID (desktop)** | `0:1` (page/frame containing all desktop MVP screens) |
| **Usage** | Call Figma MCP `get_design_context` with `fileKey` + `nodeId: "0:1"` to obtain code, structure, and asset URLs for the desktop frames. For individual screens, use the node IDs of child frames from `get_metadata` on `0:1`. |

---

## 2. Scope (MVP desktop)

- **Breakpoint**: Desktop = viewport ≥ 1024px (Tailwind `lg:` and up). Align with design frames in Figma (e.g. 1440px or 1280px artboard width).
- **Pages to build** (functional design):
  1. **Home** — Landing with **3 polygon sections**: **CASHLESS** (left, “Próximamente”), **TICKETS** (center), **FAN TO FAN** (right). Each is a clickable area linking to its destination; hover and expanded-hover states per design.
  2. **Destination pages** — CASHLESS, TICKETS (landing, your tickets, event detail, compra flow), FAN TO FAN; layouts in Figma and in `screenshots/desktop/`.
- **Global**: Footer (social, copyright), typography, colors, spacing. Dark theme; crowd background; white logo and text.

---

## 3. Pages and screens (desktop)

| # | Screen name | Route | Screenshot reference | Notes |
|---|--------------|--------|----------------------|--------|
| 1 | Home / Landing | `/` | `desktop/home-without-hover.png`, `home-with-*-hover.png` | 3 polygon sections (CASHLESS, TICKETS, FAN TO FAN); hover and expanded hover. |
| 2 | CASHLESS | e.g. `/cashless` | — | “Próximamente” on Home. |
| 3 | TICKETS | e.g. `/tickets` | `desktop/tickets-page.png`, `your-tickets-page.png`, `event-detail-pages.png` | TICKETS landing, your tickets, event detail. |
| 4 | FAN TO FAN | e.g. `/fantofan` | `desktop/fantofan-page.png` | FAN TO FAN landing. |
| 5 | Compra (purchase) | flow from TICKETS | `desktop/COMPRA 2.png`–`COMPRA 6.png`, `COMPRA boceto ideal.png` | Multi-step purchase flow. |

---

## 4. Components (desktop)

- **Layout**: Header, main content area, footer (if in design).
- **Navigation**: Logo, nav links, any desktop-only menu.
- **Home**: **3 polygon sections** (trapezoidal) — CASHLESS (left), TICKETS (center), FAN TO FAN (right). Each a `Link` with `clip-path: polygon(...)` or SVG; hover state (color overlay), optional expanded hover. CoolCo logo + section name per polygon; CASHLESS shows “Próximamente”. Reference `screenshots/desktop/home-*.png`.
- **Destination pages**: TICKETS (landing, event cards, “Comprar”), FAN TO FAN (landing), your tickets, event detail; footer (social, copyright). Reference `tickets-page.png`, `fantofan-page.png`, etc.
- **Compra flow**: Multi-step; reference `COMPRA 2`–`6.png`.
- **Shared**: Buttons, links, icons (Instagram, LinkedIn in footer).

Document for each: variant (primary/secondary, sizes), states (default, hover, focus, disabled), and Tailwind classes or `@theme` tokens to use.

---

## 5. Design tokens and theming (desktop)

Map Figma styles to the app’s Tailwind v4 theme (`apps/landing/src/styles/index.css` and `@theme`).

- **Colors**: Backgrounds, text (primary, secondary, muted), borders, brand, CTAs, states (hover, focus).
- **Typography**: Font families, sizes (text-xs … text-4xl), weights, line heights. Match Figma text styles to Tailwind utilities or `@theme` variables.
- **Spacing**: Padding/margin scale (4, 6, 8, 12, 16, 24, 32, etc.) to align with design.
- **Border radius**: Buttons, cards, inputs.
- **Shadows**: Card/elevation shadows if present.

Current app theme has `--color-page-bg`, `--font-sans`. Extend with tokens taken from the desktop frames.

---

## 6. Breakpoints and layout (desktop)

- **Desktop**: `lg:` (1024px) and up. Consider a max-width container (e.g. 1280px or 1440px) if the design uses one.
- **Artboard width**: Note the width of desktop frames in Figma (e.g. 1440px) and use as reference for max-width and padding.
- **Layout**: Header full width; content in a centered container; footer full width if applicable.

---

## 7. Assets (desktop)

- **Images**: Logos, hero image, item thumbnails, placeholders. Export from Figma or use URLs from `get_design_context` response.
- **Icons**: If from Figma, export as SVG; otherwise use the same icon set across desktop and mobile.
- **Paths**: Store under `apps/landing/public/` or a dedicated assets folder; reference in components.

---

## 8. Implementation notes (desktop)

- **Stack**: React 18, TypeScript, Tailwind v4, Vite, Nx. Use existing `Layout`, `Home`, `ItemDetail` and extend with design-driven markup and classes.
- **Figma → code**: For each screen, call `get_design_context(fileKey, nodeId)` with the desktop frame node ID; adapt the generated structure to React components and Tailwind; use design tokens in `@theme` where possible.
- **Accessibility**: Semantic HTML (header, main, nav, footer), focus states, alt texts for images, and ARIA where needed.
- **Router**: Routes already defined; ensure desktop layout wraps `Layout` and that `Home` and `ItemDetail` match the desktop frames in structure and content.

---

## 9. Checklist before implementation

- [ ] Obtain design context from Figma for node `0:1` (and per-screen nodes if needed).
- [ ] Fill §3 (Pages and screens) with actual frame names and node IDs.
- [ ] Fill §4 (Components) from design inspection.
- [ ] Map Figma styles to §5 (Design tokens) and update `@theme` in `index.css`.
- [ ] Export or document assets (§7) and wire into components.
- [ ] Implement desktop layout and pages in `apps/landing` using this doc and Figma as reference.
