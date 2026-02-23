# functional/

Spec Kit (GitHub Spec Kit) lives under this folder so all spec-driven artifacts stay in one place.

## Contents

- **`.specify/`** — Spec Kit config, bash scripts, templates, and memory (e.g. constitution).
- **`specs/`** — Feature specs and plans. Each feature has a directory (e.g. `001-feature-name/`) with `spec.md`, `plan.md`, `tasks.md`, etc.
- **`prompts/`** — Optional; for custom prompts if you add them.

## Usage

- **Run everything from the repo root.** Commands and scripts assume you are at the project root; paths inside them already point to `functional/.specify/` and `functional/specs/`.
- **Cursor commands** (e.g. `/speckit.specify`, `/speckit.plan`) invoke scripts under `functional/.specify/scripts/bash/` and read templates from `functional/.specify/templates/` and memory from `functional/.specify/memory/`.
- **Create a feature**: from repo root, run  
  `./functional/.specify/scripts/bash/create-new-feature.sh --json --short-name "my-feature" "My feature description"`  
  to create a branch and `functional/specs/<branch>/spec.md`.
- **Setup plan**: from repo root, run  
  `./functional/.specify/scripts/bash/setup-plan.sh --json`  
  to create `functional/specs/<current-branch>/plan.md`.
