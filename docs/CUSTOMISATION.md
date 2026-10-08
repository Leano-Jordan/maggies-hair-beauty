# Customisation

## Business
Edit `data/business.js` for the client name, tagline, description, contact details, opening hours, WhatsApp number and verified map destination.

## Services
Edit `data/services.js` for service names, prices and durations. The booking form reads this source dynamically, while the Services page remains editorial content so the visual hierarchy can be tailored per client.

## Booking
The site is intentionally backend-free. The homepage quick-book form and Contact page booking form create a WhatsApp message containing the selected service, preferred date, time window and optional notes.

## Map
Set `business.mapUrl` to a client-approved Google Maps or other map destination. Leave it blank until the address is verified.

## Visual identity
Use `css/variables.css` for colours, type, spacing, radii and shadows. Replace imagery without changing layout code where possible.

## Production truth
Do not publish demo addresses, phone numbers, prices, testimonials, social destinations or stock imagery as verified client facts. Replace them before indexing or client handover.

## Premium proof gates
Edit `data/business.js` to add verified Google rating/count and WhatsApp response time only after client approval. Set `refillOffer` only when refill availability is verified.

Edit `data/testimonials.js` with at least two approved Google reviews containing name, suburb, review text, source and `verified:true` before the social-proof section will render.

Edit `data/portfolio.js` with six approved before/after pairs before the transformations section will render. The current repository intentionally leaves these arrays empty rather than fabricating proof.
