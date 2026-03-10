# Feature Specification: COOLCO Landing Redesign (MVP)

**Feature Branch**: `002-landing-redesign`  
**Created**: 2025  
**Status**: Draft  
**Input**: Implement COOLCO landing redesign from Figma. Design context in `functional/context/` (design-overview.md, desktop-prototype.md, mobile-prototype.md, screenshots/, resourses/). Source of truth: Figma COOLCO-REDESIGN; nodes desktop `0:1`, mobile `2002:248`. The three Home sections are **CASHLESS**, **TICKETS**, and **FAN TO FAN**; visual reference in `functional/context/screenshots/`; assets (fonts, images, logos) in `functional/context/resourses/` (inventory: `resourses/README.md`).

## Clarifications

### Session 2025-02-23

- Q: Are the routes for the three sections fixed for this MVP or placeholders until product confirms? → A: B — Fixed routes: `/tickets`, `/fantofan`, `/cashless`.
- Q: For this MVP, should the CASHLESS section on Home be clickable (navigate to coming-soon page) or non-clickable (visual only)? → A: A — CASHLESS is clickable: navigates to `/cashless`; the destination page shows "Próximamente" or coming-soon content.
- Q: Should the MVP include the full Compra flow (all steps in screenshots) or only the first step(s) as a prototype? → A: B — Implement all Compra flow steps shown in the screenshots (desktop and mobile) in this MVP; backend/payment may be mock or placeholder.
- Q: Should authentication (Ingresar, Mi cuenta) be in scope for this MVP? → A: B — Authentication out of MVP: "Ingresar" and "Mi cuenta" are UI only (button/link); no login or session logic in this MVP.
- Additions (session): (1) Desktop Home: on hover, the trapezoidal section MUST grow with a smooth animation as shown in the screenshots. (2) Mobile carousel: when moving to another section, the carousel MUST wait 1 second before painting/displaying the new section as shown in the screenshots. (3) Map all assets in `functional/context/resourses` and document them in `functional/context`; implementation MUST use this inventory.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Home desktop: 3 polygon sections (CASHLESS, TICKETS, FAN TO FAN) and navigation (Priority: P1)

As a user on desktop, I see the Home page with three distinct trapezoidal polygon sections: left = **CASHLESS** (with “Próximamente”), center = **TICKETS**, right = **FAN TO FAN**. Each section is clickable and takes me to its destination page. On hover, the trapezoid grows with a smooth animation (expanded state) as shown in the screenshots. Layout, shapes, colors, and typography match the Figma design (node `0:1`).

**Why this priority**: Home is the entry point; desktop layout defines the main visual identity.

**Independent Test**: Open Home on a viewport ≥ 1024px; verify three polygon areas (CASHLESS, TICKETS, FAN TO FAN) are visible, hover states work, and each click navigates to the correct destination. Compare against `functional/context/screenshots/desktop/home-without-hover.png`, `home-with-ticket-hover.png`, `home-with-fantofan-hover.png`, and expanded hover variants.

**Acceptance Scenarios**:

1. **Given** I am on the Home page on desktop, **When** the page loads, **Then** I see three polygon sections (CASHLESS left, TICKETS center, FAN TO FAN right) that match the Figma design; CASHLESS shows “Próximamente”.
2. **Given** I am on the Home page on desktop, **When** I hover over TICKETS or FAN TO FAN, **Then** the trapezoid grows with a smooth animation (expanded state) per design and screenshots.
3. **Given** I am on the Home page on desktop, **When** I click CASHLESS, TICKETS, or FAN TO FAN, **Then** I navigate to the corresponding destination page.
4. **Given** the design reference (`screenshots/desktop/home-*.png` or Figma), **When** I compare the implemented Home desktop, **Then** layout, spacing, and colors match within acceptable tolerance.

---

### User Story 2 - Home mobile: carousel (TICKETS, FAN TO FAN, CASHLESS) and navigation (Priority: P2)

As a user on mobile, I see the Home page as a carousel of three slides: first = **TICKETS** (with “Ingresar” CTA), second = **FAN TO FAN**, third = **CASHLESS**. I can swipe or scroll to move between slides. When moving to another section, the carousel waits 1 second before painting/displaying the new section as shown in the screenshots. Each slide has a default and an active/hover state. Tapping a slide takes me to the same three destination pages as on desktop. The carousel and typography match the Figma design (node `2002:248`).

**Why this priority**: Mobile traffic; same navigation goals as desktop with a different layout.

**Independent Test**: Open Home on a viewport &lt; 1024px; verify carousel shows three slides (TICKETS, FAN TO FAN, CASHLESS), swipe/scroll works, and tap on a slide goes to the correct destination. Compare against `functional/context/screenshots/mobile/HOME FS TICKETS OFF.png`, `HOME FS TICKETS ON HOVER.png`, `HOME FS FANTOFAN OFF.png`, `HOME FS FANTOFAN ON HOVER.png`, `HOME FS CASHLESS OFF.png`.

**Acceptance Scenarios**:

1. **Given** I am on the Home page on mobile, **When** the page loads, **Then** I see a carousel with three slides (TICKETS, FAN TO FAN, CASHLESS) matching the Figma mobile design.
2. **Given** I am on the Home carousel, **When** I swipe or scroll to another section, **Then** the carousel waits 1 second before painting/displaying the new section; slides show active/hover state when selected per screenshots.
3. **Given** I am on a carousel slide, **When** I tap it (or “Ingresar” on TICKETS), **Then** I navigate to the corresponding destination page.
4. **Given** the design reference (`screenshots/mobile/HOME FS *.png` or Figma), **When** I compare the implemented Home mobile, **Then** layout, spacing, and colors match within acceptable tolerance.

---

### User Story 3 - Destination pages: CASHLESS, TICKETS, FAN TO FAN (Priority: P3)

As a user, when I arrive at the **CASHLESS**, **TICKETS**, or **FAN TO FAN** destination page (from Home desktop polygons or mobile carousel), I see content and layout that match the Figma design for that page (desktop and mobile variants). TICKETS includes landing (event list, hero, “Comprar” CTAs), your tickets, and event detail. FAN TO FAN has its own landing. CASHLESS shows “Próximamente” on Home; the CASHLESS section is clickable and navigates to `/cashless`, where the page shows "Próximamente" or coming-soon content. I can navigate back to Home.

**Why this priority**: Completes the navigation flow; each destination has its own design in Figma and in `functional/context/screenshots/`.

**Independent Test**: Navigate to each destination from Home (desktop and mobile); verify layout and content match design; verify back/home navigation works. Reference: `screenshots/desktop/tickets-page.png`, `fantofan-page.png`, `your-tickets-page.png`, `event-detail-pages.png`; `screenshots/mobile/LANDING TICKETS.png`, `LANDING FANTOFAN.png`, `LANDING EVENTO.png`.

**Acceptance Scenarios**:

1. **Given** I navigated to the TICKETS destination (desktop or mobile), **When** the page loads, **Then** the layout and content match the Figma design (landing, event cards, “Comprar”, etc. per screenshot reference).
2. **Given** I navigated to the FAN TO FAN or CASHLESS destination, **When** the page loads, **Then** the layout and content match the Figma design for that page.
3. **Given** I am on any destination page, **When** I use the provided navigation (e.g. back or home link), **Then** I can return to Home.
4. **Given** the design reference for each destination (see `functional/context/screenshots/README.md`), **When** I compare the implemented page, **Then** layout, spacing, and colors match within acceptable tolerance on desktop and mobile.

---

### User Story 4 - Purchase (Compra) flow from TICKETS (Priority: P4)

As a user who chose TICKETS, I can start a purchase (Compra) flow. The flow has multiple steps; each step’s layout and content match the Figma design for desktop and mobile. Reference: `screenshots/desktop/COMPRA 2.png`–`COMPRA 6.png`, `COMPRA boceto ideal.png`; `screenshots/mobile/COMPRA TICKETS 01.png`–`03.png`.

**Why this priority**: Core conversion path for TICKETS; follows after destination pages are in place.

**Independent Test**: From TICKETS landing, start Compra; complete or advance through steps; verify each step matches design reference.

**Acceptance Scenarios**:

1. **Given** I am on the TICKETS landing, **When** I start a purchase (e.g. “Comprar”), **Then** I enter the Compra flow.
2. **Given** I am in the Compra flow, **When** I am on each step, **Then** the layout and content match the Figma design for that step (desktop and mobile per screenshots).
3. **Given** I am in the Compra flow, **When** I use back or cancel (if in design), **Then** I can return to TICKETS or Home as designed.

---

### Edge Cases

- Viewport resize: When crossing the desktop/mobile breakpoint (e.g. 1024px), Home switches between 3-polygon layout and carousel without broken layout or duplicate content.
- Missing or late-loaded assets: Background (crowd) image and other media from design have appropriate fallbacks or loading states so layout does not collapse.
- Accessibility: Polygon areas and carousel slides are focusable and usable with keyboard; focus order and visible focus indicators are clear. Touch targets on mobile ≥ 44px.
- CASHLESS “Próximamente”: CASHLESS section is clickable and navigates to `/cashless`; the destination page shows "Próximamente" or coming-soon content until the feature is released.
- Authentication (Ingresar, Mi cuenta): "Ingresar" (TICKETS) and "Mi cuenta" (e.g. TICKETS landing) are UI only (button/link) in this MVP; no login or session logic; click may go to placeholder or have no backend effect until a later phase.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Home page MUST show three polygon sections on viewports ≥ 1024px (desktop): CASHLESS (left), TICKETS (center), FAN TO FAN (right). CASHLESS MUST show “Próximamente”. Each section MUST link to its destination page. On hover, the trapezoidal section MUST grow with a smooth animation (expanded state) as shown in `screenshots/desktop/home-with-expanded-*.png`.
- **FR-002**: The Home page MUST show a carousel of three slides on viewports &lt; 1024px (mobile): TICKETS (1st), FAN TO FAN (2nd), CASHLESS (3rd). When moving to another section, the carousel MUST wait 1 second before painting/displaying the new section, as shown in the mobile screenshots. Each slide MUST have default and active/hover state and MUST link to the same three destination pages as on desktop. TICKETS slide MAY show “Ingresar” CTA; “Ingresar” and “Mi cuenta” (where present) are UI only in this MVP—no login or session logic.
- **FR-003**: The system MUST provide three destination experiences: CASHLESS, TICKETS (landing, your tickets, event detail, Compra flow), and FAN TO FAN. Each MUST be reachable from Home (desktop and mobile) and MUST have layout and content defined by the Figma design and by the screenshots in `functional/context/screenshots/desktop/` and `functional/context/screenshots/mobile/`.
- **FR-004**: Layout, spacing, typography, and colors MUST align with the Figma design (COOLCO-REDESIGN). Visual reference is the screenshot inventory in `functional/context/screenshots/README.md` (desktop and mobile subfolders). *Acceptable tolerance*: visual comparison against the reference screenshots without pixel-perfect tooling; minor deviations (e.g. sub-pixel, font rendering) are acceptable if the design intent is preserved.
- **FR-005**: Navigation from Home to each destination and back to Home MUST work on both desktop and mobile without requiring page reload for in-app routes. Destination routes are fixed: `/tickets`, `/fantofan`, `/cashless`.
- **FR-006**: Design tokens (colors, fonts, spacing) used in the implementation MUST be traceable to the design (e.g. via `@theme` or design doc) so future changes stay consistent.
- **FR-007**: The Compra (purchase) flow from TICKETS MUST implement all steps shown in the design (desktop and mobile) per `screenshots/desktop/COMPRA *.png` and `screenshots/mobile/COMPRA TICKETS *.png`. Backend or payment integration MAY be mock or placeholder for this MVP.
- **FR-008**: All design assets (fonts, images, logos) MUST be sourced from the inventory in `functional/context/resourses/` and documented in `functional/context` (see `resourses/README.md`). Implementation MUST use these mapped resources for consistency with the design.

### Key Entities

- **Home (desktop)**: The landing view at ≥ 1024px; three trapezoidal polygon link areas (CASHLESS, TICKETS, FAN TO FAN); on hover, trapezoid grows with smooth animation (expanded state); reference Figma node `0:1` and `screenshots/desktop/home-*.png`, `home-with-expanded-*.png`.
- **Home (mobile)**: The landing view at &lt; 1024px; carousel of three slides (TICKETS, FAN TO FAN, CASHLESS); when changing section, 1 s delay before painting new section; reference Figma node `2002:248` and `screenshots/mobile/HOME FS *.png`.
- **CASHLESS**: Section and destination; “Próximamente” on Home; section is clickable and navigates to route `/cashless`; destination page shows "Próximamente" or coming-soon content.
- **TICKETS**: Section and destination; landing (events, “Comprar”), your tickets, event detail, and Compra flow; route `/tickets`; reference `tickets-page.png`, `your-tickets-page.png`, `event-detail-pages.png`, `LANDING TICKETS.png`, COMPRA screenshots.
- **FAN TO FAN**: Section and destination; landing; route `/fantofan`; reference `fantofan-page.png`, `LANDING FANTOFAN.png`.
- **Compra flow**: Multi-step purchase from TICKETS; all steps from design screenshots are in scope for this MVP; backend/payment may be mock or placeholder; reference COMPRA desktop and mobile screenshots.
- **Auth (Ingresar / Mi cuenta)**: UI only in this MVP; buttons/links as in design; no login or session logic.
- **Assets (resourses)**: Fonts, images, and logos in `functional/context/resourses/`; inventory in `resourses/README.md`; implementation uses these assets per context docs.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A reviewer can compare the implemented Home (desktop) against `functional/context/screenshots/desktop/home-without-hover.png` (and hover variants) or Figma node `0:1` and confirm layout, three sections (CASHLESS, TICKETS, FAN TO FAN), and key visual elements match.
- **SC-002**: A reviewer can compare the implemented Home (mobile) against `functional/context/screenshots/mobile/HOME FS *.png` or Figma node `2002:248` and confirm carousel, three slides, and key visual elements match.
- **SC-003**: From Home, a user can reach CASHLESS, TICKETS, and FAN TO FAN destinations in one click or tap (desktop or mobile) and return to Home via the provided navigation.
- **SC-004**: The CASHLESS, TICKETS, and FAN TO FAN destination pages (and TICKETS sub-pages and Compra flow) render correctly on desktop and mobile, with layout and content aligned to the Figma design and to the screenshots in `functional/context/screenshots/`.
