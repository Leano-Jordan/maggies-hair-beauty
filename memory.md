# PROJECT MEMORY

## Website Purpose
Reusable, premium-feeling salon / hair-and-beauty website asset for rapid client rebranding and deployment. Current demo identity: Maggie's Hair & Beauty, Pretoria.

## Current Architecture
Dependency-light static HTML/CSS/ES-module JavaScript. Five pages: home, services, gallery, about, contact. Shared CSS layers and centralized business/service/social/testimonial data. No framework, build system, database, or server runtime required.

## Repository Structure
- `index.html` - home page
- `pages/` - services, gallery, about, contact
- `css/` - reset, variables, base, layout, components, pages, responsive, accessibility, commercial visual refinement
- `js/` - main plus small feature modules
- `data/` - business, services, social, testimonials data
- `config/` - feature flags
- `assets/images/` - replaceable image area and provenance guidance
- `commercial/` - handover, deployment and rebranding guidance
- `docs/` - architecture, browser, content, customization, image licensing and remote preview guidance

## Design Direction
Beauty-first editorial salon aesthetic. Warm blush/cream canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling.

## Design System
Brand tokens live in `css/variables.css`. `css/commercial.css` is the final visual refinement layer. It now strengthens focus treatment, service-card hierarchy, service metadata, form emphasis, media failure resilience and mobile navigation presentation without introducing unsupported CSS dependencies.

## Important Components
Sticky header, responsive navigation, image-led hero, CTA buttons, service cards/lists, service detail metadata, feature list, editorial image sections, filterable gallery, gallery mosaic, contact/booking flow, FAQ disclosure, information strips, booking steps, floating WhatsApp action and shared footer.

## Customization Points
Buyer-facing data: `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, `config/site-config.js`. Theme tokens: `css/variables.css`. Commercial refinements: `css/commercial.css`. Replaceable creative assets: `assets/images/`. Demo stock URLs remain easy-to-replace `<img>` sources.

## Reference Design Decisions
No external visual reference supplied this round. Owner direction: improve the site drastically while avoiding regressions. The refinement keeps the existing beauty-editorial identity, but increases hierarchy, interaction clarity, service decision support and buyer-facing polish instead of adding unrelated features.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile.

## Compatibility Findings
Source-level: navigation initialization is independent from business-data enhancement; navigation now manages `aria-hidden`, Escape, outside-click closing and focus placement. Media sizing uses standard `aspect-ratio`, `object-fit`, grid/flex and media queries. No `:has()`, color-mix or browser-specific layout dependency was introduced. Backdrop blur remains enhancement-only. UNVERIFIED: physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, external image delivery and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access. Pages retain `noindex,nofollow` while demonstration identity remains.

## Completed Improvements
Rounds 1–10: commercial foundation, beauty visual overhaul, typography/interaction/responsive polish, image-led upgrade, deterministic media sizing, secondary-page commercialization, About composition/story improvements and navigation resilience.
Round 11: strengthened visual hierarchy and focus states; improved service-card CTA anchoring; added structured service-detail chips; synchronized `data/services.js` with every service currently presented on the Services page; made the booking selector derive from centralized service data; made opening hours derive from centralized business data; prevented past-date selection in booking; added mobile navigation focus/outside-click resilience; added graceful media-failure state; expanded buyer-oriented README documentation.

## Outstanding Issues
Live browser/device verification remains required. Replace demonstration business details, prices and stock imagery. Verify WhatsApp destination. Review final metadata/structured data for buyer identity. Perform physical visual regression testing before production delivery.

## Deferred Issues
Optional CMS, online booking backend, maps, analytics, payments and automated visual regression remain deferred unless they create clear buyer value.

## Commercial Improvements
The repository now has tighter data consistency between visible services and booking choices, less duplicated business information, stronger mobile interaction behaviour and a more deliberate component hierarchy. The static architecture remains intentionally simple and transferable.

## Licensing / Provenance
Current demo imagery is sourced from Pexels through its image CDN. Recheck provenance and current terms before production redistribution. See `docs/IMAGE-LICENSING.md`.

## Third-Party Dependencies
No package manager dependency. Native browser APIs and ES modules only. Demo imagery is externally hosted by Pexels.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led heroes, visual gallery, filters, mosaic, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, FAQ, South African positioning, low deployment complexity and documented handover workflow.

## Regression Warnings
Keep navigation IDs and `.booking-link` stable. Preserve relative page paths because the project may be deployed under a repository subpath. Keep mobile navigation breakpoint aligned with CSS. Backdrop blur remains enhancement-only. Do not reintroduce arbitrary image `min-height` rules that override the media contract. Keep `data/services.js` synchronized with visible service offerings because the booking selector now consumes it.

## Current Scorecard
Evidence-based source inspection after Round 11. Scores remain conservative because no physical browser/device test was available.
- Visual Quality: 94/100
- UX: 93/100
- Functionality: 93/100
- Responsive Quality: 94/100
- Browser Compatibility: 92/100
- Accessibility: 96/100
- Architecture: 94/100
- Code Quality: 94/100
- Performance: 92/100
- Security: 88/100
- SEO: 88/100
- Customizability: 96/100
- Reusability: 97/100
- Transferability: 97/100
- Differentiation: 93/100
- Commercial Readiness: 93/100
- Overall: 94/100

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

These are source-level findings, not proof of physical-device perfection. External image availability, live WhatsApp routing and browser pixel fidelity remain unverified.

## Last Verified Commit
Round 11 source changes prepared against commit `6811dd620eb3bf2482a077d8041e9cffc835b93b`.

## Last Improvement Round
2026-09-08: Round 11 implemented. Visual refinement, service-data synchronization, booking consistency, mobile navigation resilience, media failure handling and buyer documentation were improved. Physical browser/device verification remains outstanding.
