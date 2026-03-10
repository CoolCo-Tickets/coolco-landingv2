# Design assets (resourses)

This folder holds **design assets** (fonts, images, logos) for the Coolco landing app. The implementation MUST use these mapped resources for consistency with the Figma design (COOLCO-REDESIGN). Paths below are relative to `functional/context/`.

## Fonts (`resourses/fonts/`)

| File | Use |
|------|-----|
| `Montserrat-Bold.otf` | Bold weight |
| `Montserrat-Bold.ttf` | Bold weight (TTF) |
| `Montserrat-Light.otf` | Light weight |
| `Montserrat-Light.ttf` | Light weight (TTF) |
| `Montserrat-Regular.otf` | Regular weight |
| `Montserrat-Regular.ttf` | Regular weight (TTF) |
| `Montserrat-SemiBold.otf` | SemiBold weight |
| `Montserrat-SemiBold.ttf` | SemiBold weight (TTF) |

Use OTF or TTF consistently in the app (e.g. `@font-face` in `apps/landing/src/styles/index.css`). Map to design tokens / `@theme` where applicable.

## Images (`resourses/images/`)

| File | Use |
|------|-----|
| `coolco-bg.png` | Default/crowd background (e.g. Home desktop/mobile) |
| `coolco-bg-active.png` | Active/hover background variant (e.g. Home section highlight) |

Reference: `screenshots/desktop/home-*.png`, `screenshots/mobile/HOME FS *.png`.

## Logos (`resourses/logos/`)

| File | Use |
|------|-----|
| `CoolCo Cashless_grey.svg` | CASHLESS section/logo (grey) |
| `CoolCo Cashless_white.svg` | CASHLESS section/logo (white) |
| `CoolCo Fan2Fan_grey.svg` | FAN TO FAN section/logo (grey) |
| `CoolCo Fan2Fan_white.svg` | FAN TO FAN section/logo (white) |
| `CoolCo Tickets_grey.svg` | TICKETS section/logo (grey) |
| `CoolCo Tickets_white.svg` | TICKETS section/logo (white) |

Use white variants on dark areas and grey where the design specifies. Section names: CASHLESS (left/3rd slide), TICKETS (center/1st slide), FAN TO FAN (right/2nd slide).

## How to use

1. Copy or reference these assets from the app (e.g. `apps/landing/public/` or import from a path alias).
2. Keep this README in sync when adding or renaming files under `resourses/`.
3. See `functional/context/README.md` and `design-overview.md` for overall context and screenshot references.
