# Demo image guidance

The visual demo currently uses remote Unsplash stock photography to show buyers what the template looks like with real imagery.

## Replacement points
- `index.html` hero image
- `index.html` salon story image
- `index.html` gallery preview images
- `pages/gallery.html` gallery images

## Important
These are demonstration assets, not Maggie-specific client photography. Replace them before a production deployment with imagery the buyer has permission to use.

The implementation deliberately keeps images in ordinary `<img>` elements with descriptive `alt` text, `loading="lazy"` where appropriate, and `object-fit: cover`, so replacing an image does not require redesigning the layout.

## Sources used for the demo
- Unsplash — https://unsplash.com/
- Images are referenced through `images.unsplash.com` transformation URLs.

Review the current Unsplash license and each image's provenance before redistributing the demo imagery as part of a commercial package. The buyer-facing handoff should replace these with licensed client assets where possible.