# Crafton Sauna (demo)

Demo website for the Grafton Sauna client. The name **Crafton Sauna**, the phone
number, email, address, prices, events and testimonials are all placeholders.
Photos are styled placeholder blocks with a caption describing the shot that
belongs there.

The look and page structure are inspired by kelospa.com. All text and artwork here are original.

## Stack

- **SvelteKit** (Svelte 5) with `@sveltejs/adapter-static`. Every page is pre-rendered to plain HTML in `build/`.
- No backend. Booking, payments, reminders and gift cards come from **Square** (Appointments + eGift cards).
- Plain CSS: global tokens in `src/app.css`, with component styles scoped inside each `.svelte` file.

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

Every page ends with the booking section (`#book`).

## Where to change things

- **Business details, hours, nav, booking links:** `src/lib/site.ts`
- **Sessions, add-ons, menu, events, FAQ, testimonials:** `src/lib/data.ts`
- **Colours and fonts:** `src/app.css` (`:root` tokens)
- **Logo (concept #1, roof + steam):** `src/lib/components/Logo.svelte`
- **Photos:** pass `src="/images/..."` to `<Photo>` and put the files in `static/images/`

## Booking (Square Appointments)

All three settings live in `booking` in `src/lib/site.ts`:

1. `bookingUrl`: the Square online booking site link (Square Dashboard → Appointments → Online booking).
   Once it is set, every "Book" button opens Square. Until then the buttons scroll to the on-page booking section.
2. `widgetScriptSrc`: the `src` from Square's "add a booking widget to your website" code
   (`https://app.squareup.com/appointments/buyer/widget/.../....js`). Once it is set, the placeholder becomes the live booking flow.
3. `giftCardUrl`: the Square eGift card order page.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run check    # type check
npm run build    # static site in build/
```

## Deploy

Any static host works. Recommended: **Cloudflare Pages** (or Netlify).

- Connect the GitHub repo. The build command is `npm run build` and the output directory is `build`.
- Every push to `main` deploys, and every PR gets its own preview URL.
- Add the custom domain once it is bought.
- Before launch, remove the `noindex` meta in `src/app.html`, the `Disallow: /` in `static/robots.txt`, and the demo banner in `src/routes/+layout.svelte`.
