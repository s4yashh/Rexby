// User/Creator interfaces
export interface CreatorProfile {
  id: string
  fullName: string
  creatorName: string
  bio?: string
  profileImageUrl?: string
  coverImageUrl?: string
  guidesCount?: number
}

// Image interface
export interface RexbyImage {
  id: string
  source: 'RexbyImage' | 'Unsplash'
  url: string
  order?: number
  attributions?: {
    name?: string
    url?: string
  }
}

// Country interface
export interface Country {
  id: string
  name: string
  countryCode: string
}

// Thing to Do (Activity)
export interface ThingToDo {
  id: string
  title: string
  slug: string
  category: string
  images?: RexbyImage[]
  description?: string
  location?: string
  latitude?: number
  longitude?: number
  isLocked?: boolean
}

// Itinerary interface
export interface Itinerary {
  id: string
  title: string
  numberOfDays: number
  coverImageUrl?: string
  description?: string
  items?: string[]
  isLocked?: boolean
  pricing?: {
    amount: number
    currency: string
  }
}

// Guide Review interface
export interface GuideReviewOverview {
  averageRating: number
  numberOfReviews: number
  hasReviewed: boolean
}

// Main Guide interface
export interface GuideData {
  id: string
  title: string
  slug: string
  description: string
  coverImageUrl: string
  coverImageSet?: string[]
  country: Country
  creator: CreatorProfile
  pricing?: {
    amount: number
    currency: string
  }
  isNew: boolean
  reviewOverview?: GuideReviewOverview
  thingsToDoCount?: number
  itinerariesCount?: number
  mapPreviewUrl?: string
}

// Location card interface (used in carousels)
export interface LocationData {
  id: string
  name: string
  category: string
  rating: number
  reviews: number
  image: string
  isLocked?: boolean
}
