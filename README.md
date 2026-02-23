# coolco-landing

CoolCo.io Landing Page — Nx monorepo with pnpm.

## Structure

- **`apps/`** — Applications (web, API, etc.)
- **`libs/`** — Shared libraries
- **`tools/`** — Scripts and dev utilities (CLI, tooling)
- **`functional/`** — Spec Kit (spec-driven development): **`.specify/`** (config, scripts, templates, memory), **`specs/`** (feature specs and plans), **`prompts/`** (optional prompts).

Each folder is kept in git via `.gitkeep` when empty.

## Package manager

This workspace uses **pnpm**. Install dependencies with:

```bash
pnpm install
```

## Commands

| Command | Description |
|--------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm nx graph` | Open the Nx dependency graph |
| `pnpm run build` | Build all projects (`nx run-many -t build`) |
| `pnpm run test` | Run tests in all projects (`nx run-many -t test`) |

## Adding projects

### Add an app

```bash
pnpm nx g @nx/js:app apps/<nombre>
```

Use the plugin that matches your stack (e.g. `@nx/next`, `@nx/react`) if you prefer.

### Add a library (with alias)

```bash
pnpm nx g @nx/js:lib libs/<nombre> --importPath=@coolco/<nombre>
```

Libraries can then be imported as `@coolco/<nombre>` from apps and other libs.

## Import alias

The monorepo uses the **`@coolco`** scope. In `tsconfig.base.json`, path mapping is:

- `@coolco/*` → `libs/*`, `apps/*`, `tools/*`

So you can import with `@coolco/<nombre-lib>`, `@coolco/<nombre-app>`, etc., according to where the project lives.

## Nx graph output (optional)

The repo ignores Nx graph output in `.gitignore`: `graph.html`, `static/`.
