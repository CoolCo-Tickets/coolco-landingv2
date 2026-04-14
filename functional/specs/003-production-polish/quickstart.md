# Quickstart: 003-production-polish

## What This Feature Does

Resuelve los hallazgos pendientes del reporte de análisis (SEO, dots carrusel, accesibilidad, CLS) para llevar la CoolCo Landing de 65/100 a ≥85/100 antes de producción.

## Files to Change

| File                               | Action | What                                       |
| ---------------------------------- | ------ | ------------------------------------------ |
| `apps/landing/index.html`          | MODIFY | Meta tags SEO, OG, canonical               |
| `apps/landing/public/og-image.png` | CREATE | Imagen 1200×630px para previews            |
| `apps/landing/src/pages/Home.tsx`  | MODIFY | Dots carrusel, aria-labels, img dimensions |

## Key Decisions

- **URL de producción**: `https://coolco.io`
- **OG image**: `https://coolco.io/og-image.png` (logo sobre fondo oscuro gradiente)
- **Dots**: Custom con Tailwind (sin librería), `bottom-8`, blancos activos/semitransparentes inactivos, click-to-navigate
- **Aria-labels**: Formato "Ir a CoolCo {SECTION}" para links de producto, "Instagram/LinkedIn de CoolCo" para RRSS
- **Img dimensions**: Atributos HTML `width`/`height` como hints de aspect ratio (CSS sigue controlando tamaño final)

## How to Verify

```bash
# Build de producción
pnpm nx build landing

# Dev server
pnpm nx serve landing
```

### Manual checks:

1. **SEO**: Inspeccionar `<head>` → title, description, OG tags, canonical
2. **OG preview**: Pegar `https://coolco.io` en WhatsApp / Twitter Card Validator
3. **Dots**: Abrir en viewport <1024px → dots visibles, posición correcta, click funciona
4. **Aria-labels**: Tab por la página → cada link anuncia destino descriptivo
5. **CLS**: Lighthouse → CLS < 0.1

### Lighthouse targets:

- SEO ≥ 80
- Accessibility ≥ 80
- CLS < 0.1
