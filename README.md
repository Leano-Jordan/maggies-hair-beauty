# Maggie’s Hair & Beauty

A reusable, progressively enhanced static commercial website foundation for salons, barbers, beauty studios, spas and nail businesses.

## What is included

- Five-page salon experience: Home, Services, Gallery, About and Contact
- Responsive navigation with keyboard and Escape handling
- Centralized business, service and social data
- WhatsApp-first booking flow with pre-filled messages
- Service filters, FAQ disclosures and image-led editorial layouts
- Replaceable image area with provenance guidance
- Accessibility, browser-support and commercial handover documentation
- Dependency-light HTML5, CSS3 and vanilla ES-module JavaScript

## Customize first

1. `data/business.js` — name, contact details, hours and booking message
2. `data/services.js` — service names, prices and durations
3. `data/social.js` — social destinations
4. `css/variables.css` — core brand/design tokens
5. `assets/images/` — production photography and creative assets
6. Page HTML — business-specific copy and section selection

## Run locally

Because the site uses ES modules, use a local web server for the most reliable development experience. VS Code Live Server is suitable. A deployed static host works without a backend or build step.

## Browser targets

Chrome, Edge, Firefox and Safari on desktop; Chrome Android, Safari iOS and Samsung Internet on mobile. Physical-device verification is still required before a production release.

## Commercialization notes

Maggie’s is fictional demonstration content. Replace business information, prices, testimonials, imagery and any other business-specific material before client delivery. Demo pages remain `noindex,nofollow` until the production identity and SEO metadata are ready.

Review `commercial/` and `docs/` before handover, especially deployment, rebranding, browser support and image licensing guidance.
