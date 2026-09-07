# Demo image guidance

The visual demo uses remote Unsplash stock photography to show buyers what the template looks like with real imagery and with Black salon clients represented in the primary visual storytelling.

## Replacement points
- `index.html` hero image
- `index.html` salon story image
- `index.html` gallery preview images
- `pages/gallery.html` gallery images

## Important
These are demonstration assets, not Maggie-specific client photography. Replace them before a production deployment with imagery the buyer has permission to use.

The implementation deliberately keeps images in ordinary `<img>` elements with descriptive `alt` text, explicit dimensions where practical, `loading="lazy"` where appropriate, and `object-fit: cover`, so replacing an image does not require redesigning the layout.

## Current demo sources
- Unsplash — https://unsplash.com/
- Black-woman portrait examples: `photo-1531123897727-8f129e1688ce`, `photo-1589156191108-c762ff4b96ab`, `photo-1611432580340-af48bd7549ed`
- Existing salon / nail examples remain from Unsplash.

Unsplash currently documents API hotlinking and attribution guidance. Review the current license/provenance for each image before redistributing the demo imagery as part of a commercial package. The buyer-facing handoff should replace these with buyer-approved/licensed assets where possible.