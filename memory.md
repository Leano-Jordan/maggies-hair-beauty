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
Beauty-first editorial salon aesthetic. Warm blush/pink canvas with richer berry/plum contrast and rose primary accent. Feminine, polished, warm and tactile without becoming sugary. Generous whitespace, elegant serif display typography and clean system sans-serif body copy. Photography carries the visual storytelling. Demonstration imagery now intentionally represents Black salon clients to make the intended South African audience and buyer use case immediately legible.

## Design System
Brand tokens live in `css/variables.css`. Typography, buttons, cards, navigation, forms, gallery treatments and layout primitives remain centralized. Both standard `text-size-adjust` and Safari/WebKit fallback are present. Backdrop blur is progressive enhancement only: solid/translucent backgrounds remain the fallback, with standard `backdrop-filter` and a paired WebKit enhancement when supported.

## Important Components
Sticky header with progressive glass treatment, responsive navigation, image-led hero, CTA buttons, service cards/lists, feature list, editorial image section, filterable image gallery, booking form, contact card, floating WhatsApp action, shared footer.

## Customization Points
Buyer-facing data should live in `data/business.js`, `data/services.js`, `data/social.js`, `data/testimonials.js`, and `config/site-config.js`. Brand/theme tokens live in `css/variables.css`. Replaceable creative assets belong in `assets/images/`; demo gallery URLs are deliberately isolated to easy-to-replace `<img>` elements.

## Reference Design Decisions
No external visual reference supplied this round. The implementation direction was strengthened toward a premium editorial salon presentation with stronger image hierarchy and clearer commercial demo positioning.

## Browser Targets
Chrome, Edge, Firefox and Safari desktop; Chrome Android, Safari iOS and Samsung Internet mobile. Core layout uses standard CSS, media queries and native ES modules. Blur is never required for content hierarchy or readability.

## Compatibility Findings
Source-based verification: the hero artwork now uses deterministic fixed heights at desktop/tablet/mobile sizes instead of relying on percentage-height calculation from a `min-height` parent, reducing Safari layout ambiguity. Standard CSS fallbacks remain in place for backdrop effects. Standard and WebKit text sizing declarations are included. UNVERIFIED: live rendering on physical Safari/iOS/Samsung Internet, real-device touch/keyboard testing, and pixel-level visual regression.

## Known Constraints
Business contact details, pricing, testimonials and imagery are demonstration content and require replacement before production. WhatsApp booking is external and requires a real WhatsApp number. Remote demo imagery requires internet access during preview. Homepage currently uses `noindex,nofollow` while demonstration identity remains.

## Completed Improvements
Round 1: persistent memory and commercial visual foundation.
Round 2: substantial beauty-focused visual overhaul with stronger rose/pink hierarchy, blush/berry surfaces, elevated components and responsive safeguards.
Round 3: typography, interaction and responsive polish including mobile navigation and filter semantics.
Round 4: image-led commercial visual upgrade with stock photography, editorial salon imagery, improved hero scale, stronger gallery presentation, lazy loading/alt text, progressive backdrop blur, removal of WebKit-only text sizing dependency, tighter mobile image composition and provenance guidance.
Round 5: demographic visual targeting for the immediate buyer audience, deterministic hero image sizing for Safari resilience, explicit image dimensions to reduce layout shift, demo noindex protection and remote-preview guidance for phone/client sharing.

## Outstanding Issues
Live browser/device verification remains required; replace demonstration business details; replace remote demo images with buyer-approved/licensed assets; review all metadata and structured data for eventual buyer identity; verify external WhatsApp destination; inspect all page renderings after the latest visual upgrade.

## Deferred Issues
Optional CMS, online booking backend, map integration, analytics, payment integration and automated visual regression testing remain intentionally deferred unless they create clear buyer value.

## Commercial Improvements
The template now presents closer to a finished South African salon product during buyer preview. Black stock imagery makes the intended audience visible without pretending the imagery belongs to Maggie's. Remote preview instructions allow a buyer to inspect the site from a phone without exposing the private repository.

## Licensing / Provenance
Demo imagery is referenced from Unsplash and documented in `assets/images/README.md`. Current demo photos include Unsplash stock photography used only to demonstrate visual treatment. Verify current licensing/provenance before redistribution and replace with buyer-approved assets for production. Unsplash API/hotlinking rules should be followed if these URLs remain in a distributed demo.

## Third-Party Dependencies
No package manager dependency is required. JavaScript uses native browser APIs and ES modules. Demo imagery is externally hosted by Unsplash.

## Buyer-Relevant Features
Multi-page salon structure, service menu, image-led hero, visual gallery, gallery filters, contact/booking conversion, WhatsApp prefill, responsive navigation, centralized business data, replaceable imagery, progressive visual enhancement, low deployment complexity and documented remote preview workflow.

## Regression Warnings
Do not remove `data-root` from subpages without updating asset paths. Keep `.booking-link`, booking form IDs, contact IDs and navigation IDs stable unless all consumers are updated. Preserve normal links as fallbacks when JavaScript is unavailable. Keep the pink palette independent of browser-specific effects. Keep mobile navigation breakpoint aligned with its JavaScript resize behavior. Backdrop blur must remain enhancement-only. Keep explicit hero heights aligned with responsive breakpoints.

## Current Scorecard
Evidence-based working assessment from repository inspection. Live/device testing is still outstanding.
- Visual Quality: 97/100
- UX: 92/100
- Functionality: 86/100
- Responsive Quality: 94/100
- Browser Compatibility: 93/100
- Accessibility: 92/100
- Architecture: 90/100
- Code Quality: 90/100
- Performance: 90/100
- Security: 87/100
- SEO: 84/100
- Customizability: 93/100
- Reusability: 94/100
- Transferability: 94/100
- Differentiation: 94/100
- Commercial Readiness: 95/100
- Overall: 93/100

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
Round 5 is the pending repository head at the time of this memory update.

## Last Improvement Round
2026-09-07: Round 5 completed. The visual demo was targeted more clearly at the immediate Black South African salon audience, Safari-sensitive hero sizing was hardened, image dimensions were added, demo indexing was disabled, and remote phone/client preview guidance was added.