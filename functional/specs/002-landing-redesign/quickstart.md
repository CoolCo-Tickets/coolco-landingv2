# Quickstart — 002-landing-redesign

**Branch**: `002-landing-redesign`  
**App**: `apps/landing` (Nx + Vite + React + Tailwind v4)

Use the workspace package manager (pnpm). From repo root: `/Users/macbookprom2/clientes/coolco/coolco-landing`.

---

## Prerequisites

- Node.js (LTS recommended)
- pnpm 9.x (see root `package.json` `packageManager`)

```bash
pnpm install
```

---

## Serve (development)

```bash
pnpm nx run landing:serve
# or
pnpm dev
```

App is typically at `http://localhost:4200` (or the port Nx/Vite reports). Use viewport ≥ 1024px for desktop Home (3 polygons), &lt; 1024px for mobile carousel.

---

## Build

```bash
pnpm nx run landing:build
# or
pnpm build
```

Output: `apps/landing/dist/` (or path in `project.json`).

---

## Test

```bash
pnpm nx run landing:test
# or
pnpm test
```

Uses Vitest; config in `apps/landing` or root. For watch mode, use the task with `--watch` if supported.

---

## Lint

```bash
pnpm nx run landing:lint
```

Run if the `landing` project has a `lint` target configured in Nx.

---

## Design context

- **Spec**: `functional/specs/002-landing-redesign/spec.md`
- **Plan**: `functional/specs/002-landing-redesign/plan.md`
- **Screenshots**: `functional/context/screenshots/desktop/`, `functional/context/screenshots/mobile/`
- **Assets**: `functional/context/resourses/` (see `functional/context/resourses/README.md`)
- **Design overview**: `functional/context/design-overview.md`

Implement routes `/`, `/tickets`, `/fantofan`, `/cashless` and behaviour per spec and [contracts/routes.md](./contracts/routes.md).
