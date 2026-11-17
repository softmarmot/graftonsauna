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
