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
