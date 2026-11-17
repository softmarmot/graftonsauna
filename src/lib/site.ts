// Single place for business details and the booking integration.
// Everything here is DEMO data. Swap in the real values before launch.

export const site = {
  name: 'Crafton Sauna',
  wordmark: 'CRAFTON',
  tagline: 'Hot sauna, cold water, good company.',
  phone: '(555) 014-2290',
  phoneHref: 'tel:+15550142290',
  email: 'hello@craftonsauna.example',
  address: ['18 Millbrook Lane', 'Crafton, ST 00000'],
  // Map + directions. `mapQuery` is what Google Maps searches for: a street
  // address or "lat,lng". Placeholder until the real location is known.
  mapQuery: 'Grafton, MA',
  mapZoom: 14,
  // Footer credit. TODO: confirm the developer's site URL.
  credit: { name: 'softmarmot', url: 'https://github.com/softmarmot' },
  instagram: '#',
  facebook: '#',
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tue – Thu', time: '10:00 am – 9:00 pm' },
    { days: 'Fri – Sat', time: '9:00 am – 10:00 pm' },
    { days: 'Sunday', time: '9:00 am – 7:00 pm' },
  ],
};

// ---------------------------------------------------------------------------
// Booking (Square Appointments)
//
// bookingUrl:      Square online booking site link
//                  (Square Dashboard > Appointments > Online booking > Booking site),
//                  looks like https://book.squareup.com/appointments/.../services
//                  Until it is set, every "Book" button scrolls to the booking section.
// widgetScriptSrc: the src from Square's "Add a booking widget to your website" code,
//                  looks like https://app.squareup.com/appointments/buyer/widget/.../....js
//                  Leave empty to show the placeholder slot.
// giftCardUrl:     Square eGift card order page.
// ---------------------------------------------------------------------------
export const booking = {
  bookingUrl: '',
  widgetScriptSrc: '',
  giftCardUrl: '#',
};

/** Google Maps embed (no API key needed) and directions link, built from site.mapQuery. */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=${site.mapZoom}&output=embed`;
export const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;

/**
 * Background photo for the fixed-background "ritual" band on the home page.
 * Hot-linked from Unsplash (Unsplash License: free to use, credit appreciated).
 * Replace with a photo of the real sauna, e.g. asset('images/ritual.jpg').
 * If it fails to load, the local placeholder static/images/parallax-sauna.jpg shows.
 */
export const ritualPhoto = {
  url: 'https://images.unsplash.com/photo-1757940556610-a114be4733bf?auto=format&fit=crop&w=2400&q=80',
  credit: 'Auroom Wellness / Unsplash',
  creditUrl: 'https://unsplash.com/photos/interior-of-a-modern-wooden-sauna-with-heated-stones-Yr27GeesjZU',
};

/** Where "Book" buttons go: Square's booking site if set, else the on-page booking section. */
export const bookHref = booking.bookingUrl || '#book';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
