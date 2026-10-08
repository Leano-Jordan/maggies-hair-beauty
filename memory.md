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
## Mags V2 UX Upgrade — 2026-10-08
- Source: repository Leano-Jordan/maggies-hair-beauty, branch mags-v2-ux-premium, based on main.
- Implemented premium warm-neutral visual tokens in css/variables.css.
- Added homepage quick-book funnel in index.html.
- Upgraded booking flow to service + date + preferred time window and service preselection via ?service=.
- Added service-specific booking links and native expandable service details on pages/services.html.
- Added progressive mobile action bar for WhatsApp booking and configurable location.
- Added configurable business.mapUrl and enabled map/location support.
- Improved media failure handling and image loading metadata for key hero imagery.
- Preserved static HTML/CSS/ES-module architecture; no backend or third-party booking dependency added.
- Verified source-level JavaScript syntax using parser compilation and verified key UX contracts/counts.
- Browser/device rendering remains unverified in this execution; physical-device testing is still required before production release.
- Intentionally not implemented with fake data: Google review feed, real team profiles and genuine before/after client transformations require verified client-approved sources/assets.

## Mags V3 Editorial UI Audit — 2026-10-08
- Audited the main branch after the V2 / luxury UI iterations and found accumulated visual overrides, excessive card/pill treatment, placeholder-heavy sections and inconsistent conversion flow.
- Replaced layered visual overrides with one warm-neutral editorial system across variables, base, layout, components, pages, responsive and accessibility styles.
- Simplified the homepage into a clear conversion story: hero → service categories → featured canonical services → approach → gallery → visit/booking → final CTA.
- Removed homepage placeholder review UI, stock before/after transformation sliders, specialist placeholders and invented package concepts that weakened credibility and made the page feel like a template.
- Removed the homepage remote MP4 hero dependency and switched to a high-priority still image for a lighter, more predictable above-the-fold experience.
- Fixed booking CTA behaviour so standard `.booking-link` elements open the contact booking funnel; direct WhatsApp remains explicitly opt-in through `data-direct-whatsapp="true"`.
- Fixed service-specific booking links to preserve their original contact-page destination while adding `?service=` for canonical service preselection.
- Aligned featured Services cards with `data/services.js` so displayed booking services and booking options cannot silently diverge.
- Made the About hero photography-led and prioritized its hero media; Gallery hero media was also prioritized.
- Tightened controls, borders, spacing, typography, mobile navigation, focus treatment and reduced-motion styling to match the new visual direction.
- Source-level regression checks confirmed: only `main` exists, homepage has no `<video>`, hero image class is present, booking funnel and service preselection code are present, and core page style contracts remain available.
- Browser/live/device verification remains unavailable in this execution because live Firecrawl access was blocked by insufficient credits. This round is source-verified, not browser-verified or production-release verified.
- Next evidence gate: render and interact at 320px, 390px, 768px and 1440px; test mobile navigation, booking flow, service preselection, gallery filters/lightbox, keyboard focus and image failure behaviour.

## Mags V4 Visual Quality Sweep — 2026-10-08
- Attempted live visual inspection of the deployed GitHub Pages site using a screenshot-capable browser fetch at 390x844.
- Live visual capture was blocked by the connected Firecrawl account's insufficient credits; therefore no claim of pixel-level browser verification is made.
- Performed a source-level visual hardening pass instead, focused on hero image layering, overlay z-index, image positioning and content-card stacking.
- Confirmed the redesigned homepage has no remote video hero, uses a dedicated hero image contract, and retains the mobile navigation/action-bar system.
- The next visual gate remains real rendered screenshots at 320x844, 390x844, 768x1024 and 1440px widths once browser/screenshot access is available.
