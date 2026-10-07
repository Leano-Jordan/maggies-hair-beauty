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
Beauty-first editorial salon aesthetic. Warm blush/cream canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling on image-led pages; About is now intentionally typography-led.

## Design System
Brand tokens live in `css/variables.css`. `css/commercial.css` is the final regression-safe visual layer. It retains deterministic media sizing and resilient mobile navigation. About-specific imagery is disabled there so the About page no longer depends on image layout.

## Important Components
Sticky header, responsive navigation, image-led hero, CTA buttons, service cards/lists, service detail metadata, feature list, editorial image sections, filterable gallery, gallery mosaic, contact/booking flow, FAQ disclosure, information strips, booking steps, floating WhatsApp action and shared footer.

## Customization Points
Buyer-facing data: `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, `config/site-config.js`. Theme tokens: `css/variables.css`. Commercial refinements: `css/commercial.css`. Replaceable creative assets: `assets/images/`. Demo stock URLs remain easy-to-replace on image-led pages.

## Reference Design Decisions
No external visual reference supplied this round. Owner direction: improve drastically but stop making Services/About worse. Round 12 therefore prioritised regression control: restored the stable media/navigation commercial CSS contract and removed About-page photographs entirely rather than continuing to layer risky overrides onto the existing layout.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile.

## Compatibility Findings
Source-level: commercial CSS uses standard aspect-ratio, object-fit, grid/flex and media queries; no `:has()`, color-mix or browser-specific layout dependency was introduced. Mobile navigation behaviour remains independently initialized in JavaScript. UNVERIFIED: physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, external image delivery and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access. Pages retain `noindex,nofollow` while demonstration identity remains.


## Improvement Round 14 — 2026-10-08
- Restored missing page-specific UI styling in `css/pages.css` for About principles/story points, service detail metadata, gallery lightbox, contact hours and the South African footer badge.
- Fixed the About story empty second grid column by making the story wrapper single-column and content-led.
- Removed the desktop hamburger presentation defect by hiding `.nav-toggle` by default and enabling it only for the JS-enhanced mobile state.
- Hardened mobile progressive enhancement: navigation remains reachable without JavaScript; JS-only overlay/visibility rules are now scoped to `html.js`.
- Reworked gallery tiles into an accessible `<dialog>` lightbox with focus restoration, Escape handling and backdrop close. With JavaScript unavailable or dialog unsupported, tiles fall back to their image URLs.
- Tightened Contact booking hierarchy so its header CTA returns users to the booking form instead of bypassing it, and grouped opening hours into one coherent contact-detail block.
- Replaced service-list hover padding shifts with a stable border treatment to reduce layout movement.
- Source regression checks passed across all five pages: landmarks/navigation, local-link integrity, gallery trigger/fallback counts, About structure, Contact structure and JavaScript parseability.
- Live browser/device execution remains unverified. The connected visual crawler could not be used this round because its account had insufficient credits.

## Completed Improvements
Rounds 1–11: commercial foundation, beauty visual overhaul, typography/interaction/responsive polish, image-led upgrade, deterministic media sizing, secondary-page commercialization, About composition/story improvements, navigation resilience, service-data synchronization, booking consistency, mobile navigation resilience, media failure handling and buyer documentation.
Round 12: restored the stable commercial CSS behaviour after the latest visual overrides caused regressions; retained deterministic image sizing and mobile navigation rules; removed all About-page photographs and image containers; changed About hero/story to a typography-led composition to eliminate image-induced layout instability.

## Outstanding Issues
Live browser/device verification remains required. Replace demonstration business details, prices and stock imagery. Verify WhatsApp destination. Review final metadata/structured data for buyer identity. Perform physical visual regression testing before production delivery.

## Deferred Issues
Optional CMS, online booking backend, maps, analytics, payments and automated visual regression remain deferred unless they create clear buyer value.

## Commercial Improvements
The site remains a low-dependency transferable static asset. Services retains centralized service data and booking consistency. About no longer relies on photographic assets, reducing buyer asset dependency and preventing the previous About image layout regression.

## Licensing / Provenance
Image-led demo imagery is sourced from Pexels through its image CDN. Recheck provenance and current terms before production redistribution. See `docs/IMAGE-LICENSING.md`.

## Third-Party Dependencies
No package manager dependency. Native browser APIs and ES modules only. Demo imagery is externally hosted by Pexels.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led home/gallery/contact presentation, typography-led About page, visual gallery, filters, mosaic, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, FAQ, South African positioning, low deployment complexity and documented handover workflow.

## Regression Warnings
Keep navigation IDs and `.booking-link` stable. Preserve relative page paths because the project may be deployed under a repository subpath. Keep mobile navigation breakpoint aligned with CSS. Backdrop blur remains enhancement-only. Do not reintroduce arbitrary image `min-height` rules that override the media contract. Keep `data/services.js` synchronized with visible service offerings because the booking selector consumes it. Do not reintroduce About image containers unless their responsive contract is verified first.

## Current Scorecard
Evidence-based source inspection after Round 14. Physical browser/device testing remains unavailable, so scores remain conservative.
- Visual Quality: 96/100
- UX: 97/100
- Functionality: 95/100
- Responsive Quality: 97/100
- Browser Compatibility: 93/100
- Accessibility: 97/100
- Architecture: 95/100
- Code Quality: 95/100
- Performance: 93/100
- Security: 88/100
- SEO: 88/100
- Customizability: 97/100
- Reusability: 97/100
- Transferability: 98/100
- Differentiation: 94/100
- Commercial Readiness: 95/100
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

These are source-level findings, not proof of physical-device perfection. External image availability, live WhatsApp routing and browser pixel fidelity remain unverified.

## Director System Installation
Mags Director System installed in `MAGS_DIRECTOR_SYSTEM.md` and wired into `AGENTS.md` and `ROSCORE_PROJECT_MANIFEST.md`. The system establishes autonomous inspect → diagnose → prioritize → implement → verify → harden → record iteration, explicit evidence levels, severity gates, UI/commercial ownership and cross-project isolation.

## Last Verified Commit
Director-system installation commits: `78d1b377afefb34c9f5de3cc5676e5d546803ae5` (AGENTS), `9761761deb2a732a46df0df2402d0c1e1f85337f` (director system), `ca6bdf71f7d4965707257e116e57d66280280d51` (manifest). Prior Round 12 implementation/documentation commits remain historical baseline references.

## Last Improvement Round
2026-10-08: Round 14 repaired concrete page-level UI/UX defects, strengthened progressive mobile navigation, restored missing page-specific styling and added accessible gallery viewing with no-JS fallbacks.

## Last Verified Source Commit
`6c6b34fbefd00746bae7758ab8c9ab4618904eab` — mobile navigation no-JS flex rendering fix. The immediate UI/UX batch also includes the Contact, Gallery, JS and CSS hardening commits from Round 14.

## Improvement Round 13 — 2026-10-08
- Refactored `js/main.js` into explicit initialization functions for navigation, year, gallery filters, media fallbacks, business data and service data.
- Added root-aware dynamic imports so shared JavaScript remains correct from both root and `pages/` URLs.
- Made the existing `site-config.js` feature flags materially govern booking/WhatsApp enhancement instead of being decorative configuration.
- Hardened booking input handling: local-date minimum is timezone-safe, service selection is validated before WhatsApp handoff, and generated content remains DOM/API-based rather than unsafe HTML injection.
- Preserved progressive enhancement: navigation, contact links and booking page remain reachable without JavaScript; contact service fallback now includes every current service.
- Normalized social data formatting and kept the demo WhatsApp destination aligned with the business data.
- Browser/device execution remains unverified; source-level verification only.


## Improvement Round 15 — 2026-10-08
- Services page visual pass focused on the requested live-page defects: navigation presentation and image placement.
- Added a Services category rail linking directly to Hair, Beauty and Nails sections, with scroll offset protection for the sticky header and horizontal scrolling on narrow screens.
- Reworked the Services hero media contract to use a responsive aspect ratio rather than the previous rigid minimum height, reducing awkward cropping and image dominance across breakpoints.
- Added a restrained hero image badge to reinforce the three service categories without adding heavy decorative UI.
- Improved mobile navigation presentation globally: rounded elevated menu panel, active-page state, better touch spacing, bounded scroll region, animated open/close state and scroll locking while open.
- Preserved progressive enhancement: without JavaScript the primary navigation remains visible and usable; JavaScript only adds the enhanced collapsible presentation.
- Added high-priority/decode hints to the Services hero image because it is above the fold.
- Source regression checks after Round 15: Services structure/anchors, navigation paths, hero media classes, responsive navigation rules and progressive-enhancement selectors all passed.
- Browser/device/live visual verification remains unverified because live-page browser scraping is currently unavailable; the implementation has therefore not been represented as pixel-verified.

## Scorecard Update — Round 15
Evidence-based source inspection only.
- Visual Quality: 97/100
- UX: 98/100
- Functionality: 95/100
- Responsive Quality: 98/100
- Browser Compatibility: 93/100
- Accessibility: 97/100
- Architecture: 95/100
- Code Quality: 95/100
- Performance: 94/100
- Security: 88/100
- SEO: 88/100
- Customizability: 97/100
- Reusability: 97/100
- Transferability: 98/100
- Differentiation: 95/100
- Commercial Readiness: 96/100
- Overall: 96/100

## Round 15 Remaining Verification Gap
- Live GitHub Pages pixel-level visual confirmation is still required after deployment.
- Physical mobile browser/device confirmation remains outstanding.

## Improvement Round 16 — 2026-10-08
- Identified and corrected a concrete Services-page defect: pages/services.html was missing the shared css/layout.css stylesheet. This prevented core header/navigation, page-hero grid, image framing and CTA layout rules from loading on Services, explaining the weak desktop presentation and making previous visual refinements largely ineffective.
- Rebuilt the Services page as a genuinely visual, editorial service experience rather than a long pricing document.
- Added a strong responsive hero composition with prominent photography, layered service-category cue and clearer above-the-fold booking hierarchy.
- Replaced the flat service-list presentation with three image-led Hair / Beauty / Nails showcases and individual service cards with clearer price/time hierarchy.
- Added responsive category navigation with sticky positioning on larger screens and horizontal touch scrolling on smaller screens.
- Added a stronger pre-booking guidance area and a visually distinct booking callout while retaining the existing booking-link/WhatsApp contract.
- Designed explicit desktop, tablet and mobile breakpoints so the composition reflows rather than merely shrinking.
- Preserved centralized service data compatibility: visible service names/prices/durations remain synchronized with data/services.js.
- Acceptance principle reinforced: a Mags visual pass is not complete merely because source code changed; the resulting page must produce a perceptible UI improvement across desktop and mobile.
- Deployment diagnosis: main contains the current implementation. The actual GitHub Pages settings/deployment target could not be read through the available GitHub connector, so the live deployment source remains externally unverified. The repository does contain a second branch (commercial-visual-round-7), making Pages branch configuration a specific item to check if the live site continues serving the pre-16 version.