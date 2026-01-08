import { GuideData, LocationData } from '@/types'

export const norwayGuide: GuideData = {
  id: '1',
  title: 'Norway Guide',
  slug: 'norway',
  country: {
    id: 'norway',
    name: 'Norway',
    countryCode: 'NO'
  },
  creator: {
    id: 'asasteinars',
    fullName: 'Ása Steinars',
    creatorName: 'asasteinars',
    bio: 'Travel creator specializing in Nordic countries',
    profileImageUrl: 'https://cdn.prod.rexby.com/image/90ca806e-c988-4993-8bcb-302fff6b27db?format=webp&width=48&height=48',
    coverImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    guidesCount: 3
  },
  description: `Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.

This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.`,
  isNew: true,
  coverImageUrl: 'https://cdn.prod.rexby.com/image/d80440c7-36f3-49f7-b69b-b390f0cf7b8f?format=webp&width=1080&height=1350',
  pricing: {
    amount: 29,
    currency: 'EUR'
  },
  reviewOverview: {
    averageRating: 0,
    numberOfReviews: 0,
    hasReviewed: false
  },
  thingsToDoCount: 161,
  itinerariesCount: 1,
  mapPreviewUrl: 'https://rexby-screenshot-service.netlify.app/rexby/width:1200--height:480--dpr:2/asasteinars/norway/map/screenshot'
}

export const locations: LocationData[] = [
  {
    id: '1',
    name: 'One of my favourite spots',
    category: 'Sightseeing',
    rating: 4.8,
    reviews: 2543,
    image: 'https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=1080&height=1350'
  },
  {
    id: '2',
    name: 'Swing with amazing views',
    category: 'Sightseeing',
    rating: 4.9,
    reviews: 3120,
    image: 'https://cdn.prod.rexby.com/image/79f7722f-946c-4676-a746-7071caff82d9?format=webp&width=1080&height=1350'
  },
  {
    id: '3',
    name: 'Beautiful view point',
    category: 'Hike',
    rating: 5.0,
    reviews: 1890,
    image: 'https://cdn.prod.rexby.com/image/e5d98dda-0943-4ad9-b33c-ac41d1721742?format=webp&width=1080&height=1350'
  },
  {
    id: '4',
    name: 'Kayak is a must',
    category: 'Activity',
    rating: 4.7,
    reviews: 2156,
    image: 'https://cdn.prod.rexby.com/image/bf78c0b2-474b-42bb-813c-3d554812e474?format=webp&width=1080&height=1350'
  },
  {
    id: '5',
    name: 'Walk around a beautiful old fishing town',
    category: 'Sightseeing',
    rating: 4.6,
    reviews: 1654,
    image: 'https://cdn.prod.rexby.com/image/c2c3b8f2-2542-42bb-bd67-355cf1726aa9?format=webp&width=1080&height=1350'
  },
  {
    id: '6',
    name: 'Lofoten Road Trip',
    category: 'Itinerary',
    rating: 4.8,
    reviews: 1432,
    image: 'https://rexby-screenshot-service.netlify.app/rexby/width:800--height:1000--ttl:86400/asasteinars/i/OJmyPXHfTJuOVTD_pOXxWQ/screenshot'
  }
]

