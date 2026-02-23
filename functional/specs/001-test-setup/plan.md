# Implementation Plan: Test Setup & Project Bootstrap

**Branch**: `001-test-setup` | **Date**: 2025 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `functional/specs/001-test-setup/spec.md`

## Summary

Bootstrap of the Coolco landing monorepo: Nx workspace with pnpm, a React/TypeScript/Vite frontend app (Tailwind v4), Cursor agents and skills for Nx/frontend/Spec Kit/CI/GitHub, and the GitHub Spec Kit flow under `functional/.specify` and `functional/specs`. This feature is complete; the plan documents the delivered state.

## Technical Context

**Language/Version**: TypeScript (strict), React 18  
**Primary Dependencies**: React, React DOM, React Router, TanStack Query, Zustand; Vite, Nx (Vite plugin), Tailwind v4  
**Storage**: N/A (frontend-only for this feature)  
**Testing**: Vitest, Testing Library (React, Jest-DOM); Nx runs tests via `landing:test`  
**Target Platform**: Web (modern browsers)  
**Project Type**: Monorepo (Nx) with web application(s)  
**Package Manager**: pnpm; workspace at repo root  
**Performance Goals**: Standard SPA (fast dev server, production build optimised by Vite)  
**Constraints**: Run all commands from repo root; Nx as single entry point for build/serve/test/lint  
**Scale/Scope**: Single landing app in this phase; structure ready for more apps/libs

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution at `functional/.specify/memory/constitution.md` is still template placeholders. No project-specific principles ratified yet. For this feature, no constitution gates were applied; future features should align with constitution once filled.

## Project Structure

### Documentation (this feature)

```text
functional/specs/001-test-setup/
├── plan.md              # This file
├── spec.md              # Feature specification (complete)
├── research.md          # Optional (Phase 0)
├── data-model.md        # Optional (Phase 1) — N/A for bootstrap
├── quickstart.md        # Optional (Phase 1)
├── contracts/           # Optional — N/A for bootstrap
├── checklists/          # Optional
└── tasks.md             # Optional (/speckit.tasks output when used)
```

### Source and config (repository root)

```text
# Monorepo root
package.json              # Root workspace; pnpm; scripts: build, dev, test
pnpm-workspace.yaml       # Workspace definition
nx.json                   # Nx workspace config
tsconfig.base.json        # Shared TypeScript base

# Apps
apps/
├── landing/              # Frontend app (React, Vite, Tailwind v4)
│   ├── src/
│   │   ├── app.tsx
│   │   ├── main.tsx
│   │   ├── pages/
│   │   ├── router/
│   │   ├── store/
│   │   ├── api/
│   │   ├── styles/
│   │   └── tests/
│   ├── index.html
│   ├── vite.config.ts
│   ├── project.json      # Nx targets: build, serve, test
│   └── tsconfig*.json

# Libs (future)
libs/

# Tools (future)
tools/

# Spec Kit
functional/
├── .specify/
│   ├── memory/           # constitution.md (template)
│   ├── templates/        # spec, plan, tasks, checklist, constitution
│   └── scripts/bash/     # create-new-feature, setup-plan, check-prerequisites, update-agent-context
├── specs/
│   └── 001-test-setup/   # This feature
└── README.md             # Spec Kit usage

# Cursor: agents and skills
.cursor/
├── agents/               # Subagents
│   ├── ci-monitor-subagent.md
│   ├── github-project-manager.md
│   ├── senior-frontend-developer.md
│   └── speckit-guide.md
└── skills/               # Skills (SKILL.md per skill)
    ├── link-workspace-packages/
    ├── monitor-ci/
    ├── nx-best-practices/
    ├── nx-generate/
    ├── nx-plugins/
    ├── nx-run-tasks/
    ├── nx-workspace/
    ├── react-best-practices/
    ├── tailwind-v4-best-practices/
    └── typescript-best-practices/

# Project guidance
AGENTS.md                 # Index of agents and skills + Nx guidelines
```

**Structure decision**: Nx monorepo with `apps/landing` as the only app for this feature. `libs/` and `tools/` are present for future use. Spec Kit lives under `functional/`; Cursor agents and skills under `.cursor/`. All Nx and Spec Kit commands assume execution from repo root.

## Delivered scope (001-test-setup)

- Nx monorepo with pnpm; root scripts for build, dev, test.
- Frontend app `landing`: React 18, TypeScript, Vite, Tailwind v4, React Router, TanStack Query, Zustand; Nx targets build, serve, test.
- Cursor agents: ci-monitor, github-project-manager, senior-frontend-developer, speckit-guide.
- Cursor skills: Nx (workspace, generate, run-tasks, plugins, best-practices), link-workspace-packages, monitor-ci, react/typescript/tailwind-v4 best practices.
- Spec Kit: `functional/.specify` (templates, scripts, memory) and `functional/specs/001-test-setup` with spec and plan describing this bootstrap.
- AGENTS.md updated with index of agents and skills.

## Complexity Tracking

No constitution violations to justify; this feature did not apply constitution gates.
