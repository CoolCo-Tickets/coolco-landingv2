# Tasks: COOLCO Landing Redesign (MVP)

**Input**: Design documents from `functional/specs/002-landing-redesign/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story so each story can be implemented and tested independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story (US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path conventions

- **App**: `apps/landing/src/` (pages, router, styles, store)
- **Context**: `functional/context/` (screenshots, resourses, design-overview)

---

## Phase 1: Setup (shared infrastructure)

**Purpose**: Wire design assets and tokens so all user stories can use them.

- [x] T001 [P] Copy or link fonts from `functional/context/resourses/fonts/` into `apps/landing` (e.g. `public/fonts/`) and register Montserrat (Bold, Light, Regular, SemiBold) via `@font-face` in `apps/landing/src/styles/index.css`
- [x] T002 [P] Copy or link images and logos from `functional/context/resourses/images/` and `resourses/logos/` so the app can serve them (e.g. `apps/landing/public/` or Vite alias); document mapping in code or README per `functional/context/resourses/README.md`
- [x] T003 [P] Add design tokens (colors, spacing, typography) to `apps/landing/src/styles/index.css` in `@theme` block traceable to Figma/design-overview (FR-006)

---

## Phase 2: Foundational (blocking prerequisites)

**Purpose**: Routes and layout MUST be in place before any user story UI. No user story work can begin until this phase is complete.

- [x] T004 Add fixed routes `/tickets`, `/fantofan`, `/cashless` to `apps/landing/src/router/routes.tsx` (or equivalent router config); keep `/` for Home; remove or redirect `seccion/:slug` in favour of fixed routes per `contracts/routes.md`
- [x] T005 Create destination page components (or single parameterized page) for CASHLESS, TICKETS, and FAN TO FAN in `apps/landing/src/pages/` and wire them to the new routes
- [x] T006 Update `apps/landing/src/router/Layout.tsx` so destination pages have back/home navigation to `/` and layout respects 1024px breakpoint where needed
- [x] T007 Ensure background images `coolco-bg.png` and `coolco-bg-active.png` from resourses are loadable in the app (e.g. from `public/` or imported path) with fallback so layout does not collapse (edge case: missing/late assets)

**Checkpoint**: Foundation ready — user story implementation can start.

---

## Phase 3: User Story 1 — Home desktop (Priority: P1)

**Goal**: Home on desktop (≥1024px) shows three trapezoidal sections (CASHLESS, TICKETS, FAN TO FAN); each grows with smooth animation on hover and links to its destination; CASHLESS shows "Próximamente".

**Independent Test**: Open Home at viewport ≥1024px; confirm three polygon areas, hover grow animation, and clicks navigate to `/cashless`, `/tickets`, `/fantofan`. Compare to `functional/context/screenshots/desktop/home-without-hover.png`, `home-with-expanded-*.png`.

### Implementation for User Story 1

- [x] T008 [US1] Implement three trapezoidal polygon sections (CASHLESS left, TICKETS center, FAN TO FAN right) in `apps/landing/src/pages/Home.tsx` for viewport ≥1024px; use `@theme` tokens and reference `functional/context/screenshots/desktop/home-*.png`
- [x] T009 [US1] Add smooth grow-on-hover animation for each trapezoid in `apps/landing/src/pages/Home.tsx` (CSS transform + transition per `research.md`); match `home-with-expanded-ticket-hover.png`, `home-with-expanded-fantofan-hover.png`
- [x] T010 [US1] Wire each section to `Link` (or router) to `/cashless`, `/tickets`, `/fantofan` in `apps/landing/src/pages/Home.tsx`; ensure CASHLESS shows "Próximamente" label
- [x] T011 [US1] Use background/image assets from resourses (e.g. `coolco-bg.png`, `coolco-bg-active.png`) and section logos per design; ensure layout, spacing, and colors match Figma/screenshots within acceptable tolerance (FR-001, FR-004)

**Checkpoint**: User Story 1 is implementable and testable on desktop.

---

## Phase 4: User Story 2 — Home mobile (Priority: P2)

**Goal**: Home on mobile (<1024px) shows a carousel of three slides (TICKETS, FAN TO FAN, CASHLESS); when changing section, 1 s delay before painting new section; tap navigates to same three destinations; "Ingresar" on TICKETS slide is UI only.

**Independent Test**: Open Home at viewport <1024px; confirm carousel, 1 s delay on section change, tap navigates correctly. Compare to `functional/context/screenshots/mobile/HOME FS *.png`.

### Implementation for User Story 2

- [x] T012 [US2] Implement carousel with three slides (order: TICKETS, FAN TO FAN, CASHLESS) in `apps/landing/src/pages/Home.tsx` for viewport <1024px; default and active/hover state per screenshots (FR-002)
- [x] T013 [US2] Add 1 second delay before painting/displaying the new section when user swipes or scrolls to another slide in `apps/landing/src/pages/Home.tsx` (per spec and `research.md`)
- [x] T014 [US2] Wire each carousel slide tap (and "Ingresar" on TICKETS) to navigate to `/tickets`, `/fantofan`, or `/cashless` in `apps/landing/src/pages/Home.tsx`; no login/session (UI only)
- [x] T015 [US2] Match carousel layout, typography, and colors to `functional/context/screenshots/mobile/HOME FS *.png` and Figma node `2002:248` (FR-002, FR-004)

**Checkpoint**: User Stories 1 and 2 both work (desktop polygons + mobile carousel).

---

## Phase 5: User Story 3 — Destination pages (Priority: P3)

**Goal**: CASHLESS, TICKETS, and FAN TO FAN destination pages render with layout and content matching Figma; TICKETS includes landing, your tickets, event detail; CASHLESS shows "Próximamente"; back/home returns to `/`.

**Independent Test**: Navigate from Home to each destination (desktop and mobile); verify layout and back/home. Reference `functional/context/screenshots/desktop/` and `screenshots/mobile/` per spec.

### Implementation for User Story 3

- [x] T016 [US3] Implement CASHLESS destination page at `/cashless` with "Próximamente" (or coming-soon) content in `apps/landing/src/pages/`; layout and styling per design (FR-003)
- [x] T017 [US3] Implement TICKETS destination landing at `/tickets` (event list, hero, "Comprar" CTAs) in `apps/landing/src/pages/` on both desktop and mobile viewports; match `functional/context/screenshots/desktop/tickets-page.png` and `screenshots/mobile/LANDING TICKETS.png` (FR-003)
- [x] T018 [US3] Implement FAN TO FAN destination page at `/fantofan` in `apps/landing/src/pages/` on both desktop and mobile viewports; match `functional/context/screenshots/desktop/fantofan-page.png` and `screenshots/mobile/LANDING FANTOFAN.png` (FR-003)
- [x] T019 [US3] Add "your tickets" and event detail views (or placeholders) for TICKETS in `apps/landing/src/pages/` per `your-tickets-page.png`, `event-detail-pages.png`, `LANDING EVENTO.png` (FR-003)
- [x] T020 [US3] Ensure every destination page has back or home control that navigates to `/`; "Ingresar" and "Mi cuenta" are UI-only links (no login) (FR-005, edge case)

**Checkpoint**: All three destinations and TICKETS sub-views are reachable and match design.

---

## Phase 6: User Story 4 — Compra flow (Priority: P4)

**Goal**: From TICKETS, user can start Compra and go through all steps per design; each step matches desktop and mobile screenshots; back/cancel returns to TICKETS or Home; backend/payment is mock or placeholder.

**Independent Test**: From `/tickets`, start Compra; advance through steps; verify layout per COMPRA screenshots; use back/cancel. Reference `screenshots/desktop/COMPRA 2.png`–`COMPRA 6.png`, `screenshots/mobile/COMPRA TICKETS 01.png`–`03.png`.

### Implementation for User Story 4

- [x] T021 [US4] Add Compra flow entry from TICKETS landing (e.g. "Comprar" button) in `apps/landing/src/pages/`; route or state per `contracts/routes.md` (e.g. `/tickets/compra` or query param) (FR-007)
- [x] T022 [US4] Implement all Compra steps (desktop and mobile layouts) in `apps/landing/src/pages/` per `functional/context/screenshots/desktop/COMPRA *.png` and `screenshots/mobile/COMPRA TICKETS *.png` (FR-007)
- [x] T023 [US4] Add step navigation (next/previous) and back/cancel that returns to TICKETS or Home per design in `apps/landing/src/pages/` (FR-007)
- [x] T024 [US4] Use in-memory or mock state for Compra flow (no real payment backend); optional step in URL or Zustand store per `data-model.md` (FR-007)

**Checkpoint**: Compra flow is complete and testable end-to-end with mock data.

---

## Phase 7: Polish and cross-cutting concerns

**Purpose**: Edge cases and quality that affect multiple stories.

- [x] T025 [P] [Polish] Handle viewport resize in `apps/landing/src/pages/Home.tsx`: when crossing 1024px, switch between 3-polygon layout and carousel without broken layout or duplicate content (edge case)
- [x] T026 [P] [Polish] Add loading or fallback for background and other assets so layout does not collapse when assets are missing or slow (edge case) in `apps/landing`
- [x] T027 [Polish] Ensure polygon areas and carousel slides are focusable with keyboard and have visible focus indicators; touch targets on mobile ≥44px (accessibility edge case) in `apps/landing`
- [x] T028 [Polish] Run quickstart validation: `pnpm nx run landing:serve`, `pnpm nx run landing:build`, `pnpm nx run landing:test` per `functional/specs/002-landing-redesign/quickstart.md`

---

## Dependencies and execution order

### Phase dependencies

- **Phase 1 (Setup)**: No dependencies — start first.
- **Phase 2 (Foundational)**: Depends on Phase 1 — blocks all user stories.
- **Phase 3 (US1)**: Depends on Phase 2.
- **Phase 4 (US2)**: Depends on Phase 2; can run in parallel with Phase 3 if desired.
- **Phase 5 (US3)**: Depends on Phase 2 (routes and layout); can run after or in parallel with Phase 3/4 once foundation is done.
- **Phase 6 (US4)**: Depends on Phase 5 (TICKETS destination and entry point).
- **Phase 7 (Polish)**: Depends on Phases 3–6.

### User story dependencies

- **US1 (P1)**: After Phase 2 — no dependency on US2/US3/US4.
- **US2 (P2)**: After Phase 2 — no dependency on US3/US4; shares Home.tsx with US1.
- **US3 (P3)**: After Phase 2 — no dependency on US4; provides destination pages.
- **US4 (P4)**: After US3 (TICKETS page and Compra entry).

### Parallel opportunities

- T001, T002, T003 (Setup) can run in parallel.
- T008–T011 (US1) are sequential within same file; T011 can use assets from T001–T002.
- T012–T015 (US2) are largely in same file (Home.tsx).
- T016–T020 (US3): T016, T017, T018 can be done in parallel (different pages); T019–T020 follow.
- T025, T026 (Polish) can run in parallel.

---

## Implementation strategy

### MVP first (User Story 1 only)

1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (US1 — Home desktop).
3. Validate: test Home at ≥1024px (three sections, hover animation, navigation).
4. Deploy or demo if scope is sufficient.

### Incremental delivery

1. Setup + Foundational → routes and assets ready.
2. US1 → Home desktop → validate → demo.
3. US2 → Home mobile carousel → validate → demo.
4. US3 → Destination pages → validate → demo.
5. US4 → Compra flow → validate → demo.
6. Polish → resize, a11y, quickstart.

### Suggested MVP scope

- **Minimum**: Phases 1, 2, and 3 (Setup + Foundational + US1). Delivers Home desktop with three trapezoids, hover animation, and navigation to `/tickets`, `/fantofan`, `/cashless` (destination pages can be minimal shells from Phase 2).

---

## Notes

- [P] = parallelizable where files or concerns do not conflict.
- [USn] maps each task to the user story for traceability.
- Spec does not require automated test tasks; Independent Test and Acceptance Scenarios are manual/acceptance. Add unit or e2e tasks only if explicitly requested later.
- Commit after each task or logical group; stop at any checkpoint to validate that story independently.
