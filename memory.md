# PROJECT MEMORY

## Website Purpose
Reusable, premium-feeling salon / hair-and-beauty website asset designed for rapid client rebranding and deployment. Current demonstration identity: Maggie's Hair & Beauty, Pretoria.

## Current Architecture
Dependency-light static HTML/CSS/ES-module JavaScript. Five pages: home, services, gallery, about, contact. Shared CSS layers and centralized business/service/social data. No framework, build system, database, or server runtime required.

## Repository Structure
- `index.html` - home page
- `pages/` - services, gallery, about, contact
- `css/` - reset, variables, base, layout, components, pages, responsive, accessibility
- `js/` - main plus small feature modules
- `data/` - business, services, social, testimonials data
- `config/` - feature flags
- `assets/images/` - replaceable image area and provenance guidance
- `commercial/` - handover, deployment and rebranding guidance
- `docs/` - architecture, browser, content, customization and image licensing guidance
- `memory.md` - persistent operational project context

## Design Direction
Beauty-first editorial salon aesthetic. Warm blush/pink canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography now carries more of the visual storytelling so the template looks like a real salon site rather than a CSS-only concept.

## Design System
Brand tokens live in `css/variables.css`. Typography, buttons, cards, navigation, forms, gallery treatments and layout primitives remain centralized. `text-size-adjust:100%` is used without relying on a WebKit-only declaration. Backdrop blur is progressive enhancement only: solid/translucent backgrounds remain the fallback, with standard `backdrop-filter` and a paired WebKit enhancement when supported.

## Important Components
Sticky header with progressive glass treatment, responsive navigation, image-led hero, CTA buttons, service cards/lists, feature list, editorial image section, filterable image gallery, booking form, contact card, floating WhatsApp action, shared footer.

## Customization Points
Buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css`. Replaceable creative assets belong in `assets/images/`; demo gallery URLs are deliberately isolated to easy-to-replace `<img>` elements.

## Reference Design Decisions
No external visual reference supplied this round. The implementation direction was strengthened toward a premium editorial salon presentation: real stock photography, larger hero composition, restrained glass treatment, stronger image hierarchy, more convincing gallery presentation, and clearer commercial demo labeling.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Core layout uses standard CSS, media queries and native ES modules. Blur is never required for content hierarchy or readability.

## Compatibility Findings
VERIFIED from source inspection: standard CSS fallbacks exist for backdrop effects; no WebKit-only `text-size-adjust` dependency remains; semantic HTML, standard media queries, native ES modules, ordinary form controls, reduced-motion handling and responsive navigation remain in place. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access during preview.

## Completed Improvements
Round 1: persistent memory and commercial visual foundation.
Round 2: substantial beauty-focused visual overhaul with stronger rose/pink hierarchy, blush/berry surfaces, elevated components and responsive safeguards.
Round 3: typography, interaction and responsive polish including mobile navigation and filter semantics.
Round 4: image-led commercial visual upgrade. Replaced abstract CSS-only hero/gallery treatment with stock photography placeholders, added editorial salon imagery, improved hero scale, strengthened gallery presentation, added lazy loading/alt text, introduced progressive backdrop blur with fallbacks, removed reliance on WebKit-only text sizing, tightened mobile image composition, and documented image replacement/provenance.

## Outstanding Issues
Live browser/device verification remains required; replace demonstration business details; replace remote demo images with buyer-approved/licensed assets; review all metadata and structured data for eventual buyer identity; verify external WhatsApp destination; inspect all page renderings after the visual upgrade.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing remain intentionally deferred unless they create clear buyer value.

## Commercial Improvements
The template now presents much closer to a finished salon product during a buyer preview. Stock imagery communicates intended image treatment instead of leaving large CSS placeholders. Images are ordinary replaceable elements rather than architecture-dependent assets. The site retains its static no-build deployment advantage.

## Licensing / Provenance
Demo imagery is referenced from Unsplash and documented in `assets/images/README.md`. These images are placeholders for visual demonstration, not Maggie-specific client assets. Verify current licensing/provenance before redistribution and replace with buyer-approved assets for production.

## Third-Party Dependencies
No package manager dependency is required. JavaScript uses native browser APIs and ES modules. Demo imagery is externally hosted by Unsplash.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led hero, visual gallery, gallery filters, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, progressive visual enhancement and low deployment complexity.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable. Keep the pink palette independent of browser-specific effects. Keep mobile navigation breakpoint aligned with its JavaScript resize behavior. Backdrop blur must remain enhancement-only.

## Current Scorecard
Source-based working assessment after Round 4. Evidence-based estimates from repository inspection, not live/device test results.
- Visual Quality: 96/100
- UX: 91/100
- Functionality: 86/100
- Responsive Quality: 92/100
- Browser Compatibility: 91/100
- Accessibility: 92/100
- Architecture: 90/100
- Code Quality: 89/100
- Performance: 88/100
- Security: 86/100
- SEO: 82/100
- Customizability: 92/100
- Reusability: 93/100
- Transferability: 92/100
- Differentiation: 93/100
- Commercial Readiness: 93/100
- Overall: 91/100

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
Round 4 image-led commercialization batch is the pending repository head at the time of this memory update.

## Last Improvement Round
2026-09-07: Round 4 completed. The visual system was pushed from abstract/CSS artwork toward a buyer-ready salon presentation with stock imagery, progressive glass enhancement, cross-browser text sizing, stronger editorial composition and explicit image provenance guidance.