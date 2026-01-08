export interface GuideData {
  id: string
  title: string
  country: string
  author: string
  authorImage: string
  description: string
  isNew: boolean
  image: string
  previewUrl: string
}

export interface LocationData {
  id: string
  name: string
  category: string
  rating: number
  reviews: number
  image: string
}
