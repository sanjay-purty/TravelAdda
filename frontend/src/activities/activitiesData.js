/** @typedef {{ id: string; title: string; rating: number; reviews: number; description: string; tags: string[]; price: number; image: string; category: string; popularity: number; score: number }} Activity */

/** @type {Activity[]} */
export const activities = [
  {
    id: '1',
    title: 'Hobbiton Movie Set Small Group Tour from Auckland',
    rating: 4.9,
    reviews: 3842,
    description:
      'Walk through the lush pastures of the Shire with an expert guide. Includes Green Dragon Inn drink and round-trip transport from Auckland CBD.',
    tags: ['Free Cancellation', 'Day Tour', 'Small Group'],
    price: 189,
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=260&fit=crop',
    category: 'day-tours',
    popularity: 98,
    score: 96,
  },
  {
    id: '2',
    title: 'Waitomo Glowworm Caves & Rotorua Day Trip',
    rating: 4.7,
    reviews: 2103,
    description:
      'Marvel at thousands of glowworms in underground caves, then explore geothermal wonders and Māori culture in Rotorua.',
    tags: ['Free Cancellation', 'Full Day', 'Hotel Pickup'],
    price: 279,
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=260&fit=crop',
    category: 'top',
    popularity: 95,
    score: 92,
  },
  {
    id: '3',
    title: 'Auckland Harbour Dinner Cruise',
    rating: 4.6,
    reviews: 892,
    description:
      'Sail the Waitematā Harbour at sunset with a three-course meal and views of the Sky Tower and Rangitoto Island.',
    tags: ['Free Cancellation', 'Cruise', 'Evening'],
    price: 129,
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=260&fit=crop',
    category: 'cruises',
    popularity: 88,
    score: 89,
  },
  {
    id: '4',
    title: 'Waiheke Island Wine Tasting Tour',
    rating: 4.8,
    reviews: 1567,
    description:
      'Ferry to Waiheke for boutique vineyard visits, cellar-door tastings, and lunch overlooking the Hauraki Gulf.',
    tags: ['Small Group', 'Wine', 'Lunch Included'],
    price: 215,
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=260&fit=crop',
    category: 'top',
    popularity: 91,
    score: 94,
  },
  {
    id: '5',
    title: 'Auckland City Highlights & Sky Tower',
    rating: 4.5,
    reviews: 743,
    description:
      'Coach tour of key sights including Auckland Domain, waterfront, and admission to the Sky Tower observation deck.',
    tags: ['Sightseeing', 'Skip-the-line option', 'Family Friendly'],
    price: 79,
    image:
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400&h=260&fit=crop',
    category: 'sightseeing',
    popularity: 82,
    score: 85,
  },
  {
    id: '6',
    title: 'Māori Cultural Performance & Hangi Feast',
    rating: 4.8,
    reviews: 1204,
    description:
      'Experience traditional song, dance, and a hangi-cooked meal at an authentic Māori village near Rotorua.',
    tags: ['Cultural', 'Dinner', 'Small Group'],
    price: 165,
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&h=260&fit=crop',
    category: 'cultural',
    popularity: 87,
    score: 93,
  },
  {
    id: '7',
    title: 'Rangitoto Island Volcano Walk & Kayak',
    rating: 4.7,
    reviews: 421,
    description:
      'Paddle sea kayaks to Rangitoto, then hike to the summit for panoramic views over Auckland and the gulf.',
    tags: ['Outdoor', 'Active', 'Free Cancellation'],
    price: 195,
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=260&fit=crop',
    category: 'outdoor',
    popularity: 76,
    score: 90,
  },
  {
    id: '8',
    title: 'Dolphin & Whale Watching Cruise — Hauraki Gulf',
    rating: 4.6,
    reviews: 634,
    description:
      'Marine biologist–guided cruise to spot dolphins, whales, and seabirds in a marine reserve setting.',
    tags: ['Wildlife', 'Cruise', 'Eco Certified'],
    price: 149,
    image:
      'https://images.unsplash.com/photo-1568430460939-3ed88c7cb6c7?w=400&h=260&fit=crop',
    category: 'cruises',
    popularity: 84,
    score: 88,
  },
]

export const categoryTabs = [
  { id: 'all', label: 'All Activities' },
  { id: 'top', label: 'Top Activities' },
  { id: 'day-tours', label: 'Day Tours & Trips' },
  { id: 'sightseeing', label: 'Tours & Sightseeing' },
  { id: 'cultural', label: 'Cultural & Theme Tours' },
  { id: 'cruises', label: 'Cruises & Water Tours' },
  { id: 'outdoor', label: 'Outdoor Activities' },
]
