# Implementation Plan: COOLCO Landing Redesign (MVP)

**Branch**: `002-landing-redesign` | **Date**: 2025-02-23 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `functional/specs/002-landing-redesign/spec.md`

**Note**: This plan is produced by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Implement the COOLCO landing redesign from Figma (COOLCO-REDESIGN): Home with three sections (CASHLESS, TICKETS, FAN TO FAN) as trapezoidal polygons on desktop (with smooth grow-on-hover animation) and as a carousel on mobile (with 1 s delay before painting the new section); three fixed routes (`/tickets`, `/fantofan`, `/cashless`) and destination pages; full Compra flow from TICKETS (UI + mock backend). Assets from `functional/context/resourses/`; design reference in `functional/context/screenshots/` and design-overview. Stack: React 18, TypeScript, Vite, Tailwind v4 in Nx monorepo (`apps/landing`).

## Technical Context

**Language/Version**: TypeScript 5.6  
**Primary Dependencies**: React 18, Vite 6, Tailwind v4 (@tailwindcss/vite 4.2), React Router 7, TanStack Query 5, Zustand 5  
**Storage**: N/A (client-only SPA; Compra/backend mock or in-memory for MVP)  
**Testing**: Vitest 2, @testing-library/react 16, jsdom  
**Target Platform**: Modern browsers (desktop and mobile); viewport breakpoint 1024px (lg)  
**Project Type**: web-app (frontend SPA)  
**Performance Goals**: Smooth 60fps for trapezoid hover animation and carousel transitions; LCP and CLS within common thresholds for landing pages (validated manually or via Lighthouse post-MVP unless a dedicated task is added in Polish).  
**Constraints**: Layout and visuals MUST match Figma/screenshots; assets from `functional/context/resourses/`; routes fixed per spec  
**Scale/Scope**: Single landing app; ~4 main views (Home, 3 destinations) + Compra multi-step flow; design tokens via `@theme` in `apps/landing/src/styles/index.css`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Constitution file at `functional/.specify/memory/constitution.md` is a generic template (placeholders only). No project-specific gates defined.
- **Verdict**: No blocking gates; proceed with Phase 0 and Phase 1.

## Project Structure

### Documentation (this feature)

```text
functional/specs/002-landing-redesign/
├── plan.md              # This file
├── research.md          # Phase 0
├── data-model.md        # Phase 1
├── quickstart.md        # Phase 1
├── contracts/           # Phase 1 (route contract)
└── tasks.md             # Phase 2 (/speckit.tasks — not created by /speckit.plan)
```

### Source Code (repository root)

```text
apps/landing/
├── index.html
├── package.json
├── project.json
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
└── src/
    ├── api/           # client, types (existing)
    ├── app.tsx
    ├── main.tsx
    ├── hooks/
    ├── pages/         # Home, ItemDetail, SeccionPage → extend for /tickets, /fantofan, /cashless + Compra
    ├── queries/
    ├── router/        # Layout, routes, index
    ├── store/         # useAppStore (Zustand)
    ├── styles/        # index.css (@theme, Tailwind)
    ├── tests/         # setup, test-utils
    └── vite-env.d.ts

functional/context/
├── design-overview.md
├── desktop-prototype.md
├── mobile-prototype.md
├── README.md
├── resourses/         # fonts, images, logos (inventory: resourses/README.md)
└── screenshots/       # desktop/, mobile/ (visual reference)
```

**Structure Decision**: Single Nx app `apps/landing`; no separate backend for MVP. Routes and pages live under `apps/landing/src`; design context and assets under `functional/context/`. Contracts define route surface (URLs and expected behaviour) for the SPA.

## Complexity Tracking

> No constitution violations to justify. Leave empty or remove section if none.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| —         | —          | —                                    |
