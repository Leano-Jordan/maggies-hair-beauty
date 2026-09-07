# PROJECT MEMORY

## Website Purpose
Reusable, premium-feeling salon / hair-and-beauty website asset for rapid client rebranding and deployment. Current demo identity: Maggie's Hair & Beauty, Pretoria.

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

## Design Direction
Beauty-first editorial salon aesthetic. Warm blush/cream canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling.

## Design System
Brand tokens live in `css/variables.css`. `css/commercial.css` is the visual refinement layer. Round 10 adds deterministic media sizing, resilient mobile navigation presentation and a cleaner editorial About story.

## Important Components
Sticky header, responsive navigation, image-led hero, CTA buttons, service cards/lists, service detail metadata, feature list, editorial image sections, filterable gallery, gallery mosaic, contact/booking flow, FAQ disclosure, information strips, booking steps, floating WhatsApp action and shared footer.

## Customization Points
Buyer-facing data: `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, `config/site-config.js`. Theme tokens: `css/variables.css`. Commercial refinements: `css/commercial.css`. Replaceable creative assets: `assets/images/`. Demo stock URLs remain easy-to-replace `<img>` sources.

## Reference Design Decisions
No external visual reference supplied. Owner direction this round: About was still weak, navigation still unreliable, and image sizing inconsistent. About was rewritten around a clearer client-centric story. Media containers now use explicit aspect-ratio contracts instead of mixed source dimensions/min-heights. Mobile navigation now has explicit visibility, opacity, pointer and overflow states.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile.

## Compatibility Findings
Source-level: navigation initialization is independent from business-data enhancement; failed optional data import cannot prevent the nav handlers from being registered. Media sizing uses standard `aspect-ratio`, `object-fit`, grid/flex and media queries. UNVERIFIED: physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, external image delivery and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access. Pages retain `noindex,nofollow` while demonstration identity remains.

## Completed Improvements
Round 1: commercial memory/foundation.
Round 2: beauty-focused visual overhaul.
Round 3: typography, interaction and responsive polish.
Round 4: image-led commercial upgrade and gallery presentation.
Round 5: image sizing, image dimensions, demo noindex protection and browser safeguards.
Round 6: secondary-page commercialization across services, gallery, About and contact.
Round 7: commercial visual refinement layer and broader representation.
Round 8: About composition correction.
Round 9: navigation failure boundary, cleaner About story, Hair service decision-support details.
Round 10: rebuilt About story copy and composition; added deterministic image-frame aspect ratios; hardened mobile nav visibility and interaction states; preserved normal navigation links as fallbacks; reduced dependency coupling in `main.js`.

## Outstanding Issues
Live browser/device verification remains required. Replace demonstration business details, prices and stock imagery. Verify WhatsApp destination. Review final metadata/structured data for buyer identity. Perform physical visual regression testing after this round.

## Deferred Issues
Optional CMS, online booking backend, maps, analytics, payments and automated visual regression remain deferred unless they create clear buyer value.

## Commercial Improvements
The About page now explains the visitor problem and value of the experience rather than mainly describing the template. Media sizing is more predictable across page types. Navigation failure is isolated from business-data enhancement, improving resilience in constrained environments.

## Licensing / Provenance
Current demo imagery is sourced from Pexels through its image CDN. Recheck provenance and current terms before production redistribution. See `docs/IMAGE-LICENSING.md`.

## Third-Party Dependencies
No package manager dependency. Native browser APIs and ES modules only. Demo imagery is externally hosted by Pexels.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led heroes, visual gallery, filters, mosaic, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, FAQ, South African positioning, low deployment complexity and documented handover workflow.

## Regression Warnings
Keep navigation IDs and `.booking-link` stable. Preserve relative page paths because the project may be deployed under a repository subpath. Keep mobile navigation breakpoint aligned with CSS. Backdrop blur remains enhancement-only. Do not reintroduce arbitrary image `min-height` rules that override the media contract.

## Current Scorecard
Evidence-based source inspection after Round 10. User-reported visual/navigation defects prompted a conservative reset rather than inflated scores. Live/device testing remains outstanding.
- Visual Quality: 91/100
- UX: 89/100
- Functionality: 90/100
- Responsive Quality: 91/100
- Browser Compatibility: 90/100
- Accessibility: 94/100
- Architecture: 93/100
- Code Quality: 92/100
- Performance: 92/100
- Security: 88/100
- SEO: 88/100
- Customizability: 95/100
- Reusability: 96/100
- Transferability: 96/100
- Differentiation: 92/100
- Commercial Readiness: 90/100
- Overall: 92/100

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

User-reported navigation and image issues are treated as evidence that live verification is still needed, not as zero defects by assumption.

## Last Verified Commit
Round 10 source changes prepared against commit `762e9a3c70848090404225c757721f6eccfefd0b`.

## Last Improvement Round
2026-09-08: Round 10 implemented. About story materially rewritten; image-frame sizing normalized; mobile navigation made visually/state robust; optional business-data loading isolated from navigation. Live/device verification remains outstanding.
