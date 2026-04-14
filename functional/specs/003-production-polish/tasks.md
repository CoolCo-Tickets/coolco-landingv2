# Tasks: Production Polish — SEO, Accesibilidad, UX Mobile y Performance

**Input**: Design documents from `functional/specs/003-production-polish/`  
**Prerequisites**: plan.md (required), spec.md (required), quickstart.md

**Organization**: Tasks are grouped by user story so each story can be implemented and tested independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story (US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path conventions

- **App**: `apps/landing/` (index.html, public/, src/pages/)
- **Spec**: `functional/specs/003-production-polish/`

---

## Phase 1: Setup

**Purpose**: No setup tasks for this feature. No new dependencies, no new files of code, no infrastructure changes. All work is edits to existing files + 1 static asset.

_Skip to user stories._

---

## Phase 2: User Story 1 — SEO y meta tags (Priority: P1) 🎯

**Goal**: La landing tiene title descriptivo, meta description, Open Graph tags, canonical URL, y og-image para previews en buscadores y redes sociales.

**Independent Test**: Inspeccionar `<head>` en dev tools; pegar URL en Twitter Card Validator / WhatsApp; verificar que preview muestra título, descripción e imagen.

### Implementation for User Story 1

- [x] T001 [US1] Reemplazar `<title>CoolCo Landing</title>` por `<title>CoolCo | Tickets, Cashless y Fan to Fan para eventos</title>` y agregar después del `<title>` los siguientes tags en `apps/landing/index.html`:
  - `<meta name="description" content="CoolCo es tu plataforma integral para comprar tickets, pagos cashless y reventa Fan to Fan en eventos y espectáculos.">`
  - `<meta property="og:type" content="website">`
  - `<meta property="og:title" content="CoolCo | Tickets, Cashless y Fan to Fan para eventos">`
  - `<meta property="og:description" content="CoolCo es tu plataforma integral para comprar tickets, pagos cashless y reventa Fan to Fan en eventos y espectáculos.">`
  - `<meta property="og:image" content="https://coolco.io/og-image.png">`
  - `<meta property="og:url" content="https://coolco.io">`
  - `<link rel="canonical" href="https://coolco.io">`

- [x] T002 [P] [US1] Crear asset `apps/landing/public/og-image.png` — 1200×630px, logo CoolCo centrado sobre fondo de marca oscuro (gradiente `#0f172a` → `#1a1a2e`). Puede generarse con herramienta gráfica, canvas HTML, o placeholder temporal.

**Checkpoint**: `<head>` contiene todos los meta tags. `og-image.png` existe en `public/`. Preview funciona en sharing debuggers.

---

## Phase 3: User Story 2 — Indicadores de paginación (dots) en carrusel mobile (Priority: P2)

**Goal**: El carrusel mobile muestra dots que indican posición actual y total de slides, con click-to-navigate.

**Independent Test**: Abrir Home en viewport <1024px; verificar dots visibles debajo del contenido, dot activo destacado, click en dot navega al slide correcto, swipe/flechas actualizan dots.

### Implementation for User Story 2

- [x] T003 [US2] Agregar bloque JSX de pagination dots en la sección mobile carousel de `apps/landing/src/pages/Home.tsx`. Insertar después del bloque del right arrow (`{carouselIndex < MOBILE_SECTIONS.length - 1 && ...}`) y antes del cierre `</section>` del carrusel. Implementación:

  ```tsx
  {
    /* Pagination dots */
  }
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {MOBILE_SECTIONS.map((_, i) => (
      <button
        key={i}
        type="button"
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 p-2 ${
          carouselIndex === i ? 'bg-white scale-125' : 'bg-white/40'
        }`}
        onClick={() => goToSlide(i)}
        aria-label={`Ir al slide ${i + 1}`}
      />
    ))}
  </div>;
  ```

  - Posición: `bottom-8` (no solapar con footer `bottom-0 py-6`)
  - Activo: `bg-white scale-125`; Inactivo: `bg-white/40`
  - Touch target: `w-2.5 h-2.5` (10px visual) + `p-2` (8px padding → ~26px táctil, cumple WCAG 2.2 Target Size AA ≥24px) + `gap-2` para separación

**Checkpoint**: En mobile, dots visibles, reflejan posición, click funciona, swipe/flechas los actualizan.

---

## Phase 4: User Story 3 — Accesibilidad: aria-labels descriptivos (Priority: P2)

**Goal**: Todos los links interactivos (productos, RRSS) tienen `aria-label` descriptivo para lectores de pantalla.

**Independent Test**: Navegar con VoiceOver/NVDA; verificar que cada link anuncia su destino descriptivo.

### Implementation for User Story 3

- [x] T004 [P] [US3] Agregar `aria-label={`Ir a CoolCo ${section.label}`}` a los `<a>` de desktop (Layer 4, logo links) en `apps/landing/src/pages/Home.tsx` — el `<a>` que envuelve cada logo de producto (~línea 218). Agregar el atributo junto a `className` y `style`.

- [x] T005 [P] [US3] Agregar `aria-label` a los links del carrusel mobile en `apps/landing/src/pages/Home.tsx`:
  - Link del logo (~línea 288): agregar `aria-label={`Ir a CoolCo ${section.label}`}`
  - Link "Ingresar" (~línea 299): agregar `aria-label={`Ingresar a CoolCo ${section.label}`}`

- [x] T006 [US3] Actualizar `aria-label` de los links RRSS en el footer de `apps/landing/src/pages/Home.tsx`:
  - Instagram (~línea 354): `aria-label="Instagram"` → `aria-label="Instagram de CoolCo"`
  - LinkedIn (~línea 363): `aria-label="LinkedIn"` → `aria-label="LinkedIn de CoolCo"`

**Checkpoint**: VoiceOver anuncia destino descriptivo para cada link de producto y cada link de RRSS. Verificar también que las flechas del carrusel mantienen `aria-label="Anterior"` / `aria-label="Siguiente"` (no se editan, solo confirmar).

---

## Phase 5: User Story 4 — Dimensiones explícitas en imágenes para CLS (Priority: P3)

**Goal**: Todos los `<img>` tienen `width` y `height` HTML para que el browser reserve espacio y evite layout shifts.

**Independent Test**: Inspeccionar todos los `<img>` en DOM; verificar atributos `width`/`height`. Lighthouse CLS < 0.1.

### Implementation for User Story 4

- [x] T007 [US4] Agregar atributos `width` y `height` a TODOS los elementos `<img>` en `apps/landing/src/pages/Home.tsx`:

  | Imagen        | Ubicación        | Atributos a agregar       |
  | ------------- | ---------------- | ------------------------- |
  | Logo desktop  | Layer 4 (~L229)  | `width={280} height={80}` |
  | Logo mobile   | Carousel (~L296) | `width={208} height={60}` |
  | Left arrow    | Carousel (~L324) | `width={16} height={16}`  |
  | Right arrow   | Carousel (~L335) | `width={16} height={16}`  |
  | IG icon       | Footer (~L355)   | `width={28} height={28}`  |
  | LinkedIn icon | Footer (~L364)   | `width={28} height={28}`  |

  Nota: Los valores son hints de aspect ratio; el CSS (`w-52 h-auto`, `h-7 w-7`, etc.) sigue controlando el tamaño renderizado final.

**Checkpoint**: Todos los `<img>` tienen `width`/`height`. Lighthouse CLS < 0.1 en desktop y mobile.

---

## Phase 6: Polish & Verification

**Purpose**: Build check y validación de métricas objetivo.

- [x] T008 [P] Verificar build de producción: `pnpm nx build landing` — sin errores ni warnings
- [ ] T009 Ejecutar Lighthouse audit (desktop + mobile) y validar: SEO ≥ 80, Accessibility ≥ 80, CLS < 0.1. Documentar scores en este archivo al completar. Nota: SC-005 (score general ≥ 85/100) requiere re-evaluación del reporte de análisis original por separado — Lighthouse cubre SC-001, SC-002, SC-003 y parcialmente SC-004.

**Checkpoint**: Build limpio. Métricas Lighthouse alcanzan targets del spec.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: N/A — no hay setup
- **US1 (Phase 2)**: Independiente — edita `index.html` + crea asset
- **US2 (Phase 3)**: Independiente — agrega JSX nuevo en `Home.tsx`
- **US3 (Phase 4)**: Independiente — edita atributos en `Home.tsx`
- **US4 (Phase 5)**: Independiente — edita atributos `<img>` en `Home.tsx`
- **Polish (Phase 6)**: Depende de todas las fases anteriores

### Recommended Execution Order

```
US1 (index.html)  ─────────────────┐
US3 (aria-labels en Home.tsx) ─────┤──→ Phase 6 (build + Lighthouse)
US2 (dots en Home.tsx) ────────────┤
US4 (img dimensions en Home.tsx) ──┘
```

US1 primero (máxima prioridad, archivo independiente). Luego US3 antes de US4 (ambos tocan `<img>` elements; aria-labels primero evita re-editar mismas líneas al agregar `width`/`height`). US2 puede ir en paralelo con US3/US4 (agrega JSX nuevo en zona diferente del archivo).

### Parallel Opportunities

- T001 y T002 son paralelas (HTML edits vs asset creation)
- T004, T005, T006 son paralelas (secciones distintas del archivo)
- T008 puede correr en cualquier momento para validar build parcial
- Todas las user stories son independientes entre sí (archivo diferente o secciones distintas del mismo archivo)
