// Single place for business details and the booking integration.
// Everything here is DEMO data. Swap in the real values before launch.

export const site = {
  name: 'Crafton Sauna',
  wordmark: 'CRAFTON',
  tagline: 'Wood-fired heat, cold water, good company.',
  phone: '(555) 014-2290',
  phoneHref: 'tel:+15550142290',
  email: 'hello@craftonsauna.example',
  address: ['18 Millbrook Lane', 'Crafton, ST 00000'],
  mapUrl: 'https://maps.google.com/?q=sauna',
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
// Booking (Squarespace Scheduling, formerly Acuity)
//
// bookingUrl:  the public scheduling page link. Every "Book" button uses it.
// embedSrc:    the iframe src from Squarespace > Scheduling > Embed options.
//              Looks like https://app.squarespace.com/appointments/....
//              Leave empty to show the placeholder slot instead of the iframe.
// ---------------------------------------------------------------------------
export const booking = {
  bookingUrl: '#book', // every page ends with the booking section; swap for the Squarespace link if preferred
  embedSrc: '',
  giftCardUrl: '#',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];
