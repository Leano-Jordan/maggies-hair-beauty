# Maggie’s Hair & Beauty

A reusable, progressively enhanced static commercial website foundation for salons, barbers, beauty studios, spas and nail businesses.

## What is included

- Five-page salon experience: Home, Services, Gallery, About and Contact
- Premium warm-neutral design system with responsive desktop/tablet/mobile compositions
- Responsive navigation with keyboard and Escape handling
- Centralized business, service and social data
- Service pricing/duration presentation with native expandable details
- Smart WhatsApp booking with service, preferred date and time-window prefill
- Sticky mobile booking/location actions
- Gallery filters and accessible lightbox
- Replaceable image areas with provenance tracking and production-proof gates
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

Maggie’s currently uses the configured Akasia/Pretoria North business contact details and premium service positioning. Verified Google metrics, client reviews, before/after work and refill claims are data-gated until approved sources are supplied.

Do not publish Google ratings/counts, response-time claims, reviews, before/after transformations or product/refill claims until they are present in their approved data sources.

Review `commercial/` and `docs/` before handover, especially deployment, rebranding, browser support and image licensing guidance.
