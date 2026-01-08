import { GuideData } from '@/types'

export const norwayGuide: GuideData = {
  id: '1',
  title: 'Norway Guide',
  country: 'Norway',
  author: 'Åsa Steinars',
  authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  description: `Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.

This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.`,
  isNew: true,
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  previewUrl: '#'
}

export const locations: LocationData[] = [
  {
    id: '1',
    name: 'Geirangerfjord',
    category: 'Fjord',
    rating: 4.8,
    reviews: 2543,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Lofoten Islands',
    category: 'Island',
    rating: 4.9,
    reviews: 3120,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Northern Lights',
    category: 'Natural',
    rating: 5.0,
    reviews: 1890,
    image: 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=300&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Preikestolen',
    category: 'Mountain',
    rating: 4.7,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop'
  },
  {
    id: '5',
    name: 'Bergen Harbor',
    category: 'City',
    rating: 4.6,
    reviews: 1654,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300&h=300&fit=crop'
  },
  {
    id: '6',
    name: 'Sognefjord',
    category: 'Fjord',
    rating: 4.8,
    reviews: 1432,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  }
]
