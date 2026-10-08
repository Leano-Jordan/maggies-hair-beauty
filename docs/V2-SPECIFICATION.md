# Maggie’s Hair & Beauty — V2 Product Specification

**Status:** Active specification  
**Version:** 2.0  
**Owner:** Mags — Project Director  
**Repository:** `Leano-Jordan/maggies-hair-beauty`  
**Canonical branch:** `main`  
**Source baseline:** V1 reusable commercial website foundation  
**Created:** 2026-10-08

---

## 1. Purpose

V2 is the product-quality evolution of Maggie’s Hair & Beauty from a sound reusable static website foundation into a more convincing, conversion-focused, editorial-quality salon website asset.

The objective is not to add technology for its own sake.

V2 must make the website:

- more visually intentional and premium;
- clearer about services, value, location and booking;
- easier to use on phones and small screens;
- easier to customize for the next salon client;
- stronger in accessibility, performance and failure handling;
- safer to hand over and deploy through GitHub Pages;
- credible as a real business website without inventing real-world claims.

The V1 foundation remains the architectural baseline. V2 improves the product without turning the project into a framework-heavy application.

---

## 2. Product Principles

### 2.1 Product over feature count

A smaller number of excellent experiences is preferable to a larger number of mediocre features.

### 2.2 Mobile is a primary composition

Mobile must be designed deliberately rather than treated as a compressed desktop layout.

### 2.3 Conversion without pressure

The website should make the next action obvious — especially booking — while remaining useful to visitors who are still comparing services.

### 2.4 Real-business credibility

Demo content must look polished but must never imply that fictional business details, testimonials, team identities, reviews or transformations are verified facts.

### 2.5 Progressive enhancement

Core content, navigation, contact information and booking access must remain understandable without JavaScript. JavaScript enhances the experience rather than becoming the only route to essential information.

### 2.6 Reusable foundation

Business-specific information belongs in data/configuration/assets wherever practical. Rebranding should not require rebuilding the site structure.

### 2.7 Lightweight engineering

Remain dependency-light and compatible with GitHub Pages. No backend, database, authentication or third-party booking platform is required for V2.

---

## 3. V1 Baseline

V2 inherits these established foundations:

- HTML5;
- CSS3;
- vanilla JavaScript using ES modules;
- centralized business/service/social data;
- configurable feature flags;
- responsive navigation;
- service catalogue;
- gallery with accessible interaction;
- testimonials/content structures;
- opening hours and contact information;
- location/map support;
- strong calls to action;
- WhatsApp booking via normal deep links;
- semantic accessibility foundations;
- responsive/compressed image strategy;
- minimal third-party resources;
- GitHub Pages compatibility;
- commercial and rebranding documentation.

The original foundation explicitly requires the site to remain suitable for GitHub, further development, client demonstration and eventual sale, while keeping business information replaceable and presentation reusable. See the supplied V1 foundation. fileciteturn0file0L5-L22

---

## 4. V2 Experience Goal

Within the first few seconds, a visitor should be able to answer:

1. What does this business offer?
2. Does the result/service fit what I want?
3. What does it look like?
4. What does it cost or how is pricing presented?
5. Where is it?
6. How do I book?

The interface should guide this naturally through:

**identity → offer → proof/visuals → services → trust/context → location → booking**

The page should feel like an intentionally designed local business website, not a generic salon template.

---

## 5. Information Architecture

### Core pages

- **Home**
- **Services**
- **Gallery**
- **About**
- **Contact**

### Page responsibilities

#### Home
Primary conversion page.

Must establish:
- business identity;
- core offer;
- primary booking action;
- strongest visual impression;
- featured/canonical services;
- concise trust/context signals;
- supporting gallery content;
- location/visit context;
- final booking CTA.

#### Services
Decision-support page.

Must provide:
- service categories;
- service names;
- meaningful descriptions;
- prices where approved;
- optional durations;
- clear booking actions;
- expandable details only where they improve readability.

#### Gallery
Visual proof and inspiration.

Must provide:
- intentional image hierarchy;
- category/filter interaction where useful;
- accessible lightbox where used;
- useful alt text;
- graceful missing-image behaviour;
- no implication that demo imagery represents verified client work.

#### About
Brand and trust page.

Must communicate:
- business approach;
- service philosophy;
- local identity;
- useful differentiators;
- authentic imagery/content when available.

Avoid invented staff profiles, qualifications, awards or claims.

#### Contact
Conversion and practical-information page.

Must provide:
- contact channels;
- opening hours;
- location;
- map/link where configured;
- booking funnel;
- clear fallback contact options;
- form labels and useful validation where forms exist.

---

## 6. Booking Specification

V2 keeps the backend-free booking model.

### Required behaviour

The booking path must support:

- service selection;
- optional preferred date;
- preferred time window;
- clear progression from browsing to booking;
- service preselection when arriving from a service-specific CTA;
- WhatsApp handoff using a pre-filled message;
- explicit distinction between the normal booking funnel and direct WhatsApp links.

### Booking rules

- `.booking-link` remains the canonical booking CTA contract.
- Service-specific links may preserve their Contact-page destination while carrying service state through `?service=`.
- Direct WhatsApp behaviour must be opt-in rather than accidental.
- No WhatsApp API or backend dependency in V2.
- Booking must remain understandable when JavaScript is unavailable.

### Conversion principle

Every major page should expose an obvious booking path, but the design must not turn every component into a competing CTA.

---

## 7. Visual/UI Specification

### 7.1 Visual direction

The design language should be:

- elegant;
- modern;
- warm and locally grounded;
- editorial rather than template-like;
- conversion-focused;
- restrained rather than ornament-heavy.

### 7.2 Hierarchy

Prioritize:

1. headline/offer clarity;
2. primary CTA;
3. strong photography;
4. service discovery;
5. supporting information;
6. secondary actions.

### 7.3 Design system

Centralize tokens for:

- colour;
- typography;
- spacing;
- radius;
- shadows;
- container width;
- responsive breakpoints where appropriate.

Shared components should cover recurring patterns such as:

- navigation;
- heroes;
- buttons;
- service cards;
- gallery cards;
- testimonials/content proof;
- contact cards;
- booking CTAs;
- footer elements.

### 7.4 Imagery

Photography must support composition rather than merely fill boxes.

Requirements:
- deliberate aspect ratios;
- deliberate object positioning;
- responsive cropping;
- critical hero media prioritized;
- non-critical below-the-fold imagery lazy-loaded where appropriate;
- explicit dimensions when practical to reduce layout shift;
- replaceable assets without layout-code rewrites.

---

## 8. Responsive Specification

### Target widths

The V2 review baseline must include:

- **320px**
- **390px**
- **768px**
- **1440px**

The interface must also remain usable between and beyond these widths.

### Mobile requirements

Check specifically:

- navigation;
- menu open/close behaviour;
- tap target size;
- typography;
- image crop;
- horizontal overflow;
- forms;
- sticky/fixed actions;
- CTA visibility;
- content ordering;
- focus visibility;
- long service/business names.

Fixed or sticky elements must not obscure content or focused controls.

---

## 9. Accessibility Specification

Minimum V2 standard:

- semantic HTML;
- correct heading hierarchy;
- keyboard navigation;
- visible focus states;
- accessible buttons/links/controls;
- form labels;
- useful alt text;
- adequate colour contrast;
- no colour-only communication;
- accessible disclosure/lightbox behaviour;
- reduced-motion consideration;
- sensible focus management for overlays;
- zoom-safe layouts.

Accessibility is part of product quality, not a post-release patch.

---

## 10. Performance Specification

Priorities:

- fast mobile first render;
- optimized image payloads;
- WebP/AVIF when appropriate;
- responsive image sizing;
- lazy loading below the fold;
- minimal JavaScript;
- minimal third-party requests;
- predictable layout;
- no unnecessary animation or video;
- resilient behaviour on slow connections.

Critical above-the-fold media should be intentionally prioritized rather than loaded with the same strategy as secondary content.

---

## 11. SEO Specification

For production-ready deployments, provide:

- unique page titles;
- useful meta descriptions;
- canonical URLs;
- Open Graph metadata;
- semantic headings;
- sensible internal linking;
- `robots.txt`;
- `sitemap.xml`;
- appropriate LocalBusiness/BeautySalon structured data using factual information only.

The configured Maggie’s site may be indexable once the supplied production identity is confirmed; unsupported proof claims remain gated until verified.

---

## 12. Security & Privacy

V2 must maintain:

- no secrets or API keys in frontend code;
- no unnecessary third-party scripts;
- no unsafe dynamic HTML where avoidable;
- sensible form validation;
- minimal personal-data collection;
- external-service links treated as external dependencies;
- no assumption that frontend-only controls provide true security.

---

## 13. Reusability & Customization

Business-specific content should remain separable from presentation.

Primary customization surfaces:

- `data/business.js`
- `data/services.js`
- `data/testimonials.js`
- `data/social.js`
- `config/site-config.js`
- `css/variables.css`
- `assets/images/`
- page-specific content

Rebranding must be achievable primarily through:

- business identity;
- services/pricing;
- imagery;
- testimonials/proof;
- social links;
- WhatsApp;
- colours;
- typography;
- SEO metadata.

The next client should be cheaper and faster to produce without causing the current site to look like a clone.

---

## 14. Reliability & Failure Paths

V2 must explicitly handle:

- JavaScript disabled;
- missing images;
- slow network;
- empty content;
- malformed content;
- long business names;
- long service names;
- unavailable social destinations;
- missing optional features;
- broken external destination links;
- map/booking features left unconfigured.

Failure handling should degrade gracefully rather than leave blank, broken or misleading UI.

---

## 15. Architecture Constraints

Preserve the existing static architecture:

- HTML5;
- CSS3;
- vanilla ES-module JavaScript;
- local/static assets where practical;
- no framework introduction without a documented business or technical requirement.

Do not introduce:
- a backend;
- a database;
- authentication;
- a build pipeline;
- a CMS;
- an external booking API;

unless a future specification explicitly authorizes the change.

---

## 16. GitHub Pages Compatibility

The website must remain deployable as a static GitHub Pages site.

Check:

- relative paths;
- page-to-page navigation;
- asset paths;
- module paths;
- root/subpath deployment assumptions;
- 404 behaviour;
- external links;
- no server-side routing dependency.

---

## 17. Testing & Evidence Model

Each V2 review must distinguish:

### Source verified
Repository inspection confirms the implementation exists and contracts are internally consistent.

### Execution verified
Available automated/static checks run successfully.

### Browser verified
The actual rendered interface has been inspected and interacted with in a browser.

### Device verified
Real mobile/desktop device testing has been completed.

### Client verified
Production client content and requirements have been accepted.

A high score cannot substitute for missing browser/device evidence.

---

## 18. V2 Acceptance Gates

V2 is not complete merely because the feature list exists.

### Functional gate

Verify:

- navigation;
- buttons;
- booking;
- WhatsApp handoff;
- phone/email links;
- social links;
- gallery/filter/lightbox behaviour;
- forms;
- map/location;
- footer/external links;
- service-to-booking synchronization.

### Responsive gate

Verify at:

- 320px;
- 390px;
- 768px;
- 1440px.

Check for:

- overflow;
- clipping;
- unreadable text;
- broken crops;
- broken sticky UI;
- inaccessible controls.

### Accessibility gate

Verify:

- keyboard traversal;
- focus;
- contrast;
- zoom;
- reduced motion;
- labels;
- semantic structure;
- overlay/disclosure behaviour.

### Failure gate

Verify:

- JavaScript disabled;
- missing image;
- slow/failed image;
- empty optional data;
- long names/content;
- missing optional configuration.

### Commercial gate

Verify:

- clear offer;
- desirable but truthful presentation;
- obvious booking;
- credible location/contact information;
- production-content replacement path;
- clean handover documentation.

---

## 19. V2 Non-Goals

The following are intentionally outside the V2 scope unless separately approved:

- online payment processing;
- customer accounts;
- appointment database;
- staff scheduling;
- inventory;
- CRM;
- custom booking backend;
- WhatsApp API automation;
- fabricated third-party review feeds;
- fabricated staff identities;
- fabricated before/after client transformations;
- unnecessary framework migration.

The purpose is to improve the commercial website asset without accidentally turning a static template foundation into a fragile application.

---

## 20. Implementation Priority

When trade-offs are required, use this priority order:

1. broken customer/conversion journeys;
2. serious responsive/accessibility defects;
3. weak information hierarchy and CTA clarity;
4. visual quality and composition;
5. reliability and failure behaviour;
6. performance;
7. maintainability/reusability;
8. documentation/polish.

---

## 21. Change Control

Any substantial V2 deviation should be documented with:

- problem being solved;
- evidence;
- affected contracts;
- expected user/business benefit;
- regression risks;
- verification performed;
- remaining verification gaps.

Small coherent commits are preferred. Work lands directly on `main` under the repository's single-branch policy.

---

## 22. Relationship to Existing Director Contracts

This document defines the **product requirements for V2**.

The repository's:

- `AGENTS.md`;
- `MAGS_DIRECTOR_SYSTEM.md`;
- `ROSCORE_PROJECT_MANIFEST.md`;
- `memory.md`;
- `docs/BRANCH-POLICY.md`;

remain the governing execution, project-state and repository-process contracts.

Where implementation detail is not specified here, use current repository evidence and the existing director contracts rather than importing assumptions from other projects.

---

## 23. Definition of Done

Maggie's V2 is considered materially complete when:

- the five core pages deliver a coherent conversion story;
- services and booking remain synchronized;
- the booking journey is obvious and usable;
- responsive compositions hold at the review widths;
- accessibility fundamentals pass;
- failure paths degrade gracefully;
- imagery supports the design and loads predictably;
- the site remains lightweight and GitHub Pages compatible;
- demo content is clearly replaceable and not presented as verified fact;
- customization remains data/configuration/asset-led;
- documentation leaves the next director/developer able to continue without reconstructing project knowledge from chat history;
- browser/device evidence is explicitly recorded, including any unavailable checks.

---

## 24. Source Traceability

This V2 specification is an evolution of the supplied V1 foundation. The V1 source establishes the reusable commercial purpose, lightweight technology choice, progressive enhancement requirement, five-page information architecture, feature baseline, design-system structure, accessibility minimums, performance/SEO goals, security rules, documentation requirements and commercial-readiness tests. fileciteturn0file0L35-L70 fileciteturn0file0L71-L113 fileciteturn0file0L115-L154 fileciteturn0file0L156-L187

V2 adds stronger product-level acceptance criteria, responsive review widths, evidence discipline, booking-flow rules, failure-path requirements and explicit non-goals while preserving the original lightweight foundation.


---

# V2 Premium Editorial Upgrade — 2026-10-08

## A. Visual system
Replace the generic black/white treatment with a neutral premium system:
- Background: #F9F6F3
- Primary text: #1A1A1A
- Secondary text: #8A7F7A
- Accent/lines/buttons: #D6C7B8
- Heading family: Fraunces (or approved equivalent serif)
- Body family: Inter (or approved equivalent grotesk)
- Deliberate weight contrast between headings, body, metadata and CTAs.

## B. Hero composition
Use an editorial split: approximately 60% copy / 40% tall 4:5 image; headline + supporting copy; Check availability CTA; secondary gallery/transformations CTA; trust strip beneath the hero copy. Trust figures are proof content and may only be shown after verification.

## C. Signature Rituals
Primary featured set:
1. Lived-In Colour Ritual — balayage + gloss + bond — from R1,450
2. Cloud Curl + Signature Cut — consultation + cut + styling lesson — from R850
3. Glass Skin Facial — K-Beauty facial — R750
4. Scalp Reset + Blowout — R650

Do not use low-anchor demo prices such as R350/R450/R320 as the primary featured-price architecture. Where stylist tiers are used, show Junior / Stylist / Master Maggie beneath the relevant ritual. Tier values remain configurable and require client approval.

## D. Imagery
Final image slots: Hero portrait; Hair lived-in cut; Beauty facial with brown skin/beige towel; Nails with diverse hands and neutral nails on linen. Use beige linen/light wood, no black cape, no pink-wall styling, and a consistent warm-neutral grade. Stock/reference imagery must never be labelled or implied to be verified client transformation work.

## E. Approach
Sticky left title: Professional care without the cold, clinical feeling. Right stacked cards numbered 01/02/03, with restrained scroll reveal/pin behaviour.

## F. Social proof
Production proof consists of two real Google reviews with approved name + suburb, a six-slot before/after grid using consistent crop/light, and a product shelf saying We use + offer refills only if the salon actually offers refills. Until supplied, these are content gates, not fabricated proof.

## G. Concierge booking
Use a WhatsApp deep link with: Hi Maggie's, I'd like [Service] on [Date] at [Time]. Add Usually replies in 12 mins only after verification. Keep the existing backend-free architecture.

## H. Motion contract
Use GSAP + ScrollTrigger + Lenis as progressive enhancement.
1. Text mask reveal — clip-path inset to visible, 1.0s, power3.out.
2. Fade-up stagger — y 24 / autoAlpha 0 to visible, stagger 0.08s, trigger around top 85%.
3. Image clip reveal — bottom-up clip with restrained scale 1.08.
4. Parallax — yPercent -30, scrub 1, ease none.
5. Hover — card y -4px; image scale 1.05 over 0.4s; WhatsApp soft pulse every 4s.
No bounce, rotation, spin, percentage loaders or excessive motion. Lenis target lerp: 0.08. Reduced-motion users retain native/low-motion behaviour.

## I. Stale-content guard
Before client handover audit for demo contact details, fake ratings/reviews, demo testimonials, low-anchor placeholder pricing, stock imagery presented as client work, invented before/after transformations, fake response-time claims and unverified product/refill claims. Documentation may describe demo/reference status, but customer-facing pages must not expose stale labels such as Demo content only.

## J. Implementation order
1. Images and pricing
2. Visual system
3. Concierge booking
4. Lenis
5. GSAP reveals
6. Cross-page regression audit
7. Browser/device verification at 320, 390, 768 and 1440px

## K. Evidence gate
This upgrade is source-verified. Browser rendering, physical-device behaviour and Lighthouse/Core Web Vitals require an available browser/screenshot test path. Do not mark those gates passed without evidence.
