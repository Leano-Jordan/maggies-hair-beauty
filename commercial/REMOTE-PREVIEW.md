# Remote preview

## Fastest phone / client preview
This is a static site. Start a local web server from the repository root on port 8080, then expose it with a Cloudflare Quick Tunnel:

`cloudflared tunnel --url http://localhost:8080`

Cloudflare will print a temporary `https://*.trycloudflare.com` URL. Send that URL to the buyer and open it on any phone, tablet or desktop. The tunnel is intended for short-lived development previews, not production hosting.

## Browse on your phone
- Connect the phone to the internet; Wi-Fi and mobile data both work.
- Open the shared HTTPS preview URL in Safari or Chrome.
- Test Home → Services → Gallery → About → Contact.
- Test the hamburger menu, booking CTA, gallery filters and form behaviour.
- Rotate the phone and repeat.

## Stable client preview
For a persistent buyer URL, deploy the static repository to Cloudflare Pages, Netlify or another static host. GitHub Pages is also suitable when the repository/plan supports it, but a private personal repository on GitHub Free cannot publish Pages. Keep the repository private if it is still a saleable asset.

## Important demo rule
The current site is a demonstration. Replace the demo business data and stock imagery before production. The homepage uses `noindex,nofollow` while the demonstration identity remains in place.
