# Tasks: Test Setup & Project Bootstrap

**Input**: Design documents from `functional/specs/001-test-setup/`
**Prerequisites**: plan.md, spec.md
**Status**: Feature complete (001 closed).

Tasks below reflect the four user stories; all delivered. Use for GitHub Issues sync (Phase/Status labels, close when done).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: US1, US2, US3, US4

---

## Phase 1: Setup

**Purpose**: Monorepo and root tooling

- [x] T001 Create Nx monorepo with pnpm at repo root (package.json, nx.json, pnpm-workspace.yaml)
- [x] T002 Configure root scripts: build, dev, test (AGENTS.md, package.json)

---

## Phase 2: User Story 1 - Monorepo and build tooling (P1)

**Goal**: Build, serve, test runnable from root.

- [x] T003 [US1] Nx workspace and default app target (apps/landing, project.json)

---

## Phase 3: User Story 2 - Frontend app and stack (P2)

**Goal**: Landing app with chosen tech stack.

- [x] T004 [US2] Frontend app structure and config (apps/landing: Vite, React, TypeScript, Tailwind v4)
- [x] T005 [US2] Router, state, API client (apps/landing/src)

---

## Phase 4: User Story 3 - Agents and skills (P3)

**Goal**: Cursor agents and skills indexed.

- [x] T006 [US3] Create agents in .cursor/agents (ci-monitor, github-project-manager, senior-frontend-developer, speckit-guide)
- [x] T007 [US3] Create skills in .cursor/skills (Nx, React, TS, Tailwind, link-workspace, monitor-ci)
- [x] T008 [US3] Index agents and skills in AGENTS.md

---

## Phase 5: User Story 4 - Spec Kit (P4)

**Goal**: Spec Kit structure and first feature spec/plan.

- [x] T009 [US4] Spec Kit layout and scripts (functional/.specify: templates, scripts/bash)
- [x] T010 [US4] Feature 001-test-setup spec and plan (functional/specs/001-test-setup/spec.md, plan.md)
