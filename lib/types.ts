export interface Profile {
  id: string
  name: string
  avatarColor: string
  avatarInitial: string
  isKids?: boolean
}

export interface Series {
  id: string
  title: string
  description: string
  longDescription?: string
  thumbnailUrl: string
  backdropUrl: string
  thumbnailGradient: string
  backdropGradient: string
  genre: string[]
  year: number
  maturityRating: string
  matchPercentage: number
  seasons: number
  cast?: string[]
  tags?: string[]
  isFeatured?: boolean
}

export interface Episode {
  id: string
  seriesId: string
  seasonNumber: number
  episodeNumber: number
  title: string
  description: string
  duration: string
  thumbnailUrl: string
  thumbnailGradient: string
  videoUrl: string
  isNew?: boolean
}

export interface ContentRow {
  id: string
  title: string
  items: Series[]
}
