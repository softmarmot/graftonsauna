// Demo content: services, add-ons, menu, events, FAQ.
// Prices and details are placeholders until the client confirms them.

export const sessions = [
  {
    name: 'Private Sauna',
    price: 160,
    unit: 'first hour',
    extra: '+$70 per extra 30 min',
    guests: 'Up to 8 guests',
    blurb: 'The whole sauna house is yours: wood-fired sauna, cold plunge, outdoor showers and the fireside lounge.',
    includes: ['Wood-fired sauna, 170–195°F', 'Cold plunge and outdoor showers', 'Towels, water and herbal tea', 'Fireside lounge'],
    featured: false,
  },
  {
    name: 'Sauna & Hot Tub',
    price: 210,
    unit: 'first hour',
    extra: '+$90 per extra 30 min',
    guests: 'Up to 8 guests',
    blurb: 'Everything in the private session, plus the cedar hot tub heated and waiting for your group.',
    includes: ['Everything in Private Sauna', 'Cedar hot tub, 102°F', 'Robes for every guest', 'Welcome drink on arrival'],
    featured: true,
  },
  {
    name: 'Community Sauna',
    price: 35,
    unit: 'per person',
    extra: '90-minute shared session',
    guests: 'Selected evenings',
    blurb: 'Come alone or bring a friend. Shared sessions with a host who runs the heat and the löyly rounds.',
    includes: ['Hosted sauna rounds', 'Cold plunge', 'Towel and tea', 'Tue & Thu, 6:30 pm'],
    featured: false,
  },
];

export const addOns = [
  { name: 'Birch whisk ritual', time: '~15 min', price: '$60', note: 'Traditional venik treatment with fresh birch and oak.' },
  { name: 'Salt & honey scrub', time: '~20 min', price: '$75', note: 'Sea salt, local honey and essential oils, rinsed off in the cold.' },
  { name: 'Aroma steam', time: 'Session', price: '$20', note: 'Eucalyptus, pine or lavender poured on the stones.' },
  { name: 'Robe & slipper hire', time: 'Per guest', price: '$10', note: 'Soft cotton robe and slippers for your visit.' },
  { name: 'Clay face mask', time: '~10 min', price: '$35', note: 'Cooling clay mask applied between rounds.' },
  { name: 'Snack board for the group', time: 'Ready on arrival', price: '$55', note: 'Bread, cheese, pickles, fruit and nuts.' },
];

export const menu = [
  {
    title: 'Teas & warm drinks',
    items: [
      { name: 'House herbal tea', desc: 'Mint, linden, chamomile and thyme', price: '4' },
      { name: 'Sea buckthorn tea', desc: 'Orange berries, honey, ginger', price: '6' },
      { name: 'Ivan chai', desc: 'Fermented fireweed, served in a pot', price: '7' },
      { name: 'Coffee', desc: 'Drip or oat-milk latte', price: '4.5' },
    ],
  },
  {
    title: 'Cold drinks',
    items: [
      { name: 'Kvass', desc: 'Lightly sparkling rye bread drink', price: '5' },
      { name: 'Cranberry mors', desc: 'House-made berry drink', price: '5' },
      { name: 'Cold-pressed juice', desc: 'Apple-ginger or beet-carrot', price: '7' },
      { name: 'Mineral water', desc: 'Still or sparkling', price: '3' },
    ],
  },
  {
    title: 'Small plates',
    items: [
      { name: 'Pickle plate', desc: 'Cucumbers, tomatoes, cabbage, dill', price: '9' },
      { name: 'Smoked fish board', desc: 'Salmon, mackerel, rye, horseradish cream', price: '16' },
      { name: 'Dumplings', desc: 'Potato or beef, sour cream, crispy onion', price: '12' },
      { name: 'Garden salad', desc: 'Greens, radish, sunflower seeds, lemon', price: '10' },
    ],
  },
  {
    title: 'Something sweet',
    items: [
      { name: 'Honey cake', desc: 'Layered, with sour cream frosting', price: '7' },
      { name: 'Seasonal fruit', desc: 'Sliced and chilled', price: '6' },
      { name: 'Dried fruit & nuts', desc: 'A handful between rounds', price: '5' },
    ],
  },
];

export const events = [
  { date: 'Dec 05', day: 'Sat', title: 'Winter Sauna Night', time: '6:00 – 9:00 pm', desc: 'Candlelit rounds, birch rituals and a warm soup supper.', price: '$55 per person' },
  { date: 'Dec 13', day: 'Sun', title: 'Sauna & Breathwork', time: '9:00 – 10:30 am', desc: 'A guided breathing session followed by heat and cold plunge rounds.', price: '$45 per person' },
  { date: 'Jan 01', day: 'Fri', title: 'New Year Cold Plunge', time: '11:00 am – 2:00 pm', desc: 'Start the year with a plunge, a sauna and hot tea by the fire.', price: '$30 per person' },
  { date: 'Jan 17', day: 'Sun', title: 'Ladies’ Sauna Morning', time: '9:00 am – 12:00 pm', desc: 'A relaxed women-only session with scrubs and herbal teas.', price: '$50 per person' },
];

export const privateEvents = [
  { title: 'Birthdays', desc: 'The sauna house, the hot tub and a snack board for up to 8 friends.' },
  { title: 'Hen & stag parties', desc: 'Heat, cold water and drinks by the fire before the night out.' },
  { title: 'Team days', desc: 'A few hours away from screens. We can add a host and lunch.' },
  { title: 'Small celebrations', desc: 'Anniversaries, reunions and anything worth a toast.' },
];

export const faqs = [
  { q: 'What should I bring?', a: 'A swimsuit and water shoes or flip-flops. We provide towels, water and tea. Robes are included with Sauna & Hot Tub sessions and can be hired for other bookings.' },
  { q: 'Is the sauna private?', a: 'Private and Sauna & Hot Tub bookings are just for your group, up to 8 people. Community Sauna evenings are shared with other guests.' },
  { q: 'How hot is the sauna?', a: 'Usually between 170°F and 195°F. You control the steam by pouring water on the stones, so each round can be as gentle or as strong as you like.' },
  { q: 'How long can I book?', a: 'The minimum booking is one hour. You can add time in 30-minute steps when you book.' },
  { q: 'Is swimwear required?', a: 'Yes, in shared Community Sauna sessions. In private bookings it is up to your group.' },
  { q: 'Can I come if I am pregnant or have a health condition?', a: 'Please check with your doctor before booking. Heat and cold exposure are not suitable for everyone.' },
  { q: 'What is your cancellation policy?', a: 'Free cancellation up to 24 hours before your session. Later cancellations are charged in full, but you can move your booking once at no cost.' },
  { q: 'Is there parking?', a: 'Yes, free parking is on site, right next to the sauna house.' },
  { q: 'Do you sell gift cards?', a: 'Yes. Gift cards can be bought online in any amount and are valid for 12 months.' },
  { q: 'Can children come?', a: 'Children aged 12 and over are welcome in private bookings with an adult. Community sessions are 18+.' },
];

export const testimonials = [
  { quote: 'The hot tub under the stars after a proper sauna round. We booked again before we left.', name: 'Anna K.' },
  { quote: 'Spotless, quiet and the heat is the real thing. Perfect for a birthday with friends.', name: 'David R.' },
  { quote: 'The birch ritual was a first for me and now I can’t go without it.', name: 'Maria L.' },
];
