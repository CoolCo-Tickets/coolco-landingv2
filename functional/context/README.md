# functional/context

This folder holds **design and implementation context** for the Coolco landing app, derived from the Figma file **COOLCO-REDESIGN**. Use these documents when building the desktop and mobile prototypes so that implementation stays aligned with the designs.

## Contents

| Document | Purpose |
|----------|---------|
| [design-overview.md](./design-overview.md) | **Functional design**: Home = 3 sections **CASHLESS**, **TICKETS**, **FAN TO FAN** (desktop: polygons; mobile: carousel). Each section links to its destination page; TICKETS includes purchase (Compra) flow. Use as source of truth for structure and navigation. |
| [desktop-prototype.md](./desktop-prototype.md) | **Desktop** MVP: Figma node `0:1`, 3 polygon sections (CASHLESS, TICKETS, FAN TO FAN), hover/expanded states, destination pages, Compra flow. Screenshot reference: `screenshots/desktop/`. |
| [mobile-prototype.md](./mobile-prototype.md) | **Mobile** MVP: Figma node `2002:248`, carousel (TICKETS, FAN TO FAN, CASHLESS), landings, Compra flow. Screenshot reference: `screenshots/mobile/`. |
| [screenshots/](./screenshots/) | **Visual reference for pixel-perfect implementation.** Subfolders: `desktop/` (Home, tickets/fantofan/cashless pages, Compra flow), `mobile/` (carousel slides, landings, Compra). Full inventory and naming convention in [screenshots/README.md](./screenshots/README.md). Compare UI against these images so the apariencia sea exacta. |
| [resourses/](./resourses/) | **Design assets (fonts, images, logos).** Fonts: Montserrat (Bold, Light, Regular, SemiBold). Images: `coolco-bg.png`, `coolco-bg-active.png`. Logos: CoolCo Cashless/Fan2Fan/Tickets (grey and white SVG). Full inventory in [resourses/README.md](./resourses/README.md). Implementation MUST use these mapped resources. |

## Figma file

- **File**: [COOLCO-REDESIGN](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN)
- **Desktop (all MVP pages)**: node `0:1` — [Open in Figma](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=0-1&p=f&t=0pYnnPfV2KTgYGR1-0)
- **Mobile (all MVP pages)**: node `2002:248` — [Open in Figma](https://www.figma.com/design/idfgTN8DJ56tNotnxLyNRP/COOLCO-REDESIGN?node-id=2002-248&p=f&t=0pYnnPfV2KTgYGR1-0)

## How to use

1. **Before implementing**: Read the relevant doc (desktop or mobile) and, if possible, run the Figma MCP `get_design_context` with `fileKey: idfgTN8DJ56tNotnxLyNRP` and the corresponding `nodeId` to get structure, code hints, and asset URLs.
2. **Update the docs**: After inspecting Figma (or MCP output), fill in the tables in §3 (Pages and screens) and §4 (Components) with real frame names and node IDs.
3. **Implement**: Use the docs plus Tailwind v4 and `@theme` in `apps/landing` to build layouts and components; refer to the checklist at the end of each document.

## Section names (from design)

The three Home sections are **CASHLESS** (left / 3rd carousel slide; “Próximamente”), **TICKETS** (center / 1st slide), and **FAN TO FAN** (right / 2nd slide). Routes can be e.g. `/tickets`, `/fantofan`, `/cashless` or placeholders until product names are final.

## App reference

- **App**: `apps/landing` (React, TypeScript, Vite, Tailwind v4, Nx)
- **Routes**: `/` (Home), `/seccion/:slug` or future `/tickets`, `/fantofan`, `/cashless`; Compra flow from TICKETS
- **Styles**: `apps/landing/src/styles/index.css` (`@theme` and Tailwind)
