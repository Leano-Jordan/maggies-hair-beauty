# Maggie’s Hair & Beauty

A reusable, progressively enhanced static commercial website foundation for salons, barbers, beauty studios, spas and nail businesses.

## Production readiness

The site has a responsive five-page experience and a backend-free WhatsApp booking flow. **A page rendering successfully is necessary, but not sufficient, for a production release.** The release gate includes verified business details, owner-approved pricing, image rights, booking-flow tests, accessibility checks, performance measurements, SEO validation and a documented handover.

Read [docs/PRODUCTION-READINESS-AUDIT.md](docs/PRODUCTION-READINESS-AUDIT.md) before publishing or handing over a client deployment. It records source-inspection findings, required owner approvals, and a production checklist. Do not treat the audit as a certification or as proof that live-browser checks have passed.

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
- Dependency-free static integrity validator (`node scripts/validate-site.mjs`)
- GitHub Actions quality workflow for local links, assets, in-page anchors, document metadata and JSON-LD syntax
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

The site remains backend-free. Visitors choose a service and optional date/time window, then WhatsApp opens with a structured message. Service-specific links use `?service=` so a selected service can carry into the booking form. The flow sends a request; it does not reserve or confirm an appointment.

## Location model

The mobile action bar and contact page can expose a configurable external map link through `business.mapUrl`. Use only the client's verified public location. A broad-area map search is not a production-ready business pin.

## Run locally

Because the site uses ES modules, use a local web server for the most reliable development experience. VS Code Live Server is suitable. A deployed static host works without a backend or build step.

## Browser targets

Chrome, Edge, Firefox and Safari on desktop; Chrome Android, Safari iOS and Samsung Internet on mobile. The project owner reports that all pages render on desktop and mobile. Re-test booking, keyboard/accessibility behavior, external links and asset loading on target devices before a production release.

## Commercialization and trust

Maggie’s uses configured Akasia/Pretoria North business details and premium service positioning. Verified Google metrics, client reviews, before/after work, response-time claims and refill claims must remain absent unless backed by approved evidence.

Do not publish ratings/counts, testimonials, before/after transformations, credentials or product/refill claims until they have approved sources. Confirm the business owner authorizes the public use of all names, contact details, branding and content.

Review `docs/PRODUCTION-READINESS-AUDIT.md` before client handover, especially owner approvals, pricing, image licensing, accessibility, deployment, privacy and support scope.
