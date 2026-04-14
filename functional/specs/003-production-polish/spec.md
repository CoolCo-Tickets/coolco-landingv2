# Feature Specification: Production Polish — SEO, Accesibilidad, UX Mobile y Performance

**Feature Branch**: `003-production-polish`  
**Created**: 2026-04-13  
**Status**: Draft  
**Input**: Reporte de análisis técnico, UX y accesibilidad de CoolCo Landing (27 marzo 2026). Puntuación general: 65/100. Diseño Visual 90%, Funcionalidad 75%, SEO 25%, Accesibilidad 55%. El reporte identifica 8 hallazgos (2 alta, 4 media, 2 baja prioridad) que deben resolverse antes de la salida a producción.

## Clarifications

### Session 2026-04-13

- Q: ¿Qué hacer con hallazgos ya resueltos (swipe táctil, favicon, devtools condicional)? → Eliminar de la spec — ya implementados en código actual (`Home.tsx` ya tiene `handleTouchStart/Move/End`; `index.html` ya tiene `<link rel="icon">`; `app.tsx` ya condiciona devtools a `import.meta.env.DEV`).
- Q: ¿Cuál es la URL de producción para canonical y og:url? → `https://coolco.io`
- Q: ¿Qué asset usar para og:image? → Crear `og-image.png` (1200×630px) con logo CoolCo centrado sobre fondo de marca (oscuro con gradiente). Ubicar en `apps/landing/public/og-image.png`.
- Q: ¿Librería para dots del carrusel? → Custom con Tailwind, sin librería externa. Consistente con el swipe custom existente.
- Hallazgos descartados de la spec (ya resueltos):
  - Swipe táctil en carrusel mobile ✅ (código existente en `Home.tsx` líneas 123–140)
  - Favicon de marca ✅ (`favicon.png` + `<link rel="icon">` en `index.html`)
  - TanStack Query devtools condicional ✅ (`app.tsx` línea 21: `import.meta.env.DEV`)

## Contexto

CoolCo Landing es una página hub que centraliza el acceso a tres productos: CoolCo Tickets (redirección externa a `ticketing.coolco.io`), CoolCo Fan to Fan (redirección externa a `sell-ticket.f2f.coolco.io`) y CoolCo Cashless (ruta interna `/cashless` con "Próximamente"). Cuenta con dos layouts responsivos: desktop (3 paneles con efecto hover color/B&N) y mobile (carrusel con navegación por botones y swipe). Stack: Vite + React + Tailwind CSS + React Router + TanStack Query. URL de producción: `https://coolco.io`.

## User Scenarios & Testing _(mandatory)_

### User Story 1 — SEO y meta tags para visibilidad en buscadores y redes sociales (Priority: P1)

Como usuario que comparte la URL de CoolCo en redes sociales o la encuentra vía buscador, quiero ver un título descriptivo, una descripción atractiva y una imagen de preview correcta, para que la página sea profesional y el enlace genere confianza y clics.

**Why this priority**: Sin meta tags adecuados, la landing es invisible para buscadores y produce previews vacíos cuando se comparte en WhatsApp, Twitter/X, LinkedIn o Facebook. Impacto directo en adquisición de usuarios.

**Independent Test**: Abrir la landing y verificar en el `<head>` que existan `<title>` descriptivo, `<meta name="description">`, tags Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) y `<link rel="canonical">`. Validar con herramientas como Twitter Card Validator o Facebook Sharing Debugger que el preview se genera correctamente.

**Acceptance Scenarios**:

1. **Given** la landing desplegada, **When** inspecciono el `<head>`, **Then** el `<title>` es descriptivo (NO "CoolCo Landing") — ej: "CoolCo | Tickets, Cashless y Fan to Fan para eventos".
2. **Given** la landing desplegada, **When** inspecciono el `<head>`, **Then** existe `<meta name="description">` con texto relevante (≥50 caracteres, ≤160 caracteres).
3. **Given** la landing desplegada, **When** inspecciono el `<head>`, **Then** existen tags Open Graph: `og:title`, `og:description`, `og:image` (URL absoluta a imagen representativa), `og:url` y `og:type`.
4. **Given** la landing desplegada, **When** inspecciono el `<head>`, **Then** existe `<link rel="canonical">` apuntando a la URL canónica de la landing.
5. **Given** la URL de la landing, **When** la pego en un chat de WhatsApp o en Twitter/X, **Then** se genera un preview con título, descripción e imagen (no vacío ni genérico).

---

### User Story 2 — Indicadores de paginación (dots) en carrusel mobile (Priority: P2)

Como usuario en mobile, quiero ver puntos indicadores (dots) en el carrusel para saber cuántos slides hay y en cuál estoy posicionado, sin tener que interactuar con las flechas.

**Why this priority**: Complementa el swipe existente. Sin dots el usuario no tiene feedback de posición ni de cantidad de contenido.

**Independent Test**: Abrir el Home en viewport < 1024px; verificar que aparecen dots visibles, que reflejan la posición actual del carrusel y que se actualizan al navegar (swipe o flechas).

**Acceptance Scenarios**:

1. **Given** estoy en el Home mobile, **When** el carrusel carga, **Then** veo indicadores de paginación (dots) — uno por cada slide (3 en total).
2. **Given** los dots son visibles, **When** estoy en el slide 1, **Then** el dot correspondiente al slide 1 está visualmente activo/destacado.
3. **Given** navego al slide 2 (swipe o flechas), **When** la transición completa, **Then** el dot del slide 2 se activa y el del slide 1 se desactiva.
4. **Given** los dots son visibles, **When** toco/hago click en un dot, **Then** el carrusel navega al slide correspondiente (tap-to-navigate — opcional pero recomendado).

---

### User Story 3 — Accesibilidad: aria-labels y alt text descriptivos (Priority: P2)

Como usuario que navega con lector de pantalla, quiero que los links de productos y los íconos funcionales (redes sociales, flechas) tengan textos descriptivos, para poder entender el destino o función de cada elemento interactivo.

**Why this priority**: Lectores de pantalla actualmente leen "Próximamente" o nada para los links con solo imagen. Los íconos de RRSS y flechas con alt vacío son invisibles para tecnologías asistivas.

**Independent Test**: Navegar la landing con un lector de pantalla (VoiceOver en macOS/iOS, o extensión de navegador); verificar que cada link de producto anuncia su destino y cada ícono funcional anuncia su acción.

**Acceptance Scenarios**:

1. **Given** un lector de pantalla activo, **When** el foco llega al link de CoolCo Tickets, **Then** el lector anuncia "Ir a CoolCo Tickets" (o equivalente descriptivo).
2. **Given** un lector de pantalla activo, **When** el foco llega al link de CoolCo Fan to Fan, **Then** el lector anuncia "Ir a CoolCo Fan to Fan".
3. **Given** un lector de pantalla activo, **When** el foco llega al link de CoolCo Cashless, **Then** el lector anuncia "Ir a CoolCo Cashless".
4. **Given** un lector de pantalla activo, **When** el foco llega al ícono de Instagram, **Then** el lector anuncia "Instagram de CoolCo" (o equivalente).
5. **Given** un lector de pantalla activo, **When** el foco llega al ícono de LinkedIn, **Then** el lector anuncia "LinkedIn de CoolCo" (o equivalente).
6. **Given** un lector de pantalla activo, **When** el foco llega a las flechas del carrusel, **Then** el lector anuncia "Slide anterior" / "Slide siguiente" (los aria-labels existentes `Anterior`/`Siguiente` ya cubren esto — verificar que se mantienen).

---

### User Story 4 — Performance: dimensiones explícitas en imágenes para evitar CLS (Priority: P3)

Como usuario, quiero que la página no tenga saltos de layout mientras carga las imágenes, para tener una experiencia visual estable desde el primer render.

**Why this priority**: CLS (Cumulative Layout Shift) impacta Core Web Vitals y posicionamiento en Google, pero el efecto visual es menos disruptivo en esta landing que en otras apps.

**Independent Test**: Inspeccionar todos los elementos `<img>` del DOM; verificar que cada uno tiene atributos `width` y `height` (o equivalente CSS que reserve espacio). Medir CLS con Lighthouse y verificar que es < 0.1.

**Acceptance Scenarios**:

1. **Given** la landing desplegada, **When** inspecciono cada `<img>` en el DOM, **Then** todos tienen atributos `width` y `height` explícitos (o `aspect-ratio` CSS equivalente).
2. **Given** la landing desplegada, **When** ejecuto un audit Lighthouse en desktop, **Then** el score de CLS es < 0.1 (bueno).
3. **Given** la landing desplegada, **When** ejecuto un audit Lighthouse en mobile, **Then** el score de CLS es < 0.1 (bueno).

---

### Edge Cases

- **Open Graph image**: La imagen `og:image` MUST ser URL absoluta (`https://coolco.io/og-image.png`), tamaño 1200×630px. Asset: `apps/landing/public/og-image.png` — logo CoolCo centrado sobre fondo de marca oscuro con gradiente.
- **Swipe vs scroll vertical**: El swipe horizontal existente en el carrusel no debe interferir con el scroll vertical de la página en mobile; mantener diferenciación por ángulo de gesto (threshold > 50px horizontal actual).
- **Imágenes SVG**: Los SVGs inline no necesitan `width`/`height` attributes del mismo modo que `<img>` — aplicar la corrección solo a elementos `<img>` con `src` a archivos raster o SVG externos.
- **Dots implementación**: Custom con Tailwind CSS, sin librería externa. Consistente con el swipe custom existente en `Home.tsx`.
- **Aria-labels en links RRSS**: Los links de Instagram y LinkedIn en el footer ya tienen `aria-label` (`"Instagram"`, `"LinkedIn"`) — actualizar a forma más descriptiva (`"Instagram de CoolCo"`, `"LinkedIn de CoolCo"`).
- **Desktop vs mobile links**: Los links de productos con logo aparecen tanto en desktop (Layer 4 de trapezoids) como en mobile (carousel slides). Ambos conjuntos MUST tener `aria-label`.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: El `<title>` MUST ser descriptivo y relevante (NO "CoolCo Landing"). Ejemplo: "CoolCo | Tickets, Cashless y Fan to Fan para eventos".
- **FR-002**: MUST existir `<meta name="description">` con texto de 50–160 caracteres describiendo la plataforma.
- **FR-003**: MUST existir tags Open Graph: `og:title`, `og:description`, `og:image` (URL absoluta: `https://coolco.io/og-image.png`), `og:url` (`https://coolco.io`), `og:type` (`website`).
- **FR-004**: MUST existir `<link rel="canonical" href="https://coolco.io">` en el `<head>`.
- **FR-005**: MUST crear asset `og-image.png` (1200×630px) en `apps/landing/public/` con logo CoolCo sobre fondo de marca.
- **FR-006**: El carrusel mobile MUST mostrar indicadores de paginación (dots) custom con Tailwind que reflejen posición actual y total de slides (3). Implementación sin librería externa.
- **FR-007**: Los links `<a>` que envuelven logos de productos (desktop y mobile) MUST tener `aria-label` descriptivo (ej: "Ir a CoolCo Tickets", "Ir a CoolCo Fan to Fan", "Ir a CoolCo Cashless").
- **FR-008**: Los links de redes sociales (Instagram, LinkedIn) MUST actualizar `aria-label` a forma descriptiva ("Instagram de CoolCo", "LinkedIn de CoolCo").
- **FR-009**: Todos los elementos `<img>` MUST tener atributos `width` y `height` explícitos (o equivalente CSS `aspect-ratio`) para reservar espacio y prevenir CLS.

### Already Resolved (verificación solamente)

- ~~FR-EX1~~: Swipe táctil en carrusel ✅ (`Home.tsx` handleTouchStart/Move/End)
- ~~FR-EX2~~: Favicon de marca ✅ (`favicon.png` + `<link rel="icon">`)
- ~~FR-EX3~~: Devtools condicionales ✅ (`import.meta.env.DEV`)

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Score SEO en Lighthouse ≥ 80 (actualmente ~25%).
- **SC-002**: Score Accesibilidad en Lighthouse ≥ 80 (actualmente ~55%).
- **SC-003**: CLS (Cumulative Layout Shift) < 0.1 en desktop y mobile.
- **SC-004**: Al compartir la URL `https://coolco.io` en WhatsApp/Twitter/Facebook, se genera un preview con título, descripción e imagen (verificable con sharing debuggers).
- **SC-005**: Score general del reporte de análisis sube de 65/100 a ≥ 85/100.
