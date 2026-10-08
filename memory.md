# Maggie’s Hair & Beauty

A reusable, progressively enhanced static commercial website foundation for salons, barbers, beauty studios, spas and nail businesses.

## What is included

- Five-page salon experience: Home, Services, Gallery, About and Contact
- Responsive navigation with keyboard and Escape handling
- Centralized business, service and social data
- WhatsApp-first booking flow with pre-filled messages
- Service filters, FAQ disclosures and image-led editorial layouts
- Replaceable image area with provenance guidance
- Accessibility, browser-support and commercial handover documentation
- Dependency-light HTML5, CSS3 and vanilla ES-module JavaScript

## Customize first

1. `data/business.js` — name, contact details, hours and booking message
2. `data/services.js` — service names, prices and durations
3. `data/social.js` — social destinations
4. `css/variables.css` — core brand/design tokens
5. `assets/images/` — production photography and creative assets
6. Page HTML — business-specific copy and section selection

## Run locally

Because the site uses ES modules, use a local web server for the most reliable development experience. VS Code Live Server is suitable. A deployed static host works without a backend or build step.

## Browser targets

Chrome, Edge, Firefox and Safari on desktop; Chrome Android, Safari iOS and Samsung Internet on mobile. Physical-device verification is still required before a production release.

## Commercialization notes

Maggie’s is fictional demonstration content. Replace business information, prices, testimonials, imagery and any other business-specific material before client delivery. Demo pages remain `noindex,nofollow` until the production identity and SEO metadata are ready.

Review `commercial/` and `docs/` before handover, especially deployment, rebranding, browser support and image licensing guidance.
## Mags V2 UX Upgrade — 2026-10-08
- Source: repository Leano-Jordan/maggies-hair-beauty, branch mags-v2-ux-premium, based on main.
- Implemented premium warm-neutral visual tokens in css/variables.css.
- Added homepage quick-book funnel in index.html.
- Upgraded booking flow to service + date + preferred time window and service preselection via ?service=.
- Added service-specific booking links and native expandable service details on pages/services.html.
- Added progressive mobile action bar for WhatsApp booking and configurable location.
- Added configurable business.mapUrl and enabled map/location support.
- Improved media failure handling and image loading metadata for key hero imagery.
- Preserved static HTML/CSS/ES-module architecture; no backend or third-party booking dependency added.
- Verified source-level JavaScript syntax using parser compilation and verified key UX contracts/counts.
- Browser/device rendering remains unverified in this execution; physical-device testing is still required before production release.
- Intentionally not implemented with fake data: Google review feed, real team profiles and genuine before/after client transformations require verified client-approved sources/assets.

## Mags V3 Editorial UI Audit — 2026-10-08
- Audited the main branch after the V2 / luxury UI iterations and found accumulated visual overrides, excessive card/pill treatment, placeholder-heavy sections and inconsistent conversion flow.
- Replaced layered visual overrides with one warm-neutral editorial system across variables, base, layout, components, pages, responsive and accessibility styles.
- Simplified the homepage into a clear conversion story: hero → service categories → featured canonical services → approach → gallery → visit/booking → final CTA.
- Removed homepage placeholder review UI, stock before/after transformation sliders, specialist placeholders and invented package concepts that weakened credibility and made the page feel like a template.
- Removed the homepage remote MP4 hero dependency and switched to a high-priority still image for a lighter, more predictable above-the-fold experience.
- Fixed booking CTA behaviour so standard `.booking-link` elements open the contact booking funnel; direct WhatsApp remains explicitly opt-in through `data-direct-whatsapp="true"`.
- Fixed service-specific booking links to preserve their original contact-page destination while adding `?service=` for canonical service preselection.
- Aligned featured Services cards with `data/services.js` so displayed booking services and booking options cannot silently diverge.
- Made the About hero photography-led and prioritized its hero media; Gallery hero media was also prioritized.
- Tightened controls, borders, spacing, typography, mobile navigation, focus treatment and reduced-motion styling to match the new visual direction.
- Source-level regression checks confirmed: only `main` exists, homepage has no `<video>`, hero image class is present, booking funnel and service preselection code are present, and core page style contracts remain available.
- Browser/live/device verification was unavailable in this execution. This round is source-verified, not browser-verified or production-release verified.
- Next evidence gate: render and interact at 320px, 390px, 768px and 1440px; test mobile navigation, booking flow, service preselection, gallery filters/lightbox, keyboard focus and image failure behaviour.

## Mags V4 Visual Quality Sweep — 2026-10-08
- Attempted live visual inspection of the deployed GitHub Pages site using a screenshot-capable browser fetch at 390x844.
- Live visual capture was unavailable in this execution; therefore no claim of pixel-level browser verification is made.
- Performed a source-level visual hardening pass instead, focused on hero image layering, overlay z-index, image positioning and content-card stacking.
- Confirmed the redesigned homepage has no remote video hero, uses a dedicated hero image contract, and retains the mobile navigation/action-bar system.
- The next visual gate remains real rendered screenshots at 320x844, 390x844, 768x1024 and 1440px widths once browser/screenshot access is available.


## Mags V5 Performance & SEO Hardening — 2026-10-08
- Audited the current main branch against the V1 foundation and active V2/Mags rules.
- Added page-level canonical URLs and Open Graph/Twitter metadata for Home, Services, Gallery, About and Contact.
- Preserved `noindex,nofollow` deliberately because the repository still contains fictional/demo business information; this is an SEO safety gate, not an SEO defect.
- Added root `robots.txt` with an explicit crawl block for the demo deployment. A production release must replace this with an indexable robots policy and verified sitemap.
- Added responsive `srcset` and `sizes` attributes to Pexels-hosted imagery across core pages, while retaining explicit dimensions, lazy loading for secondary media and high priority for hero media.
- Added Pexels preconnect on all core pages to reduce connection setup cost for critical imagery.
- Source verification passed for canonical metadata, social metadata, demo index gate, responsive image attributes and image-origin preconnect across all five core pages.
- Browser/Lighthouse/device verification remains outstanding; this pass is source-verified only.
- Production SEO gate remains: replace demo business/contact/pricing/content, enable indexing, add verified LocalBusiness/BeautySalon structured data, publish sitemap.xml, then run rendered Lighthouse/Core Web Vitals and search-indexing checks.


## Mags V6 Premium Client Conversion + SEO — 2026-10-08
- Supplied client details integrated: client name Mmabatho Moagi; business location Akasia, Pretoria North; booking/phone number +27 82 076 2001.
- Reworked homepage booking interaction into a concierge-style WhatsApp flow: refresh goal + availability + direct availability CTA.
- Replaced budget-led homepage featured services with premium Signature Rituals: Lived-In Colour Ritual, Cloud Curl + Cut, Glass Skin Facial and Scalp Reset.
- Added service add-ons and stylist tier presentation; premium pricing is a commercial positioning proposal and should be confirmed with the client before final publishing.
- Updated services data contract to include descriptions, add-ons and optional stylist tiers.
- Updated Contact page with client location, phone, WhatsApp-first availability and answer-focused FAQs.
- Added FAQPage structured data for balayage pricing and glass-skin facial.
- Added BeautySalon structured data on Home using the supplied location/phone without inventing a street address.
- Enabled indexing, opened robots.txt and added sitemap.xml for the GitHub Pages deployment.
- Removed stale demo contact text and preview labels from customer-facing HTML while keeping portfolio honesty: stock/editorial imagery is described as a lookbook/reference rather than falsely presented as client work.
- Responsive image optimization remains active across core pages with srcset/sizes, intrinsic dimensions where practical, lazy loading for secondary images and prioritized hero media.
- Source-level regression checks: all five core pages indexable, canonicalized and OG-enabled; no malformed closing tags; all Pexels image elements in core pages have responsive sources; stale demo phone/address/email strings removed.
- Live browser inspection through this environment was not independently available; user reports the GitHub Pages deployment is updating normally. Production visual/device verification remains a separate evidence gate.
- Do not publish unverified review counts, certifications, exact opening hours, Google Business Profile claims or client before/after imagery until supplied/connected.

## Mags V7 Browser/Mobile/Defect/SEO/Performance Audit — 2026-10-08
- Attempted live browser inspection for the deployed GitHub Pages site, but connected browser/screenshot retrieval was unavailable in this execution; direct live-page retrieval was also unavailable. Browser/device evidence is therefore not claimed.
- Source audit of main found and fixed a high-severity booking-path defect: root-level homepage booking and mobile-action links could resolve to `contact.html` instead of `pages/contact.html`. A shared `getBookingPath()` contract now preserves correct root and subpage routing.
- Fixed WhatsApp data divergence between `data/business.js`, `data/social.js` and the Contact no-JavaScript fallback.
- Fixed service-price drift in `pages/services.html` so Brow Shape & Tint, Gel Manicure and Luxury Pedicure match `data/services.js`, the authoritative service source.
- Hardened gallery controls with explicit button types and added async image decoding for lazy gallery images.
- SEO hardening confirmed unique title/description/canonical/OG/Twitter metadata across all five core pages; added OG/Twitter image metadata using each page's existing hero image; robots.txt and sitemap.xml are indexable and contain all five core URLs.
- Performance source audit confirmed responsive image sources, lazy loading of secondary media, prioritized hero images, Pexels preconnect and tighter homepage gallery `sizes` hints. Shared CSS is about 38.7 KB and shared JS about 14.7 KB before transfer compression/caching; Lighthouse/Core Web Vitals were not available.
- Final source regression found no critical/high defects, all five core pages have one H1, complete basic SEO metadata, image alt coverage, valid button types, safe external-link rel attributes and resolvable internal HTML links.
- Branch audit confirms only `main` remains.
- Release evidence status: source verified; execution/static regression verified; browser verified NO; physical-device verified NO; client verified NO. Production release remains gated on rendered browser/device testing and Lighthouse/Core Web Vitals once those capabilities are available.



## Mags V8 Motion/Branch Hardening — 2026-10-08
- Audited current `main` after the image-provenance refresh and premium-proof work.
- Found and fixed duplicate premium-motion loading: homepage statically loaded GSAP/ScrollTrigger/Lenis while `main.js` also loaded a second version, and `main.js` contained a second motion implementation alongside `js/motion.js`.
- Removed the duplicate motion engine from `main.js` and removed the redundant homepage CDN tags. Premium motion is now governed by the existing `enablePremiumMotion` configuration and its dedicated `js/motion.js` progressive-enhancement layer.
- Synced branch documentation with the verified repository state: `main` is currently the only branch.
- Remaining evidence gate: live browser/device/Lighthouse verification is still required; this audit is source-verified only.

## Mags V8 Premium Editorial Conversion — 2026-10-08
- Re-audited current main for stale business/demo content and implementation drift.
- Current configured identity remains Maggie's Hair & Beauty / Mmabatho Moagi / Akasia, Pretoria North / +27 82 076 2001.
- Premium visual system is now warm-neutral: #F9F6F3 background, #1A1A1A primary text, #8A7F7A secondary text, #D6C7B8 accent, Fraunces headings and Inter body.
- Homepage uses an editorial split hero, two clear CTAs, proof-gated trust signals and four Signature Rituals rather than a form-first hero.
- Featured ritual hierarchy is Lived-In Colour Ritual from R1,450; Cloud Curl + Signature Cut from R850; Glass Skin Facial R750; Scalp Reset + Blowout R650.
- Lower-price services remain in the complete booking catalogue but are not used as the primary featured anchor.
- Proof claims are verification-gated: Google rating/count, response-time claim, real Google reviews, six before/after pairs and refill merchandising render only when approved data exists.
- Editorial imagery is presentation material only; gallery labels no longer imply that stock images are completed client transformations.
- `data/portfolio.js` is the approved transformation source and intentionally starts empty; six approved pairs are required before that section renders.
- Premium motion is consolidated in `js/motion.js` using GSAP + ScrollTrigger + Lenis with lerp 0.08 and only the approved five motion patterns.
- Concierge booking now emits the requested compact WhatsApp message format: Hi Maggie's, I'd like [Service] on [Date] at [Time]. Optional notes are appended only when supplied.
- Restored the full Nails booking catalogue and kept service-specific booking state synchronized with service data.
- Updated V2 specification, README, customisation guidance and image provenance documentation; stale project docs were corrected to distinguish current configured identity from unsupported proof.
- Current branch truth: only `main`.
- Current evidence state: source verified and static regression verified; rendered browser/device/Lighthouse evidence remains a separate gate.



## Mags V9 Mobile/Image Hardening — 2026-10-08
- Browser verification is reported green; mobile has a whole-page horizontal-scroll defect.
- Hardened global mobile containment with clipped horizontal overflow and explicit `min-width:0` on major grid children to prevent intrinsic-content/grid tracks from widening the viewport.
- Audited the image layer: production pages were still sourcing editorial imagery from Pexels at runtime. Added an automated GitHub Pages-compatible materialization pipeline that downloads the existing approved editorial set into `assets/images/editorial/`, creates responsive WebP sizes, and rewrites page image references to local repo assets.
- The materialization workflow is currently running; final local-asset verification remains pending until the workflow commits its generated assets.
- Image composition contract remains: explicit dimensions, responsive `srcset`/sizes, lazy loading below the fold, and deliberate `object-fit:cover`/object-position by composition.


## Mags V10 Defect Hunt + Hardening — 2026-10-08
- Defect-hunt scope: page navigation/CTA paths, booking and service preselection, mobile navigation/sticky actions, gallery filters/lightbox/failure states, malformed/empty form data, responsive edges, keyboard/focus, JavaScript-disabled behavior and shared-component consistency.
- Fixed booking-path routing so booking CTAs on Contact resolve to #booking, while other pages resolve to contact.html#booking with correct root/subpath handling.
- Fixed service-specific booking links to preserve ?service= and land directly on #booking.
- Fixed no-JavaScript booking fallbacks across core pages; static booking CTAs remain actionable while JS enhances them to WhatsApp.
- Hardened mobile action spacing so body padding exists only when the sticky bar is actually injected; added mobile anchor scroll padding and narrowed-screen brand wrapping.
- Hardened gallery failure behavior with empty-filter feedback, dynamic media fallback binding and early broken-image detection; accessible lightbox close/focus recovery remains intact.
- Hardened malformed service data so invalid groups/services no longer abort booking initialization; unavailable services produce a disabled, explicit empty state.
- Isolated optional social-proof data loading from core business/booking initialization so optional failures cannot break the booking funnel.
- Normalized shared footer data bindings and identity treatment across core pages; About is now wired to the same business-data contract as the other pages.
- Respected the enableMap feature flag in the mobile Location action and provide a phone fallback when WhatsApp is unavailable.
- Hardened mobile navigation touch target sizing.
- Static regression after the defect pass: all core HTML local links/anchors resolve; main.js parses; all booking/service CTAs have no-JS booking destinations; data-book-service values all exist in the service data source; no empty hash routes remain.
- Workflow/deployment state: GitHub Pages build succeeded for the current head; CodeQL was running during the final sweep. Browser/device/Lighthouse evidence is not claimed from this environment.
- Separate refactor pass centralized business-name, booking-message and WhatsApp URL construction to reduce drift without changing the booking contract.
