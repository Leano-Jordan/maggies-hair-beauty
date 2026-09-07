# Browser Support

## Target browsers
- Chrome desktop
- Edge desktop
- Firefox desktop
- Safari desktop
- Chrome Android
- Safari iOS
- Samsung Internet

## Implementation policy
Core layout, typography, navigation, forms, gallery filtering and content must not depend on browser-specific CSS.

`text-size-adjust: 100%` is used as the standards-oriented declaration. No WebKit-only text sizing rule is required for the site to remain readable.

Backdrop blur is progressive enhancement. The header and hero card retain a readable translucent/opaque background if `backdrop-filter` is unavailable. A paired `-webkit-backdrop-filter` rule is present only as an enhancement for WebKit browsers.

## Verification status
Source inspection: VERIFIED.
Physical browser/device rendering: UNVERIFIED in this repository session.

Do not claim live Safari, iOS or Samsung Internet testing until it has actually been performed.