# Implementation Plan: Production Polish — SEO, Accesibilidad, UX Mobile y Performance

**Branch**: `003-production-polish` | **Date**: 2026-04-13 | **Spec**: `specs/003-production-polish/spec.md`
**Input**: Feature specification from `/specs/003-production-polish/spec.md`

## Summary

Resolver los 5 hallazgos pendientes del reporte de análisis (SEO, dots carrusel, accesibilidad, CLS) para llevar la landing de 65/100 a ≥85/100 antes de producción. Tres hallazgos ya están resueltos en código (swipe, favicon, devtools). El trabajo restante es de bajo riesgo y afecta un único archivo principal (`Home.tsx`) más el HTML entry point (`index.html`) y un asset nuevo (`og-image.png`).

## Technical Context

**Language/Version**: TypeScript 5.x, React 18+  
**Primary Dependencies**: Vite, React, Tailwind CSS v4 (`@tailwindcss/vite`), React Router, TanStack Query  
**Storage**: N/A (landing estática, sin backend propio)  
**Testing**: Vitest + jsdom (`apps/landing/vite.config.ts` → test config)  
**Target Platform**: Web (desktop ≥1024px + mobile <1024px), navegadores modernos  
**Project Type**: SPA (Single Page Application) — landing hub  
**Performance Goals**: Lighthouse SEO ≥80, Accesibilidad ≥80, CLS <0.1  
**Constraints**: Sin librerías adicionales para dots (custom Tailwind); og:image URL absoluta `https://coolco.io/og-image.png`  
**Scale/Scope**: 1 app (`apps/landing`), 1 archivo principal (`Home.tsx`), 1 HTML (`index.html`), 1 asset nuevo

## Constitution Check

_No hay constitución configurada (template con placeholders). No hay gates que verificar._

## Project Structure

### Documentation (this feature)

```text
specs/003-production-polish/
├── plan.md              # This file
├── quickstart.md        # Quick implementation reference
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (files affected)

```text
apps/landing/
├── index.html                    # [MODIFY] SEO meta tags, OG tags, canonical (FR-001→FR-004)
├── public/
│   └── og-image.png              # [CREATE] 1200×630px OG image (FR-005)
└── src/
    └── pages/
        └── Home.tsx              # [MODIFY] Dots carrusel, aria-labels, img dimensions (FR-006→FR-009)
```

**Structure Decision**: No se crean archivos nuevos de código. Los cambios son ediciones in-place en 2 archivos existentes + 1 asset gráfico. La estructura del proyecto no cambia.

## Implementation Approach

### US1 — SEO y meta tags (P1) → `index.html`

**What**: Editar `apps/landing/index.html` para agregar meta tags en el `<head>`.

**Changes**:

1. Cambiar `<title>CoolCo Landing</title>` → `<title>CoolCo | Tickets, Cashless y Fan to Fan para eventos</title>`
2. Agregar después del `<title>`:
   - `<meta name="description" content="CoolCo es tu plataforma integral para comprar tickets, pagos cashless y reventa Fan to Fan en eventos y espectáculos.">`
   - `<meta property="og:type" content="website">`
   - `<meta property="og:title" content="CoolCo | Tickets, Cashless y Fan to Fan para eventos">`
   - `<meta property="og:description" content="CoolCo es tu plataforma integral para comprar tickets, pagos cashless y reventa Fan to Fan en eventos y espectáculos.">`
   - `<meta property="og:image" content="https://coolco.io/og-image.png">`
   - `<meta property="og:url" content="https://coolco.io">`
   - `<link rel="canonical" href="https://coolco.io">`

**Risk**: Ninguno. Cambios estáticos en HTML.

### US1 — Asset OG image (P1) → `public/og-image.png`

**What**: Crear imagen de 1200×630px con logo CoolCo centrado sobre fondo de marca oscuro.

**Approach**: Usar un PNG con fondo gradiente oscuro (#0f172a → #1a1a2e) y el logo principal de CoolCo centrado. Se puede generar con herramienta gráfica o canvas HTML.

**Risk**: Bajo — asset estático.

### US2 — Dots carrusel (P2) → `Home.tsx`

**What**: Agregar indicadores de paginación al carrusel mobile en `Home.tsx`.

**Where**: Justo después del bloque de flechas (right arrow), antes del cierre de `</section>` del carrusel mobile (~línea 340).

**Implementation**:

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

**Design decisions**:

- Posición: `bottom-8` para no solaparse con el footer (que es `absolute bottom-0 py-6`)
- Tamaño: `w-2.5 h-2.5` (10px visual) + `p-2` (8px padding → ~26px táctil, cumple WCAG 2.2 Target Size AA ≥24px)
- Activo: `bg-white scale-125` — contraste contra fondo oscuro
- Inactivo: `bg-white/40` — visible pero subordinado
- Click-to-navigate: sí, vía `goToSlide(i)` que ya existe

**Risk**: Bajo. Posible necesidad de ajustar `bottom-*` si se solapa con footer en viewports pequeños.

### US3 — Accesibilidad aria-labels (P2) → `Home.tsx`

**What**: Agregar/actualizar `aria-label` en links de productos y redes sociales.

**Desktop links (Layer 4, ~línea 211)**:

- Actualmente: `<a>` sin `aria-label`, solo `<img alt="CoolCo TICKETS">`.
- Cambio: Agregar `aria-label={`Ir a CoolCo ${section.label}`}` a cada `<a>`.

**Mobile links (carousel, ~línea 287)**:

- Logo link: Agregar `aria-label={`Ir a CoolCo ${section.label}`}`.
- "Ingresar" link: Agregar `aria-label={`Ingresar a CoolCo ${section.label}`}`.

**Footer RRSS (~línea 358)**:

- Instagram: `aria-label="Instagram"` → `aria-label="Instagram de CoolCo"`
- LinkedIn: `aria-label="LinkedIn"` → `aria-label="LinkedIn de CoolCo"`

**Flechas carrusel**: Ya tienen `aria-label="Anterior"` / `aria-label="Siguiente"` ✅. Sin cambios.

**Risk**: Ninguno. Cambios de atributos HTML solamente.

### US4 — Dimensiones en imágenes (P3) → `Home.tsx`

**What**: Agregar `width` y `height` a todos los `<img>` para prevenir CLS.

**Inventory of `<img>` elements in Home.tsx**:

| Img           | Location         | Current sizing                                 | Fix                                             |
| ------------- | ---------------- | ---------------------------------------------- | ----------------------------------------------- |
| Logo desktop  | Layer 4 (~L229)  | `style={{ width: 'clamp(...)' }}` height: auto | Add `width={280} height={80}` as intrinsic hint |
| Logo mobile   | Carousel (~L296) | `className="w-52 h-auto"`                      | Add `width={208} height={60}`                   |
| Left arrow    | Carousel (~L321) | `className="w-4 h-auto"`                       | Add `width={16} height={16}`                    |
| Right arrow   | Carousel (~L332) | `className="w-4 h-auto"`                       | Add `width={16} height={16}`                    |
| IG icon       | Footer (~L355)   | `className="h-7 w-7"`                          | Add `width={28} height={28}`                    |
| LinkedIn icon | Footer (~L364)   | `className="h-7 w-7"`                          | Add `width={28} height={28}`                    |

**Note**: Las dimensiones `width`/`height` son hints de aspect ratio para el browser — el CSS sigue controlando el tamaño final. Los SVGs con Tailwind classes `h-7 w-7` ya reservan espacio via CSS, pero agregar atributos HTML es buena práctica para CLS. Los valores deben coincidir con el aspect ratio natural del SVG.

**Risk**: Bajo. Podría ser necesario verificar el aspect ratio natural de cada SVG para que los valores no distorsionen.

## Dependency Graph

```
US1 (SEO tags — index.html)  ──┐
US1 (og-image.png — asset)  ───┤── Independientes, pueden ejecutarse en paralelo
US3 (aria-labels — Home.tsx) ──┤
US4 (img dimensions — Home.tsx)┤
                                │
US2 (dots — Home.tsx) ──────────┘── Independiente pero mismo archivo que US3/US4
```

Todas las user stories son independientes entre sí. US2, US3 y US4 tocan el mismo archivo (`Home.tsx`) pero secciones diferentes del código, por lo que no hay conflictos.

**Orden sugerido de implementación**:

1. US1 (SEO) — máxima prioridad, archivo independiente
2. US3 (aria-labels) — mismo archivo que dots, pero más simple
3. US2 (dots) — requiere agregar JSX nuevo
4. US4 (img dimensions) — toca las mismas líneas de los `<img>` que US3

## Complexity Tracking

> No se detectaron violaciones de constitución (no hay constitución configurada).
> No se agregan dependencias, archivos de lógica, ni abstracciones nuevas.
> Complejidad estimada: **Baja** — ediciones puntuales en 2 archivos + 1 asset.
