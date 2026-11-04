# Project Lantern — Design System v0.1

## Direction
Premium, cinematic, minimal. Dark surfaces, restrained violet accents, high-contrast typography, editorial spacing, and subtle motion.

## Brand
The public brand is not yet cleared. Keep the public name in `apps/web/src/lib/brand.ts`; do not scatter it through components. `Project Lantern` remains the internal codename.

## Visual tokens
- Background: `#08090E`
- Surface: `#11131B`
- Primary text: `#F5F3FA`
- Muted text: `#9293A2`
- Accent: `#AA92FF`
- Borders: white at approximately 8.5% opacity
- Radius: 5–12px for core surfaces

## Components
- `BrandMark`: centralized brand mark and wordmark.
- `SiteHeader`: responsive primary navigation.
- `FeaturedHero`: featured title presentation.
- `ContentRail`: horizontal discovery collection.
- `MediaCard`: poster, metadata, maturity label, and language labels.

## Content fixtures
`apps/web/src/data/catalogue.ts` contains fictional titles and CSS-generated artwork for layout development only. Replace them with rights-cleared API data before a public launch. Do not imply these are available films.

## Accessibility
- Semantic landmarks and headings.
- Visible focus states should be added before interactive production use.
- Controls must have accessible names.
- Respect reduced-motion preferences when motion is introduced.
- Language names must remain readable and not rely on color alone.

## Responsive behavior
- Desktop: full navigation and five-column media rail.
- Tablet: horizontal scrolling content rail.
- Mobile: compact header and horizontally scrollable cards.
