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
- `assets/images/` - replaceable image area
- `commercial/` - handover, deployment and rebranding guidance
- `docs/` - architecture, browser, content, customization and image licensing guidance
- `memory.md` - persistent operational project context

## Design Direction
Beauty-first editorial salon aesthetic. The site uses a warm blush/pink canvas with richer berry/plum contrast and a stronger rose primary accent. It should feel feminine, polished, warm, tactile and beauty-focused without becoming sugary or childish. Maintain generous whitespace, elegant serif display typography and clean sans-serif body copy.

## Design System
Brand tokens live in `css/variables.css`. Typography, buttons, cards, navigation, forms, gallery treatments and layout primitives remain centralized. Prefer broadly supported CSS and progressive enhancement over browser-specific effects.

## Important Components
Sticky header, responsive navigation, hero, CTA buttons, service cards/lists, feature list, gallery tiles, booking form, contact card, floating WhatsApp action, shared footer.

## Customization Points
Buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css`. Replaceable creative assets belong in `assets/images/`.

## Reference Design Decisions
No external visual reference supplied. Current visual direction: reduce overly bright/white presentation, make the pink theme stand out, and make the website unmistakably about beauty. The latest round strengthened editorial typography, whitespace, CTA hierarchy, card depth, navigation states and responsive composition without introducing a framework.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Core layout uses standard CSS, media queries and native ES modules. No browser-specific visual effect is required for core hierarchy.

## Compatibility Findings
VERIFIED from source inspection: semantic HTML structure, standard CSS layout, media queries, native ES modules, ordinary form controls, reduced-motion handling, responsive navigation state management and graceful normal-link fallbacks. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number.

## Completed Improvements
Round 1: persistent memory established and commercial visual foundation started.
Round 2: substantial beauty-focused visual overhaul. Rebalanced global palette, strengthened rose/pink hierarchy, introduced blush/berry surfaces, improved hero artwork treatment, elevated cards/forms/gallery, strengthened CTA states, improved focus treatment and reduced-motion safeguards.
Round 3: drastic typography and interaction polish. Improved type scale and reading measure, font rendering, brand/nav typography, button hierarchy and states, card elevation/hover treatment, form controls, gallery interaction, header active-state treatment, mobile navigation animation and ARIA labeling, navigation close behavior, filter pressed state semantics, mobile service-list composition, spacing rhythm and responsive breakpoints.

## Outstanding Issues
Need live-browser/device verification; replace demonstration business details; replace abstract demo artwork with licensed client/open-source imagery; review all metadata and structured data for eventual buyer identity; verify external WhatsApp destination; inspect all page renderings after the visual overhaul.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing remain intentionally deferred unless they create clear buyer value.

## Commercial Improvements
Current priority is visual differentiation for the hair/beauty market while retaining low deployment complexity. Keep rebranding points obvious, isolate business identity, maintain honest demo labeling, document provenance, and preserve the static no-build deployment advantage.

## Licensing / Provenance
Current visual treatment is CSS-generated. Do not ship unverified third-party photographs or fonts as commercial assets. Any future image/font additions must be provenance-checked and documented.

## Third-Party Dependencies
No package manager dependency is currently required. JavaScript uses native browser APIs and ES modules.

## Buyer-Relevant Features
Multi-page salon structure, service menu, gallery, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery and low deployment complexity.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable. Do not make the pink palette dependent on a browser-specific feature. Keep the mobile navigation breakpoint aligned with its JavaScript resize behavior.

## Current Scorecard
Source-based working assessment after Round 3. These are evidence-based estimates from repository inspection, not live/device test results.
- Visual Quality: 93/100
- UX: 89/100
- Functionality: 86/100
- Responsive Quality: 90/100
- Browser Compatibility: 86/100
- Accessibility: 89/100
- Architecture: 89/100
- Code Quality: 88/100
- Performance: 91/100
- Security: 86/100
- SEO: 78/100
- Customizability: 88/100
- Reusability: 90/100
- Transferability: 89/100
- Differentiation: 88/100
- Commercial Readiness: 88/100
- Overall: 89/100

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
Round 3 commit is the current repository head after the typography, interaction and responsive polish batch.

## Last Improvement Round
2026-09-07: Round 3 completed. Typography, visual hierarchy, component states, mobile navigation, filters and responsive behavior were materially improved without framework migration or functional rewrite.
