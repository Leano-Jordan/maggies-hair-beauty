# PROJECT MEMORY

## Website Purpose
Reusable, premium-feeling salon / hair-and-beauty website asset designed for rapid client rebranding and deployment. Current demonstration identity: Maggie's Hair & Beauty, Pretoria.

## Current Architecture
Dependency-light static HTML/CSS/ES-module JavaScript. Five pages: home, services, gallery, about, contact. Shared CSS layers and a small centralized business data module. No framework, build system, database, or server runtime required.

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

## Design Direction
Editorial, warm, premium salon aesthetic. Cream paper foundation, deep plum/ink typography, restrained rose accent, generous whitespace, strong serif display type paired with a clean system sans. CSS-generated abstract artwork is intentionally replaceable rather than pretending to be final photography.

## Design System
Brand tokens live in `css/variables.css`. Shared typography, buttons, cards, navigation, forms, gallery treatments and layout primitives are centralized in the CSS layers. Prefer progressive enhancement and broadly supported CSS over browser-specific effects.

## Important Components
Sticky header, responsive navigation, hero, CTA buttons, service cards/lists, feature list, gallery tiles, booking form, contact card, floating WhatsApp action, shared footer.

## Customization Points
Primary buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css`. Replaceable creative assets belong in `assets/images/`.

## Reference Design Decisions
No external visual reference supplied for the current round. The implementation was improved using the existing salon identity rather than cloning another site.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Avoid relying on `backdrop-filter`, experimental selectors, or browser-specific APIs for core layout/functionality.

## Compatibility Findings
VERIFIED from source inspection: semantic HTML, responsive media queries, standard ES modules, ordinary form controls and standard CSS layout primitives. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet and real-device touch/keyboard testing.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require owner/client replacement before production. WhatsApp booking is external and requires a real WhatsApp number.

## Completed Improvements
Round 1: established persistent project memory; began commercial visual overhaul; retained static architecture and existing booking/navigation model.

## Outstanding Issues
Need live-browser/device verification; replace demonstration business details; replace abstract demo artwork with licensed client/open-source imagery; review all metadata and structured data for the eventual buyer identity; verify external WhatsApp destination.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing are intentionally deferred because they are not required for a strong static commercial template.

## Commercial Improvements
Focus on clear customization points, reusable visual primitives, strong mobile conversion path, honest demo labeling, clean client-identity separation, licensing provenance and handoff documentation.

## Licensing / Provenance
Current visual treatment is CSS-generated. Third-party dependency licensing should remain documented if dependencies are introduced. Do not ship unverified third-party photographs or fonts as commercial assets.

## Third-Party Dependencies
No package manager dependency is currently required. JavaScript uses native browser APIs and ES modules.

## Buyer-Relevant Features
Multi-page salon structure, service menu, gallery, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery and low deployment complexity.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable.

## Last Verified Commit
`cd0c5f413f2037c22ab8975b7d0cfa88cac575db` before commercialization round 1.

## Last Improvement Round
2026-09-07: Commercialization Round 1 initiated. Global visual system and buyer-oriented polish are being applied without framework migration.
