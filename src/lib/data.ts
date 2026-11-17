// Demo content: sessions, menu, FAQ, testimonials.
// Prices and details are placeholders until the client confirms them.

export const sessions = [
  {
    name: 'Private Sauna',
    price: 160,
    unit: 'first hour',
    extra: '+$70 per extra 30 min',
    guests: 'Up to 8 guests',
    blurb: 'The whole sauna is yours: a hot electric sauna, an ice-cold bucket shower and a quiet place to rest between rounds.',
    includes: ['Electric sauna, 170–195°F', 'Shock bucket (bucket shower)', 'Towels, water and herbal tea', 'Relaxation area'],
    featured: false,
  },
  {
    name: 'Sauna & Jacuzzi',
    price: 210,
    unit: 'first hour',
    extra: '+$90 per extra 30 min',
    guests: 'Up to 8 guests',
    blurb: 'Everything in the private session, plus the hot jacuzzi heated and waiting for your group.',
    includes: ['Everything in Private Sauna', 'Hot jacuzzi, 102°F', 'Robes for every guest', 'Welcome drink on arrival'],
    featured: true,
  },
  {
    name: 'Community Sauna',
    price: 35,
    unit: 'per person',
    extra: '90-minute shared session',
    guests: 'Selected evenings',
    blurb: 'Come alone or bring a friend. Shared sessions with a host who runs the heat and the steam rounds.',
    includes: ['Hosted sauna rounds', 'Shock bucket', 'Towel and tea', 'Tue & Thu, 6:30 pm'],
    featured: false,
  },
];

// Home-cooked menu (from the client's poster). Everything is cooked to order.
// Prices are not set yet, so none are shown.
export const dishes = [
  { name: 'Khinkali', tagline: 'Juicy and aromatic', desc: 'Georgian dumplings filled with spiced meat and a rich broth inside.', img: 'images/menu/khinkali.jpg' },
  { name: 'Khachapuri', tagline: 'Cheesy delight', desc: 'Boat-shaped bread baked with melted cheese, finished with an egg yolk and butter.', img: 'images/menu/khachapuri.jpg' },
  { name: 'Chebureki', tagline: 'Crisp and tasty', desc: 'Golden fried turnovers with a juicy minced meat filling.', img: 'images/menu/chebureki.jpg' },
  { name: 'Ukrainian borscht', tagline: 'With pampushky', desc: 'Beetroot soup with sour cream and dill, served with soft garlic buns.', img: 'images/menu/borscht.jpg' },
  { name: 'Plov', tagline: 'Fragrant and fluffy', desc: 'Rice slow-cooked with tender meat, carrots, whole garlic and spices.', img: 'images/menu/plov.jpg' },
  { name: 'Home-style zharkoe', tagline: 'Hearty and aromatic', desc: 'Braised meat with potatoes and vegetables, the way it’s made at home.', img: 'images/menu/zharkoe.jpg' },
] as const;

export const platters = [
  { name: 'Platter No. 1', tagline: 'Classic mix', img: 'images/menu/platter-1.jpg' },
  { name: 'Platter No. 2', tagline: 'Hearty and tasty', img: 'images/menu/platter-2.jpg' },
  { name: 'Platter No. 3', tagline: 'Premium choice', img: 'images/menu/platter-3.jpg' },
  { name: 'Platter No. 4', tagline: 'For the whole group', img: 'images/menu/platter-4.jpg' },
  { name: 'Platter No. 5', tagline: 'Festive flavour', img: 'images/menu/platter-5.jpg' },
] as const;

export const kitchenPromises = ['Only fresh ingredients', 'Cooked with heart', 'Quality you can rely on'];

export const faqs = [
  { q: 'What should I bring?', a: 'A swimsuit and water shoes or flip-flops. We provide towels, water and tea. Robes are included with Sauna & Jacuzzi sessions.' },
  { q: 'Is the sauna private?', a: 'Private and Sauna & Jacuzzi bookings are just for your group, up to 8 people. Community Sauna evenings are shared with other guests.' },
  { q: 'How hot is the sauna?', a: 'Usually between 170°F and 195°F. The electric heater has a basket of stones, so you can pour water for steam and make each round as gentle or as strong as you like.' },
  { q: 'What is a shock bucket?', a: 'A bucket of ice-cold water above your head that you tip over yourself with a pull of the rope. It is the fastest way to cool down between sauna rounds.' },
  { q: 'How long can I book?', a: 'The minimum booking is one hour. You can add time in 30-minute steps when you book.' },
  { q: 'Can we order food?', a: 'Yes. Our home-cooked dishes and festive platters are made to order. Call us at least a day ahead and they will be ready when you arrive.' },
  { q: 'Is swimwear required?', a: 'Yes, in shared Community Sauna sessions. In private bookings it is up to your group.' },
  { q: 'Can I come if I am pregnant or have a health condition?', a: 'Please check with your doctor before booking. Heat and cold exposure are not suitable for everyone.' },
  { q: 'What is your cancellation policy?', a: 'Free cancellation up to 24 hours before your session. Later cancellations are charged in full, but you can move your booking once at no cost.' },
  { q: 'Is there parking?', a: 'Yes, free parking is on site, right next to the sauna.' },
  { q: 'Can children come?', a: 'Children aged 12 and over are welcome in private bookings with an adult. Community sessions are 18+.' },
];

export const testimonials = [
  { quote: 'The jacuzzi after a proper sauna round. We booked again before we left.', name: 'Anna K.' },
  { quote: 'Spotless, quiet and properly hot. Perfect for a birthday with friends.', name: 'David R.' },
  { quote: 'The shock bucket made me scream, and the borscht afterwards was the best I’ve had.', name: 'Maria L.' },
];
