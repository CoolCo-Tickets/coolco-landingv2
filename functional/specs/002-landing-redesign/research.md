# Research (Phase 0) — 002-landing-redesign

**Branch**: `002-landing-redesign`  
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

All Technical Context items are resolved from the existing repo and spec. This document records implementation choices for the spec’s behavioural requirements.

---

## 1. Desktop Home: trapezoid grow-on-hover animation

**Decision**: Implement hover “grow” with CSS `transform: scale(...)` (and optionally `clip-path` for trapezoid shape) plus `transition` for smooth animation. Prefer GPU-accelerated properties (transform, opacity) to avoid layout thrash.

**Rationale**: Spec and design-overview require the trapezoidal section to grow with a smooth animation on hover (screenshots: `home-with-expanded-*.png`). CSS transitions on transform are well-supported and performant; no need for a heavy animation library for this single effect.

**Alternatives considered**: JS-driven width/height animation (worse for performance); SVG morphing (overkill for this layout); third-party animation lib (YAGNI for one effect).

---

## 2. Mobile carousel: 1 s delay before painting new section

**Decision**: After the user commits to a new section (swipe/scroll end or programmatic change), wait 1 second, then apply the “active”/painted state for that section (e.g. update active index and/or CSS class after a 1000 ms timeout or transition-delay).

**Rationale**: Spec FR-002 and design-overview state that when moving to another carousel section, the carousel must wait 1 second before painting/displaying the new section as in the screenshots. This is a deliberate UX constraint.

**Alternatives considered**: Immediate paint (would not match spec); delay on start of transition only (acceptable if visual result matches “1 s before painting” per design).

---

## 3. Design assets (fonts, images, logos)

**Decision**: Use the inventory in `functional/context/resourses/README.md`. Copy or reference assets from `functional/context/resourses/` into the app (e.g. `apps/landing/public/` for static assets, or a dedicated assets folder referenced by Vite). Register Montserrat via `@font-face` in `apps/landing/src/styles/index.css` and map design tokens in `@theme` where applicable.

**Rationale**: FR-008 requires all design assets to be sourced from the mapped inventory and implementation to use these resources. Keeping a single source under `functional/context/resourses/` avoids duplication and keeps traceability.

**Alternatives considered**: Inline assets in repo root (rejected: spec points to context folder); CDN fonts only (rejected: spec requires using provided fonts from inventory).

---

## 4. Breakpoint and viewport behaviour

**Decision**: Use 1024px as the desktop/mobile breakpoint (lg in Tailwind). Desktop = 3 trapezoidal sections; mobile = carousel. On resize across 1024px, switch layout without duplicate content (single source of truth for “current view”, no duplicate DOM for same content).

**Rationale**: Spec and design-overview use “≥ 1024px” for desktop and “< 1024px” for mobile; edge case calls out clean switch at breakpoint.

---

## 5. Contracts and integration surface

**Decision**: For this SPA, the only external “contract” is the route surface (URLs and expected behaviour). Document in `contracts/` the fixed routes and any query/path params (e.g. Compra step). No backend API contract in MVP (mock only).

**Rationale**: Spec fixes routes `/tickets`, `/fantofan`, `/cashless`; Compra flow is multi-step with possible step in URL or state. Defining the route contract keeps implementation and tests aligned.
