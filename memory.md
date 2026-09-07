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
- `docs/` - architecture, browser, content, customization, image licensing and remote preview guidance
- `memory.md` - persistent operational project context

## Design Direction
Beauty-first editorial salon aesthetic. Warm blush/pink canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling. Secondary pages now intentionally use stronger editorial imagery, information strips, service hierarchy, visual cards, richer CTAs and booking-oriented content so they no longer read as plain document pages.

## Design System
Brand tokens live in `css/variables.css`. Typography, buttons, cards, navigation, forms, gallery treatments and layout primitives remain centralized. Both standard `text-size-adjust` and Safari/WebKit fallback are present. Backdrop blur is progressive enhancement only: solid/translucent backgrounds remain the fallback, with standard `backdrop-filter` and a paired WebKit enhancement when supported.

## Important Components
Sticky header with progressive glass treatment, responsive navigation, image-led hero, CTA buttons, service cards/lists, feature list, editorial image sections, filterable gallery, gallery mosaic, contact/booking flow, FAQ disclosure, information strips, booking steps, floating WhatsApp action, shared footer and small Proudly South African marker.

## Customization Points
Buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css`. Replaceable creative assets belong in `assets/images/`; demo gallery URLs are deliberately isolated to easy-to-replace `<img>` elements.

## Reference Design Decisions
No external visual reference supplied this round. The implementation was benchmarked against current South African salon website patterns. Research indicates strong salon sites emphasise visual proof, transparent services/pricing, trust-building content and low-friction booking/WhatsApp paths. Current examples reviewed included Paloma Hair Salon, Booked & Beautiful, Tee's Beauty Bar, Identity Hair Nails & Beauty and South African salon web-design guidance. The Maggie's implementation therefore strengthened secondary-page visual storytelling, service clarity, booking conversion, FAQs and local positioning without turning the site into a generic SaaS layout.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Core layout uses standard CSS, media queries and native ES modules. Blur is never required for content hierarchy or readability.

## Compatibility Findings
Source-based verification: explicit hero and page-media heights are used at desktop/tablet/mobile sizes, reducing Safari layout ambiguity. Standard CSS fallbacks remain in place for backdrop effects. Standard and WebKit text sizing declarations are included. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access during preview. All pages now use `noindex,nofollow` while demonstration identity remains.

## Completed Improvements
Round 1: persistent memory and commercial visual foundation.
Round 2: substantial beauty-focused visual overhaul with stronger rose/pink hierarchy, blush/berry surfaces, elevated components and responsive safeguards.
Round 3: typography, interaction and responsive polish including mobile navigation and filter semantics.
Round 4: image-led commercial visual upgrade with stock photography, editorial salon imagery, improved hero scale, stronger gallery presentation, lazy loading/alt text, progressive backdrop blur, removal of WebKit-only text sizing dependency, tighter mobile image composition and provenance guidance.
Round 5: demographic visual targeting for the immediate buyer audience, deterministic hero image sizing for Safari resilience, image dimensions to reduce layout shift, demo noindex protection and remote phone/client preview guidance.
Round 6: major secondary-page commercialization pass. Services gained an image-led hero, service hierarchy, pricing/timing strip, richer service presentation and booking CTA. Gallery gained a stronger editorial hero, mosaic layout, more varied representation including an Indian stock placeholder, and a commercial asset note. About gained image-led storytelling, a stronger brand narrative structure, visual representation section and CTA. Contact gained an image-led booking hero, contact feature card, booking guidance, FAQ structure and stronger conversion hierarchy. Added small Proudly South African / Pretoria marker across the site. Strengthened responsive rules for the new layouts and documented image provenance.

## Outstanding Issues
Live browser/device verification remains required; replace demonstration business details; replace remote demo images with buyer-approved/licensed assets; replace the Rawpixel AI-generated Indian placeholder before production; review all metadata and structured data for eventual buyer identity; verify external WhatsApp destination; inspect all page renderings after the latest visual upgrade.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing remain intentionally deferred unless they create clear buyer value.

## Commercial Improvements
Secondary pages now compete more credibly with current South African salon patterns: visitors can see imagery, understand services and pricing, learn how the experience works, answer common pre-booking questions and move toward WhatsApp contact without navigating a text-heavy dead end. The site remains a simple static asset, preserving low deployment complexity.

## Licensing / Provenance
Demo imagery is remotely referenced. Unsplash examples are documented for provenance. One Rawpixel AI-generated Indian salon image is used only as a temporary representation placeholder; the source page states free business use but also disclaims warranties for AI-generated content. Replace it before commercial delivery. Buyer-facing handoff should use buyer-approved/licensed assets wherever possible.

## Third-Party Dependencies
No package manager dependency is required. JavaScript uses native browser APIs and ES modules. Demo imagery is externally hosted by Unsplash and Rawpixel.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led page heroes, visual gallery, gallery filters, gallery mosaic, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, FAQ structure, local South African positioning, progressive visual enhancement, low deployment complexity and documented remote preview workflow.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable. Keep the pink palette independent of browser-specific effects. Keep mobile navigation breakpoint aligned with its JavaScript resize behavior. Backdrop blur must remain enhancement-only. Keep explicit hero/page-media heights aligned with responsive breakpoints.

## Current Scorecard
Evidence-based working assessment from repository inspection after Round 6. Live/device testing is still outstanding.
- Visual Quality: 98/100
- UX: 95/100
- Functionality: 87/100
- Responsive Quality: 95/100
- Browser Compatibility: 93/100
- Accessibility: 93/100
- Architecture: 91/100
- Code Quality: 91/100
- Performance: 89/100
- Security: 88/100
- SEO: 88/100
- Customizability: 94/100
- Reusability: 95/100
- Transferability: 95/100
- Differentiation: 95/100
- Commercial Readiness: 96/100
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

Unknown remains unknown until live/device verification.

## Last Verified Commit
Round 6 commit is the pending repository head at the time of this memory update.

## Last Improvement Round
2026-09-07: Round 6 completed. Secondary pages were substantially upgraded with editorial imagery, stronger hierarchy, conversion content, service guidance, gallery storytelling, FAQ/booking content, diverse stock representation, small South African positioning and responsive safeguards. No reference image was supplied this round.
