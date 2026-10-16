# Sahil Tomar — Personal Site Design System

- **Owner:** Sahil Tomar
- **Status:** CURRENT
- **Created:** 2026-10-11
- **Last Updated:** 2026-10-11
- **Source:** [CevonX Product Design System](../DESIGN.md); Phase 3 website design-system request

This document records the personal-site expression of the shared CevonX visual system. It keeps the shared emphasis on restraint, structure, readable type, and keyboard access while giving this portfolio an editorial page rhythm.

## Visual language

- Use warm paper surfaces, dark ink, and thin neutral rules as the base. Keep the restrained brown accent for emphasis; use green only for real live or verified states.
- Use Newsreader for editorial headings, Inter for reading and controls, and JetBrains Mono for compact labels and evidence metadata.
- Use serif display headings against sans-serif body text. The `display-xl` scale adapts from 48px on narrow screens to 96px on wide screens. Body text stays at least 15px; `meta` and `label` tokens are 12px.
- Keep reading widths near 65ch. The shared page container is 1280px maximum, with gutters of 20px on mobile, 32px at small screens, 40px at large screens, and 48px at extra-large screens.
- Use one-pixel rules to divide editorial sections. Controls use 6px corners. Avoid card-heavy layouts, decorative gradients, heavy shadows, and large hover movement.

## Layout patterns

- `PageShell` sets shared page width, top spacing, surface, and footer clearance. `PageHeader` aligns page titles, descriptions, status metadata, and optional controls across About, Work, Now, Contact, and Resume.
- Home sections share the same container and spacing tokens while alternating between open editorial text, ruled lists, and a single high-contrast invitation.
- At narrow widths, columns stack and controls wrap. Work rows and the home workflow grid move to their multi-column composition at the large breakpoint so tablet layouts retain readable line lengths.

## Interaction and accessibility

- Navigation marks the current route with `aria-current="page"`. The mobile menu exposes its expanded state, closes on Escape and route changes, and keeps its controls within a 44px minimum touch target.
- Use visible keyboard focus with a two-pixel outline and three-pixel offset. On dark sections, switch the outline to the raised-paper color.
- Keep hover/focus transitions short (150–200ms), using color and small arrow shifts for feedback. Render content immediately; avoid scroll-reveal effects that hide server-rendered content before hydration. Honor `prefers-reduced-motion` for CSS transitions.
- Use semantic headings, sections, native links and buttons, labels for controls, and a working skip link to the main content.
