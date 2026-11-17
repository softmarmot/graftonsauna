# Crafton Sauna (demo)

Demo website for the Grafton Sauna client. The name **Crafton Sauna**, the phone
number, email, address, prices, events and testimonials are all placeholders.
Photos are styled placeholder blocks with a caption describing the shot that
belongs there.

Look and page structure are inspired by kelospa.com; all text and artwork here are original.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, session pricing cards, add-ons, sauna house intro, what's included, the ritual, hours + location, testimonials |
| `/about` | Story, the tradition, philosophy, private hire, testimonials |
| `/services` | Session cards, add-ons, long-form service descriptions, gift cards |
| `/menu` | Teas, cold drinks, small plates, sweets |
| `/events` | Upcoming events list, private party package, occasion cards |
| `/faq` | Accordion of common questions |
| `/contact` | Phone / email / address cards, hours, map slot |

Every page ends with the booking section (`#book`), and every "Book" button points at it.

## Where to change things

- **Business details, hours, nav, booking links:** `src/site.ts`
- **Sessions, add-ons, menu, events, FAQ, testimonials:** `src/data.ts`
- **Colours and fonts:** `src/styles/global.css` (`:root` tokens)
- **Logo (concept #1, roof + steam):** `src/components/Logo.astro`
- **Photos:** pass `src="/images/..."` to `<Photo>` and drop files in `public/images/`

## Booking (Squarespace Scheduling)

1. In Squarespace: Scheduling → Scheduling page → Embed options → copy the iframe `src`.
2. Paste it into `booking.embedSrc` in `src/site.ts`. The placeholder becomes the live calendar.
3. Optional: set `booking.bookingUrl` to the public scheduling link if buttons should open it directly.
4. Set `booking.giftCardUrl` to the Squarespace gift certificate link.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy

Any static host works. Recommended: **Cloudflare Pages** (or Netlify).

- Connect the GitHub repo, build command `npm run build`, output directory `dist`.
- Every push to `main` deploys; every PR gets its own preview URL to show the client.
- Add the custom domain in the host's dashboard once it is bought.
- Remove `<meta name="robots" content="noindex">` in `src/layouts/Base.astro` and the demo banner before launch.
