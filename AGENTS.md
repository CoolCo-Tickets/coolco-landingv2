<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# Index: Agents & Skills

## Agents (subagents)

| Agent | Description |
|-------|-------------|
| **ci-monitor-subagent** | Polls Nx Cloud CI pipeline and self-healing status; returns structured state when actionable. Spawned by `/monitor-ci` to monitor CI Attempt status. |
| **github-project-manager** | Syncs `functional/specs/*/tasks.md` with GitHub Issues and Projects. Creates missing issues, updates Phase/Status labels, closes issues when tasks are done. Use when tasks.md changes or user says "actualizar GH Projects" / "sincronizar tareas con GitHub". |
| **senior-frontend-developer** | Senior Frontend expert in React, TypeScript, Tailwind v4, Nx, Vite, pnpm. Pixel-perfect UIs from mockups, scaffolding apps/libs/tools. Use for exact UI implementation and JS/TS best practices in this stack. |
| **speckit-guide** | Expert guide for GitHub Spec Kit flow: constitution → specify → clarify → plan → tasks → checklists → analyze → implement. Use when user asks about spec kit steps, order, "qué paso sigue", or how to produce a good constitution, spec, plan, tasks, or implementation. |

## Skills

| Skill | Description |
|-------|-------------|
| **link-workspace-packages** | Link workspace packages in monorepos (npm, yarn, pnpm, bun). Use when creating new packages, sibling imports, or resolution errors for `@org/*`. Prefer package manager workspace commands over tsconfig paths. |
| **monitor-ci** | Monitor Nx Cloud CI pipeline and self-healing fixes. Use when user says "monitor ci", "watch ci", "check ci status". Prefer this over native CI tools (gh, glab) for CI monitoring. |
| **nx-best-practices** | Nx monorepo best practices: project structure, caching, affected, targets, generators. Use when configuring apps/libs, optimizing CI/cache, or resolving Nx config. |
| **nx-generate** | Generate code with Nx generators. Invoke first for scaffolding, setup, creating apps/libs, project structure. Use before nx_docs or exploring. |
| **nx-plugins** | Find and add Nx plugins. Use when discovering plugins, installing a plugin, or adding a framework/technology to the workspace. |
| **nx-run-tasks** | Run tasks in the Nx workspace (build, test, lint, serve, etc.). Use when user wants to execute any workspace-defined task. |
| **nx-workspace** | Explore Nx workspaces: projects, targets, dependencies. Use when answering "what projects?", "how is X configured?", or when an nx command fails or targets need checking. |
| **react-best-practices** | React best practices: components, hooks, composition, performance, a11y. Use when writing or reviewing React code or working with React 19 / Server Components. |
| **tailwind-v4-best-practices** | Tailwind CSS v4: design system, pixel-perfect UI, utility-first, @theme. Use when implementing or reviewing UI with Tailwind v4 or design tokens. |
| **typescript-best-practices** | TypeScript best practices: strict mode, typing, type safety. Use when writing or reviewing TS code or configuring tsconfig. |

---

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax


<!-- nx configuration end-->