/** @typedef {{ id: string; name: string; description: string; rating: number; priceFrom: number; image: string; tag?: string; tags?: string[] }} Place */

/** @typedef {{ id: string; title: string; description: string; price: number; image: string; category: string }} ServicePackage */

/** @type {string[]} */
export const categories = [
  'Adventure',
  'Cultural',
  'Tours',
  'Beach',
  'Wildlife',
  'City Breaks',
]

/** @type {Place[]} */
export const featuredPlaces = [
  {
    id: 'fp-1',
    name: 'Bali',
    description: 'Temples, rice terraces, and sunset beaches.',
    rating: 4.9,
    priceFrom: 899,
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    tag: 'Trending',
  },
  {
    id: 'fp-2',
    name: 'Santorini',
    description: 'White villages and caldera views over the Aegean.',
    rating: 4.8,
    priceFrom: 1249,
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    tag: 'Romantic',
  },
  {
    id: 'fp-3',
    name: 'Kyoto',
    description: 'Historic shrines, bamboo groves, and tea houses.',
    rating: 4.9,
    priceFrom: 1099,
    image:
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    tag: 'Cultural',
  },
]

/** @type {Place[]} */
export const places = [
  {
    id: 'pl-1',
    name: 'Goa',
    description: 'Golden beaches, Portuguese heritage, and vibrant nightlife.',
    rating: 4.7,
    priceFrom: 349,
    tags: ['Beach', 'Tours', 'Cultural'],
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pl-2',
    name: 'Manali',
    description: 'Snow peaks, river valleys, and adventure sports hub.',
    rating: 4.8,
    priceFrom: 299,
    tags: ['Adventure', 'Tours', 'Wildlife'],
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pl-3',
    name: 'Paris',
    description: 'Iconic landmarks, museums, and café culture.',
    rating: 4.9,
    priceFrom: 1199,
    tags: ['Cultural', 'City Breaks', 'Tours'],
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pl-4',
    name: 'Dubai',
    description: 'Futuristic skyline, desert safaris, and luxury shopping.',
    rating: 4.6,
    priceFrom: 899,
    tags: ['City Breaks', 'Adventure', 'Tours'],
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pl-5',
    name: 'Maldives',
    description: 'Overwater villas and crystal-clear lagoons.',
    rating: 5.0,
    priceFrom: 1899,
    tags: ['Beach', 'Tours'],
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pl-6',
    name: 'Tokyo',
    description: 'Neon districts, sushi, and timeless traditions.',
    rating: 4.8,
    priceFrom: 1349,
    tags: ['Cultural', 'City Breaks', 'Tours'],
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
]

/** @type {ServicePackage[]} */
export const servicePackages = [
  {
    id: 'svc-1',
    title: 'Day Tours',
    description:
      'Full-day guided itineraries with transport, lunch, and local expert narration.',
    price: 89,
    category: 'Day Tours',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-2',
    title: 'Sightseeing Pass',
    description:
      'Skip-the-line entry to top monuments and a hop-on hop-off city route.',
    price: 129,
    category: 'Sightseeing',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-3',
    title: 'Adventure Activities',
    description:
      'Rafting, zip-line, or trekking with certified guides and safety gear.',
    price: 159,
    category: 'Adventure Activities',
    image:
      'https://images.unsplash.com/photo-1533130061792-64b345e4a833?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-4',
    title: 'Cultural Tours',
    description:
      'Heritage walks, craft workshops, and authentic regional dining.',
    price: 99,
    category: 'Cultural Tours',
    image:
      'https://images.unsplash.com/photo-1528164344705-47542687000d?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-5',
    title: 'Sunset Cruise',
    description:
      'Evening boat tour with refreshments and skyline or coastline views.',
    price: 75,
    category: 'Sightseeing',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-6',
    title: 'Mountain Expedition',
    description:
      'Multi-peak guided hike with camping option and meals included.',
    price: 249,
    category: 'Adventure Activities',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
]
