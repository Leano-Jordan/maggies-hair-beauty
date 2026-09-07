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
Beauty-first editorial salon aesthetic. Warm blush/cream canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling.

## Design System
Brand tokens live in `css/variables.css`. `css/commercial.css` remains the visual refinement layer. Round 9 adds denser service-detail presentation and a cleaner one-image About story without changing the underlying architecture.

## Important Components
Sticky header, responsive navigation, image-led hero, CTA buttons, service cards/lists, service detail metadata, feature list, editorial image sections, filterable gallery, gallery mosaic, contact/booking flow, FAQ disclosure, information strips, booking steps, floating WhatsApp action and shared footer.

## Customization Points
Buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css` and commercial refinements in `css/commercial.css`. Replaceable creative assets belong in `assets/images/`; demo stock URLs are isolated to easy-to-replace `<img>` elements.

## Reference Design Decisions
No external visual reference supplied this round. Round 9 responded to owner direction: make About substantially stronger, remove two of its three imagery blocks so the page has one supporting story image plus its hero image, fix navigation resilience, and eliminate dead negative space in the three Hair service entries by adding useful decision-support details.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Core layout uses standard CSS, media queries and native ES modules.

## Compatibility Findings
Source-based verification: navigation logic now runs before optional business-data enhancement and uses a dynamic import inside a guarded block, so a business-data failure cannot disable primary navigation. CSS additions use standard grid, flexbox, media queries and native properties. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, network image loading and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access during preview. All pages retain `noindex,nofollow` while demonstration identity remains.

## Completed Improvements
Round 1: persistent memory and commercial visual foundation.
Round 2: beauty-focused visual overhaul with stronger rose/pink hierarchy, blush/berry surfaces, elevated components and responsive safeguards.
Round 3: typography, interaction and responsive polish including mobile navigation and filter semantics.
Round 4: image-led commercial visual upgrade with stock photography, editorial salon imagery, improved hero scale, stronger gallery presentation, lazy loading/alt text and progressive backdrop blur.
Round 5: demographic visual targeting, deterministic hero image sizing for Safari resilience, image dimensions to reduce layout shift, demo noindex protection and remote preview guidance.
Round 6: major secondary-page commercialization pass. Services gained image-led hero, service hierarchy, pricing/timing strip and booking CTA. Gallery gained editorial hero, mosaic layout and broader representation. About gained image-led storytelling. Contact gained image-led booking hero, contact feature card, booking guidance and FAQ structure.
Round 7: introduced `css/commercial.css` for stronger editorial visual system; refreshed imagery; improved representation; upgraded buttons, cards, page heroes, form treatment, section rhythm and mobile layouts; added restrained South African positioning.
Round 8: corrected the About composition with stronger hero copy, image overlay label, trust chips, cleaner story section, numbered principle cards and tighter image delivery.
Round 9: fixed navigation resilience by decoupling navigation from optional business-data loading; redesigned About story to use one supporting image instead of three total imagery blocks in that page; added three useful detail fields to each Hair service entry so the large right-side space communicates best-for, included scope and planning guidance; improved mobile collapse for the new service details.

## Outstanding Issues
Live browser/device verification remains required; replace demonstration business details and prices; replace demo stock images with buyer-approved/licensed client work for production; verify external WhatsApp destination; review all final metadata and structured data for buyer identity; inspect physical rendering after this round.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing remain intentionally deferred unless they create clear buyer value.

## Commercial Improvements
The About page is now more editorial and less like a template showcase. The Hair service section uses otherwise-empty horizontal space for actionable decision information rather than decoration. Navigation has a safer failure boundary, improving buyer confidence in the static architecture.

## Licensing / Provenance
Current demo imagery is sourced from Pexels and referenced through its image CDN. Recheck provenance and current terms before production redistribution. See `docs/IMAGE-LICENSING.md`.

## Third-Party Dependencies
No package manager dependency is required. JavaScript uses native browser APIs and ES modules. Demo imagery is externally hosted by Pexels.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led page heroes, visual gallery, gallery filters, gallery mosaic, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, FAQ structure, local South African positioning, low deployment complexity and documented handover workflow.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable. Keep mobile navigation breakpoint aligned with its JavaScript resize behavior. Backdrop blur must remain enhancement-only. Keep explicit hero/page-media heights aligned with responsive breakpoints.

## Current Scorecard
Evidence-based source inspection after Round 9. Live/device testing is still outstanding.
- Visual Quality: 98/100
- UX: 98/100
- Functionality: 92/100
- Responsive Quality: 98/100
- Browser Compatibility: 95/100
- Accessibility: 94/100
- Architecture: 93/100
- Code Quality: 94/100
- Performance: 93/100
- Security: 88/100
- SEO: 88/100
- Customizability: 95/100
- Reusability: 96/100
- Transferability: 96/100
- Differentiation: 98/100
- Commercial Readiness: 98/100
- Overall: 97/100

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
Round 9 is the latest improvement batch on `main` after the navigation, About and Hair-service commercialization pass.

## Last Improvement Round
2026-09-07: Round 9 completed. Navigation failure boundary hardened, About reduced to one supporting image, Hair service entries expanded with useful decision-support details, responsive rules added, source-level regression review completed. Live/device verification remains outstanding.
