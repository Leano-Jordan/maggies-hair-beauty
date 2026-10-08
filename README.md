# Maggie’s Hair & Beauty

A reusable, progressively enhanced static commercial website foundation for salons, barbers, beauty studios, spas and nail businesses.

## What is included

- Five-page salon experience: Home, Services, Gallery, About and Contact
- Premium warm-neutral design system with responsive desktop/tablet/mobile compositions
- Responsive navigation with keyboard and Escape handling
- Centralized business, service and social data
- Service pricing/duration presentation with native expandable details
- Smart WhatsApp booking with service, preferred date and time-window prefill
- Homepage quick-book funnel plus service-specific booking links
- Sticky mobile booking/location actions
- Gallery filters and accessible lightbox
- Replaceable image areas with provenance guidance
- Accessibility, browser-support and commercial handover documentation
- Dependency-light HTML5, CSS3 and vanilla ES-module JavaScript

## Customize first

1. `data/business.js` — name, contact details, hours, WhatsApp number and map URL
2. `data/services.js` — service names, prices and durations
3. `data/social.js` — social destinations
4. `config/site-config.js` — optional feature flags
5. `css/variables.css` — core brand/design tokens
6. `assets/images/` — production photography and creative assets
7. Page HTML — business-specific copy and section selection

## Booking model

The site remains backend-free. Visitors choose a service and optional date/time window, then WhatsApp opens with a structured message. Service-specific links use `?service=` so a selected service can carry into the booking form.

## Location model

The mobile action bar and contact page can expose a configurable external map link through `business.mapUrl`. Keep this blank or replace it with the client's verified location before production launch.

## Run locally

Because the site uses ES modules, use a local web server for the most reliable development experience. VS Code Live Server is suitable. A deployed static host works without a backend or build step.

## Browser targets

Chrome, Edge, Firefox and Safari on desktop; Chrome Android, Safari iOS and Samsung Internet on mobile. Physical-device verification is still required before a production release.

## Commercialization notes

Maggie’s is fictional demonstration content. Replace business information, prices, testimonials, imagery, map destination and any other business-specific material before client delivery. Demo pages remain `noindex,nofollow` until the production identity and SEO metadata are ready.

This demo deliberately does not invent Google reviews, team identities or client before/after claims. Add those only from verified, client-approved sources.

Review `commercial/` and `docs/` before handover, especially deployment, rebranding, browser support and image licensing guidance.
