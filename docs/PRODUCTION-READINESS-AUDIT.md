# Maggie's Hair & Beauty — production-readiness audit

**Audit date:** 2026-10-20  
**Scope:** Repository source inspection of the current `main` branch. The owner reports that all pages render on mobile and desktop; rendering is treated as confirmed by the owner, not independently re-tested here.

## Executive decision

**Status: strong demo foundation; not yet production-approved.** The project has a clear visual system, five-page structure, responsive layouts, keyboard-aware navigation, service-specific WhatsApp booking, gallery filtering/lightbox, metadata, and explicit proof-data gates. The remaining risks are primarily content integrity, commercial truth, privacy/ownership, accessibility verification, and release operations—not the absence of responsive pages.

## Findings

### P0 — Confirm before public commercial use

1. **Business identity, contact and consent.** `data/business.js` contains a named client field, phone/WhatsApp number, and a broad location. Confirm the business owner authorised public use of the name, number, brand and details. Do not publish private personal contact information without explicit approval. Confirm that the displayed map pin represents the actual customer-facing location; current URL searches the general Akasia/Pretoria North area rather than a verified street address.
2. **Price presentation aligned in this audit branch; owner approval still required.** Cloud Curl and Scalp Reset now display `from R450` where the configured Junior Stylist tier is R450, while tier prices remain visible. This resolves the obvious headline/minimum mismatch in the reviewed homepage, services page and service data. It does not prove these prices are commercially correct: obtain owner sign-off for every service, tier, duration, inclusion and add-on before launch.
3. **Image rights and authenticity.** Gallery/hero imagery appears editorial/stock-oriented based on filenames and alt text. Confirm each asset's licence and intended use. Label illustrative editorial images as inspiration; do not present stock imagery as the salon's own client work, transformations or results.
4. **Production claims.** Keep Google ratings/review counts, testimonials, response-time promises, refill offers, opening hours, and treatment/health claims disabled or absent unless supported by owner-approved evidence. Never fabricate reviews or imply a booking is confirmed before the business confirms it.

### P1 — Fix before handover

5. **Real map and opening hours.** Replace the broad-area map query with the verified public address/pin. Populate approved hours or keep the current explicit WhatsApp-confirmation message.
6. **Booking workflow.** Test the full form on iOS Safari, Android Chrome and desktop browsers: service preselection via `?service=`, date minimum in local time, invalid/past date handling, WhatsApp deep link, URL encoding of punctuation/accents/newlines, and direct fallback if JavaScript or WhatsApp is unavailable. Confirm the business receives the expected message and that the form never claims to reserve a slot.
7. **Price consistency.** Review all tiers and "from" prices in one owner-approved source of truth. Ensure all displayed prices and booking messages use the same values.
8. **Social destinations.** `data/social.js` has empty Instagram/Facebook/TikTok URLs while social-link functionality is enabled. Verify that empty links are hidden cleanly and no dead or placeholder links remain.
9. **Structured data and metadata.** The homepage embeds `BeautySalon` JSON-LD with business details. Keep it aligned with visible, verified page content. Validate JSON-LD and canonical/OG URLs after deployment. Do not add self-serving review markup for the salon; Google excludes local-business review rich results for self-controlled reviews. See [Google's Local Business guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business) and [review snippet guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).
10. **Accessibility.** Existing skip link, focus-visible styles, reduced-motion handling, semantic form labels and live status regions are good foundations. Verify WCAG 2.2 AA in practice: keyboard-only operation, focus visibility/not obscured by sticky actions, contrast, 200% zoom/reflow, dialog focus/escape behavior, menu state for assistive tech, meaningful alt text, and screen-reader form errors. Do not claim conformance without testing. Reference: [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
11. **Performance.** Check actual image bytes, font loading, layout shifts, LCP image priority, below-the-fold lazy loading, and Core Web Vitals on a deployed build. Confirm the chosen external font is non-blocking enough and that image formats/fallbacks work.
12. **SEO / discovery.** Verify sitemap/robots behavior for GitHub Pages, canonical URL, unique title/description per page, social preview images, Search Console ownership, local business profile consistency, and indexing. Metadata alone does not guarantee ranking.
13. **Security/privacy.** No backend is required for the current static WhatsApp booking flow, which limits data collection. Review third-party assets, external link `rel` attributes, contact details exposed in source, and whether form notes encourage users to send sensitive information. Add a short privacy notice explaining that booking details are transferred to WhatsApp and handled by the salon.
14. **Commercial handover.** Provide the buyer with asset licences, approved copy/pricing, domain/hosting ownership, update instructions, backups, support scope, handover checklist and explicit exclusions. Ensure the client controls their domain, business profiles and contact channels.

## Release gate checklist

- [ ] Owner has approved brand, public contact details, address/map pin and all copy.
- [ ] Every price, tier, duration, inclusion and add-on is signed off.
- [ ] Every image has documented licence/source and is not misrepresented as client work.
- [ ] No placeholder social links, unsupported testimonials, ratings or operational claims.
- [ ] All five routes, navigation, service links, booking form, gallery filters/lightbox, phone/WhatsApp/map links work on target devices.
- [ ] Keyboard, screen-reader, contrast, zoom/reflow and reduced-motion checks completed.
- [ ] Lighthouse/Core Web Vitals and broken-resource checks run on deployed URLs.
- [ ] Metadata, canonical URLs, JSON-LD, sitemap/robots and social previews validated.
- [ ] Privacy notice, client ownership, support terms, backup and handover are complete.
- [ ] Final client acceptance recorded; production launch is not inferred from a successful local render.

## Recommended execution order

1. Resolve owner approval, price conflicts, image provenance and the real location.
2. Run a repeatable automated link/asset/HTML/metadata check.
3. Complete real-browser booking and accessibility tests.
4. Measure production performance and validate SEO.
5. Ship only after the release gate is signed off.

## Limits of this audit

This is a source-based review of selected repository files. It is not a legal certification, penetration test, full WCAG conformance audit, independent visual regression run, or verified live deployment test. Responsive rendering is acknowledged based on the project owner's confirmation.