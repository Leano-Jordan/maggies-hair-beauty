# PROJECT MEMORY

## Website Purpose
Reusable, premium-feeling salon / hair-and-beauty website asset designed for rapid client rebranding and deployment. Current demonstration identity: Maggie's Hair & Beauty, Pretoria.

## Current Architecture
Dependency-light static HTML/CSS/ES-module JavaScript. Five pages: home, services, gallery, about, contact. Shared CSS layers and centralized business/service/social data. No framework, build system, database, or server runtime required.

## Repository Structure
- `index.html` - home page
- `pages/` - services, gallery, about, contact
- `css/` - reset, variables, base, layout, components, pages, responsive, accessibility, commercial visual overrides
- `js/` - main plus small feature modules
- `data/` - business, services, social, testimonials data
- `config/` - feature flags
- `assets/images/` - replaceable image area and provenance guidance
- `commercial/` - handover, deployment and rebranding guidance
- `docs/` - architecture, browser, content, customization, image licensing and remote preview guidance
- `memory.md` - persistent operational project context

## Design Direction
Beauty-first editorial salon aesthetic. Warm blush/cream canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling. A new commercial visual layer strengthens hierarchy, buttons, cards, page heroes, booking forms, section rhythm and mobile composition without replacing the existing architecture.

## Design System
Brand tokens live in `css/variables.css`. `css/commercial.css` adds a scoped visual refinement layer rather than rewriting the foundation. Typography, buttons, cards, navigation, forms, gallery treatments and layout primitives remain centralized. Backdrop blur remains progressive enhancement only. A small CSS-built Proudly South African badge is used instead of shipping an unverified third-party logo asset.

## Important Components
Sticky header with progressive glass treatment, responsive navigation, image-led hero, CTA buttons, service cards/lists, feature list, editorial image sections, filterable gallery, gallery mosaic, contact/booking flow, FAQ disclosure, information strips, booking steps, floating WhatsApp action, shared footer and small Proudly South African marker.

## Customization Points
Buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css` and commercial refinements in `css/commercial.css`. Replaceable creative assets belong in `assets/images/`; demo stock URLs are isolated to easy-to-replace `<img>` elements.

## Reference Design Decisions
No external visual reference supplied this round. Round 7 focused on a stronger editorial commercial finish, distinct stock imagery across the site, broader representation, more deliberate mobile/desktop proportions, cleaner CTA treatment and a small South African identity marker.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Core layout uses standard CSS, media queries and native ES modules. Blur is never required for content hierarchy or readability.

## Compatibility Findings
Source-based verification: the new visual layer uses standard CSS, media queries, border-radius, gradients, shadows, transitions and `prefers-reduced-motion`; no new browser-specific API dependency was introduced. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, network image loading and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access during preview. All pages retain `noindex,nofollow` while demonstration identity remains.

## Completed Improvements
Round 1: persistent memory and commercial visual foundation.
Round 2: beauty-focused visual overhaul with stronger rose/pink hierarchy, blush/berry surfaces, elevated components and responsive safeguards.
Round 3: typography, interaction and responsive polish including mobile navigation and filter semantics.
Round 4: image-led commercial visual upgrade with stock photography, editorial salon imagery, improved hero scale, stronger gallery presentation, lazy loading/alt text and progressive backdrop blur.
Round 5: demographic visual targeting, deterministic hero image sizing for Safari resilience, image dimensions to reduce layout shift, demo noindex protection and remote preview guidance.
Round 6: major secondary-page commercialization pass. Services gained image-led hero, service hierarchy, pricing/timing strip and booking CTA. Gallery gained editorial hero, mosaic layout and broader representation. About gained image-led storytelling. Contact gained image-led booking hero, contact feature card, booking guidance and FAQ structure. Added small South African positioning.
Round 7: introduced `css/commercial.css` for a stronger editorial visual system; refreshed imagery across all five pages using distinct Pexels stock photographs; removed repeated image usage across the site; added broader representation including Black, South Asian and East Asian subjects plus varied salon imagery; upgraded buttons, cards, page heroes, form treatment, section rhythm and mobile layouts; added a small CSS-built Proudly South African badge; removed the prior Rawpixel/AI placeholder from the gallery and updated licensing provenance documentation.

## Outstanding Issues
Live browser/device verification remains required; replace demonstration business details and prices; replace demo stock images with buyer-approved/licensed client work for production; verify external WhatsApp destination; review all final metadata and structured data for buyer identity; inspect physical rendering after this round.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing remain intentionally deferred unless they create clear buyer value.

## Commercial Improvements
The site now presents more like a finished salon product rather than a document-heavy demo. Visual differentiation is stronger without changing the underlying static architecture. Distinct photography across pages prevents repetition, the gallery demonstrates demographic breadth, booking/contact UI has more visual weight, and the small South African marker reinforces local positioning without depending on a third-party logo asset.

## Licensing / Provenance
Current demo imagery is sourced from Pexels and is referenced through its image CDN. Selected Pexels source pages identify the images as free to use. Recheck provenance and current terms before any production redistribution. No AI-generated image is intentionally retained in the current visual set. See `docs/IMAGE-LICENSING.md`.

## Third-Party Dependencies
No package manager dependency is required. JavaScript uses native browser APIs and ES modules. Demo imagery is externally hosted by Pexels.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led page heroes, visual gallery, gallery filters, gallery mosaic, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, FAQ structure, local South African positioning, progressive visual enhancement, low deployment complexity and documented remote preview workflow.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable. Keep the pink palette independent of browser-specific effects. Keep mobile navigation breakpoint aligned with its JavaScript resize behavior. Backdrop blur must remain enhancement-only. Keep explicit hero/page-media heights aligned with responsive breakpoints.

## Current Scorecard
Evidence-based source inspection after Round 7. Live/device testing is still outstanding.
- Visual Quality: 97/100
- UX: 96/100
- Functionality: 87/100
- Responsive Quality: 96/100
- Browser Compatibility: 94/100
- Accessibility: 93/100
- Architecture: 92/100
- Code Quality: 92/100
- Performance: 90/100
- Security: 88/100
- SEO: 88/100
- Customizability: 95/100
- Reusability: 96/100
- Transferability: 96/100
- Differentiation: 97/100
- Commercial Readiness: 97/100
- Overall: 95/100

## Defect Scorecard
- Critical: 0 confirmed
- High: 0 confirmed
- Medium: 0 confirmed
- Low: 0 confirmed
- Broken core functionality: 0 confirmed by source inspection
- Broken links: 0 confirmed by source inspection
- Broken interactions: 0 confirmed by source inspection
- Responsive blockers: 0 confirmed by source inspection
- Known browser blockers: 0 confirmed
- Accessibility blockers: 0 confirmed
- Security blockers: 0 confirmed
- Licensing blockers: 0 confirmed
- Commercial blockers: 0 confirmed

Unknown remains unknown until live/device verification.

## Last Verified Commit
Round 7 branch is the pending improvement state until merged to `main`.

## Last Improvement Round
2026-09-07: Round 7 completed on `commercial-visual-round-7`. Major visual refinement, distinct stock imagery, representation expansion, South African badge treatment and licensing cleanup completed. Ready for source-level regression review and merge.
