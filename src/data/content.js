export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Telugu celebration kitchens',
  title: 'Pelli vindu, cooked the Andhra way.',
  subtitle:
    'Gongura, dum biryani, live pesarattu, and hospitality that feels like home — for pellilu, nischitartham, board dinners, and the mehfil that fills a courtyard in Hyderabad.',
  primaryCta: { label: 'Plan your event', href: '#contact' },
  secondaryCta: { label: 'Explore the menu', href: '#menu' },
  image:
    'https://images.unsplash.com/photo-1741376509047-66dae5df90f9?auto=format&fit=crop&w=1920&q=80',
  stats: [
    { value: '14+', label: 'Years at the vindu' },
    { value: '2.4k', label: 'Events hosted' },
    { value: '9', label: 'Andhra–Telangana kitchens' },
  ],
  booking: 'Now booking pelli season 2026–27',
}

export const marqueeItems = [
  'Pelli',
  'Nischitartham',
  'Sangeet',
  'Reception',
  'Seemantham',
  'Grihapravesham',
  'Corporate',
  'Destination',
]

export const about = {
  eyebrow: 'Mana illu',
  title: 'A rasoi that cooks like a Telugu home, and hosts like family.',
  body: [
    'Vindu began as a Sunday bhojanam in a Banjara Hills house. Today we are a chef-led kitchen for intimate poojas of forty and pellilu of a thousand, with the same care for kara, puli, and the guest who arrives last.',
    'We roast gongura and grind poppy in-house, write menus around the Hyderabad mandi, and staff every event as if it were our own pelli. Jain, satvik, coastal Andhra, Rayalaseema, and Hyderabadi dum sit comfortably on the same table.',
  ],
  image:
    'https://images.unsplash.com/photo-1707529332935-bfa3925f15ac?auto=format&fit=crop&w=900&q=80',
  secondaryImage:
    'https://images.unsplash.com/photo-1741376509109-e9edd6f24f5f?auto=format&fit=crop&w=800&q=80',
  note: 'Est. 2012 · Hyderabad, Vijayawada & Vizag',
  chef: 'Anirudh Reddy, Chef-Patron',
  producer: 'Sowmya Rao, Events Producer',
}

export const services = [
  {
    number: '01',
    title: 'Pelli vindu',
    description:
      'From the nischitartham tindi to the last late-night kodi fry — menus that follow the muhurat of your functions, not a standard package.',
    image:
      'https://images.unsplash.com/photo-1707528904076-6dbefcfe9b4d?auto=format&fit=crop&w=900&q=80',
    from: 'From ₹2,200 / plate',
    detail: '150 guest min · 8 month lead',
  },
  {
    number: '02',
    title: 'Corporate dining',
    description:
      'Board lunches, product launches, and Bathukamma dinners with the polish of a fine dining room and the discretion of a private kitchen.',
    image:
      'https://images.unsplash.com/photo-1764315652645-81e5c2bdafb9?auto=format&fit=crop&w=900&q=80',
    from: 'From ₹1,050 / plate',
    detail: '25 guest min · 3 week lead',
  },
  {
    number: '03',
    title: 'Illu functions',
    description:
      'Seemantham, grihapravesham, birthday dawats, and weekend house parties — cooked on site, served without fuss.',
    image:
      'https://images.unsplash.com/photo-1768700439948-16e9c0daee3e?auto=format&fit=crop&w=900&q=80',
    from: 'From ₹1,650 / plate',
    detail: '12–80 guests · 2 week lead',
  },
  {
    number: '04',
    title: 'Sangeet & tindi night',
    description:
      'Pesarattu counters, mirchi bajji, mocktail bars, and roaming plates designed to keep the courtyard moving.',
    image:
      'https://images.unsplash.com/photo-1767324672758-d3958e80f6ea?auto=format&fit=crop&w=900&q=80',
    from: 'From ₹620 / plate',
    detail: '80 guest min · 3 week lead',
  },
]

export const menuCategories = [
  {
    id: 'tindi',
    title: 'Tindi & chaat',
    count: 'Live counters',
    image:
      'https://images.unsplash.com/photo-1741376509047-66dae5df90f9?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: 'Pesarattu', note: 'Moong, upma, allam pachadi', price: '₹90', tags: ['Veg'] },
      { name: 'Punugulu', note: 'Idli batter, coconut chutney', price: '₹80', tags: ['Veg'] },
      { name: 'Mirchi bajji', note: 'Guntur chilli, onion, chaat masala', price: '₹85', tags: ['Veg'] },
      { name: 'Garelu', note: 'Minapa pappu, sambar, allam', price: '₹90', tags: ['Veg'] },
      { name: 'Pulihora cone', note: 'Tamarind rice, jeedi pappu', price: '₹70', tags: ['Veg'] },
      { name: 'Kodi vepudu slider', note: 'Andhra fry, onion salad', price: '₹110', tags: [] },
    ],
  },
  {
    id: 'dum',
    title: 'Dum & tandoor',
    count: 'Hyderabadi kitchen',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: 'Kacchi gosht biryani', note: 'Dum, saffron, fried onion', price: '₹520', tags: [] },
      { name: 'Ulava charu biryani', note: 'Horsegram stock, Andhra', price: '₹480', tags: [] },
      { name: 'Bagara baingan', note: 'Sesame, peanut, tamarind', price: '₹320', tags: ['Veg', 'GF'] },
      { name: 'Mirchi ka salan', note: 'Hyderabadi chilli curry', price: '₹280', tags: ['Veg'] },
      { name: 'Haleem', note: 'Broken wheat, gosht, ghee', price: '₹360', tags: [] },
      { name: 'Tandoori natu kodi', note: 'Country chicken, red chilli', price: '₹540', tags: ['GF'] },
    ],
  },
  {
    id: 'pappu',
    title: 'Pappu & koora',
    count: 'Andhra–Telangana thali',
    image:
      'https://images.unsplash.com/photo-1707529332935-bfa3925f15ac?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: 'Gongura pappu', note: 'Sorrel leaf, tadka, ghee', price: '₹240', tags: ['Veg', 'GF'] },
      { name: 'Gutti vankaya', note: 'Stuffed brinjal, poppy, peanut', price: '₹280', tags: ['Veg'] },
      { name: 'Tomato pappu', note: 'Toor dal, garlic, chilli', price: '₹220', tags: ['Veg', 'GF'] },
      { name: 'Royyala iguru', note: 'Prawns, onion, Guntur kara', price: '₹560', tags: ['GF'] },
      { name: 'Chepala pulusu', note: 'River fish, tamarind, sesame', price: '₹480', tags: ['GF'] },
      { name: 'Natu kodi pulusu', note: 'Country chicken, country spices', price: '₹420', tags: ['GF'] },
    ],
  },
  {
    id: 'sweets',
    title: 'Teepi & mithai',
    count: 'The sweet thaal',
    image:
      'https://images.unsplash.com/photo-1615832494714-0f6a405f90fe?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: 'Pootharekulu', note: 'Atreyapuram, bellam or sugar', price: '₹160', tags: ['Veg'] },
      { name: 'Ariselu', note: 'Rice, jaggery, sesame', price: '₹140', tags: ['Veg'] },
      { name: 'Qubani ka meetha', note: 'Apricot, cream, Hyderabadi', price: '₹170', tags: ['Veg'] },
      { name: 'Double ka meetha', note: 'Bread, saffron milk, nuts', price: '₹150', tags: ['Veg'] },
      { name: 'Paramannam', note: 'Rice payasam, cashew, ghee', price: '₹140', tags: ['Veg', 'GF'] },
      { name: 'Sunnundalu', note: 'Urad, jaggery, ghee', price: '₹130', tags: ['Veg'] },
    ],
  },
]

export const reasons = [
  {
    title: 'Andhra, Telangana, Hyderabadi',
    body: 'Gongura, dum, and coastal koora written for your family — not pulled from a pan-India brochure.',
  },
  {
    title: 'Kara and puli, in balance',
    body: 'We roast Guntur chilli and soak tamarind in-house, then build the thali around the day’s mandi.',
  },
  {
    title: 'Service as seva',
    body: 'Captains who understand the lagna muhurat, the vegetarian table, and when to bring the filter coffee.',
  },
  {
    title: 'One kitchen, every scale',
    body: 'The same rasoi that plates a twelve-seat bhojanam can run a thousand-guest pelli without losing the tadka.',
  },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1741376509047-66dae5df90f9?auto=format&fit=crop&w=900&q=80',
    alt: 'Idli, sambar and chutneys served on a banana-leaf butta',
    caption: 'Tindi on butta · Vizag pelli',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1707528904076-6dbefcfe9b4d?auto=format&fit=crop&w=800&q=80',
    alt: 'Full meal plated on a banana leaf',
    caption: 'Bhojanam on arati aaku · Jubilee Hills',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    alt: 'Hyderabadi dum biryani',
    caption: 'Dum biryani, Banjara Hills kitchen',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1741376509109-e9edd6f24f5f?auto=format&fit=crop&w=800&q=80',
    alt: 'Idli and chutneys on a banana leaf',
    caption: 'Sangeet tindi night, Guntur',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1768700439948-16e9c0daee3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Rice and koora served on banana leaves',
    caption: 'Pankti service on butta',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1707529332935-bfa3925f15ac?auto=format&fit=crop&w=900&q=80',
    alt: 'Andhra meal close-up on a banana-leaf butta',
    caption: 'Varsha kaalam tasting · leaf service',
    className: 'col-span-2 md:col-span-4',
  },
]

export const testimonials = [
  {
    quote:
      'They treated our Vizag pelli like an illu function — the gongura arrived with the muhurat, and guests still talk about the biryani.',
    name: 'Ananya Reddy',
    role: 'Pelli · 480 guests · June 2026',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Our Bathukamma client dinner needed to feel intimate at two hundred covers. Vindu made the room feel hosted, not catered.',
    name: 'Karthik Rao',
    role: 'Cyberabad Studios · 200 guests · May 2026',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The in-home tasting was the most generous evening we have hosted. Nothing fussy — just extraordinary Andhra food, quietly served.',
    name: 'Sowmya Garu',
    role: 'Private bhojanam · 18 guests · April 2026',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
]

export const contact = {
  eyebrow: 'Begin the conversation',
  title: 'Tell us about the vindu you are setting.',
  body: 'Share a date, a guest count, and the functions you are planning. We reply within one business day with availability and, if the date is open, a tasting invitation.',
  details: [
    {
      label: 'Kitchen',
      value: '8-2-293/82, Road No. 12, Banjara Hills, Hyderabad 500034',
      href: 'https://maps.google.com/?q=Road+No+12+Banjara+Hills+Hyderabad',
    },
    { label: 'Telephone', value: '+91 40 2355 1848', href: 'tel:+914023551848' },
    { label: 'Correspondence', value: 'hello@vindu.kitchen', href: 'mailto:hello@vindu.kitchen' },
    { label: 'Hours', value: 'Mon–Sat, 10:00–19:00 IST', href: null },
  ],
  eventTypes: [
    'Pelli / reception',
    'Nischitartham or sangeet',
    'Seemantham / grihapravesham',
    'Corporate dining',
    'Other',
  ],
}

export const footer = {
  blurb:
    'A chef-led Telugu catering house for pellilu and gatherings that deserve to be cooked, not catalogued.',
  columns: [
    {
      title: 'House',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Menu', href: '#menu' },
        { label: 'Gallery', href: '#gallery' },
      ],
    },
    {
      title: 'Enquire',
      links: [
        { label: 'Book a tasting', href: '#contact' },
        { label: 'Pelli', href: '#services' },
        { label: 'Corporate', href: '#services' },
        { label: 'Illu functions', href: '#services' },
      ],
    },
  ],
}
