import type { Profile, Series, Episode, ContentRow } from "./types"

// ============================================================
// PROFILES
// ============================================================
export const profiles: Profile[] = [
  {
    id: "chiya-gandu",
    name: "Chiya Gandu",
    avatarColor: "#E50914",
    avatarInitial: "C",
  },
  {
    id: "my-love",
    name: "My Love",
    avatarColor: "#0071EB",
    avatarInitial: "M",
  },
  {
    id: "kids",
    name: "Kids",
    avatarColor: "#46D369",
    avatarInitial: "K",
    isKids: true,
  },
  {
    id: "guest",
    name: "Guest",
    avatarColor: "#808080",
    avatarInitial: "G",
  },
]

// ============================================================
// MAIN SERIES: CHIYA GANDU
// ============================================================
export const chiyaGanduSeries: Series = {
  id: "chiya-gandu",
  title: "Chiya Gandu",
  description:
    "A heartwarming collection of the cutest moments, sweet surprises, and everyday adventures with the one who makes every day brighter.",
  longDescription:
    "Follow the journey of love through everyday moments that make life extraordinary. From cozy coffee dates to spontaneous adventures, this series captures the magic of being with someone who turns ordinary days into beautiful memories. Each episode is a window into the little things that make love so special.",
  thumbnailUrl: "https://picsum.photos/seed/chiya/640/360",
  backdropUrl: "https://picsum.photos/seed/chiya-bd/1920/1080",
  thumbnailGradient: "from-rose-600 via-pink-500 to-red-700",
  backdropGradient: "from-rose-900 via-red-950 to-black",
  genre: ["Romance", "Lifestyle", "Feel Good"],
  year: 2024,
  maturityRating: "U/A 13+",
  matchPercentage: 98,
  seasons: 1,
  cast: ["Chiya", "Gandu"],
  tags: ["Heartwarming", "Sweet", "Cute Moments", "Couple Goals"],
  isFeatured: true,
}

// ============================================================
// PLACEHOLDER SERIES (for home rows)
// ============================================================
export const placeholderSeries: Series[] = [
  {
    id: "midnight-conversations",
    title: "Midnight Conversations",
    description: "Deep talks that happen when the world is asleep.",
    thumbnailUrl: "https://picsum.photos/seed/midnight/640/360",
    backdropUrl: "https://picsum.photos/seed/midnight-bd/1920/1080",
    thumbnailGradient: "from-indigo-800 via-blue-900 to-slate-900",
    backdropGradient: "from-indigo-950 to-black",
    genre: ["Drama", "Romance"],
    year: 2024,
    maturityRating: "U/A 16+",
    matchPercentage: 95,
    seasons: 2,
  },
  {
    id: "the-weekend-escape",
    title: "The Weekend Escape",
    description: "Spontaneous getaways that become unforgettable stories.",
    thumbnailUrl: "https://picsum.photos/seed/weekend/640/360",
    backdropUrl: "https://picsum.photos/seed/weekend-bd/1920/1080",
    thumbnailGradient: "from-emerald-700 via-teal-800 to-cyan-900",
    backdropGradient: "from-emerald-950 to-black",
    genre: ["Adventure", "Travel"],
    year: 2024,
    maturityRating: "U",
    matchPercentage: 91,
    seasons: 1,
  },
  {
    id: "love-in-frames",
    title: "Love in Frames",
    description: "A photographer captures love stories across the city.",
    thumbnailUrl: "https://picsum.photos/seed/frames/640/360",
    backdropUrl: "https://picsum.photos/seed/frames-bd/1920/1080",
    thumbnailGradient: "from-amber-600 via-orange-700 to-red-800",
    backdropGradient: "from-amber-950 to-black",
    genre: ["Romance", "Drama"],
    year: 2023,
    maturityRating: "U/A 13+",
    matchPercentage: 89,
    seasons: 3,
  },
  {
    id: "cafe-chronicles",
    title: "Cafe Chronicles",
    description: "Every cup of coffee has a story to tell.",
    thumbnailUrl: "https://picsum.photos/seed/cafe/640/360",
    backdropUrl: "https://picsum.photos/seed/cafe-bd/1920/1080",
    thumbnailGradient: "from-yellow-800 via-amber-900 to-stone-900",
    backdropGradient: "from-yellow-950 to-black",
    genre: ["Slice of Life", "Comedy"],
    year: 2024,
    maturityRating: "U",
    matchPercentage: 87,
    seasons: 1,
  },
  {
    id: "starlit-promises",
    title: "Starlit Promises",
    description: "Wishes made under constellations that come true.",
    thumbnailUrl: "https://picsum.photos/seed/starlit/640/360",
    backdropUrl: "https://picsum.photos/seed/starlit-bd/1920/1080",
    thumbnailGradient: "from-blue-700 via-indigo-800 to-violet-900",
    backdropGradient: "from-blue-950 to-black",
    genre: ["Fantasy", "Romance"],
    year: 2023,
    maturityRating: "U/A 13+",
    matchPercentage: 93,
    seasons: 2,
  },
  {
    id: "golden-hour-diaries",
    title: "Golden Hour Diaries",
    description: "Life looks different when the sun is setting.",
    thumbnailUrl: "https://picsum.photos/seed/golden/640/360",
    backdropUrl: "https://picsum.photos/seed/golden-bd/1920/1080",
    thumbnailGradient: "from-orange-500 via-rose-600 to-red-700",
    backdropGradient: "from-orange-950 to-black",
    genre: ["Lifestyle", "Drama"],
    year: 2024,
    maturityRating: "U",
    matchPercentage: 90,
    seasons: 1,
  },
  {
    id: "the-handwritten-letters",
    title: "The Handwritten Letters",
    description: "In a digital world, pen and paper still carry the deepest words.",
    thumbnailUrl: "https://picsum.photos/seed/letters/640/360",
    backdropUrl: "https://picsum.photos/seed/letters-bd/1920/1080",
    thumbnailGradient: "from-stone-600 via-neutral-700 to-zinc-800",
    backdropGradient: "from-stone-950 to-black",
    genre: ["Drama", "Romance"],
    year: 2023,
    maturityRating: "U/A 13+",
    matchPercentage: 86,
    seasons: 1,
  },
  {
    id: "monsoon-melodies",
    title: "Monsoon Melodies",
    description: "Rain brings out the best love songs.",
    thumbnailUrl: "https://picsum.photos/seed/monsoon/640/360",
    backdropUrl: "https://picsum.photos/seed/monsoon-bd/1920/1080",
    thumbnailGradient: "from-cyan-700 via-sky-800 to-blue-900",
    backdropGradient: "from-cyan-950 to-black",
    genre: ["Musical", "Romance"],
    year: 2024,
    maturityRating: "U",
    matchPercentage: 88,
    seasons: 1,
  },
  {
    id: "rooftop-stories",
    title: "Rooftop Stories",
    description: "The city looks different from up here.",
    thumbnailUrl: "https://picsum.photos/seed/rooftop/640/360",
    backdropUrl: "https://picsum.photos/seed/rooftop-bd/1920/1080",
    thumbnailGradient: "from-slate-600 via-gray-700 to-zinc-900",
    backdropGradient: "from-slate-950 to-black",
    genre: ["Drama", "Urban"],
    year: 2024,
    maturityRating: "U/A 16+",
    matchPercentage: 84,
    seasons: 2,
  },
  {
    id: "the-comfort-zone",
    title: "The Comfort Zone",
    description: "Sometimes the best adventures happen at home.",
    thumbnailUrl: "https://picsum.photos/seed/comfort/640/360",
    backdropUrl: "https://picsum.photos/seed/comfort-bd/1920/1080",
    thumbnailGradient: "from-rose-400 via-pink-600 to-fuchsia-800",
    backdropGradient: "from-rose-950 to-black",
    genre: ["Comedy", "Slice of Life"],
    year: 2024,
    maturityRating: "U",
    matchPercentage: 92,
    seasons: 1,
  },
  {
    id: "festival-of-lights",
    title: "Festival of Lights",
    description: "Celebrations that bring people closer together.",
    thumbnailUrl: "https://picsum.photos/seed/festival/640/360",
    backdropUrl: "https://picsum.photos/seed/festival-bd/1920/1080",
    thumbnailGradient: "from-yellow-500 via-amber-600 to-orange-700",
    backdropGradient: "from-yellow-950 to-black",
    genre: ["Cultural", "Drama"],
    year: 2023,
    maturityRating: "U",
    matchPercentage: 85,
    seasons: 1,
  },
  {
    id: "train-of-thoughts",
    title: "Train of Thoughts",
    description: "Each journey begins with a single step onto the platform.",
    thumbnailUrl: "https://picsum.photos/seed/train/640/360",
    backdropUrl: "https://picsum.photos/seed/train-bd/1920/1080",
    thumbnailGradient: "from-gray-600 via-zinc-700 to-neutral-900",
    backdropGradient: "from-gray-950 to-black",
    genre: ["Drama", "Thriller"],
    year: 2024,
    maturityRating: "U/A 16+",
    matchPercentage: 82,
    seasons: 3,
  },
  {
    id: "the-playlist",
    title: "The Playlist",
    description: "Every relationship has a soundtrack.",
    thumbnailUrl: "https://picsum.photos/seed/playlist/640/360",
    backdropUrl: "https://picsum.photos/seed/playlist-bd/1920/1080",
    thumbnailGradient: "from-teal-600 via-emerald-700 to-green-800",
    backdropGradient: "from-teal-950 to-black",
    genre: ["Musical", "Romance"],
    year: 2024,
    maturityRating: "U/A 13+",
    matchPercentage: 94,
    seasons: 1,
  },
  {
    id: "unfiltered-love",
    title: "Unfiltered Love",
    description: "Love without filters, edits, or pretense.",
    thumbnailUrl: "https://picsum.photos/seed/unfiltered/640/360",
    backdropUrl: "https://picsum.photos/seed/unfiltered-bd/1920/1080",
    thumbnailGradient: "from-red-600 via-rose-700 to-pink-800",
    backdropGradient: "from-red-950 to-black",
    genre: ["Romance", "Reality"],
    year: 2024,
    maturityRating: "U/A 13+",
    matchPercentage: 96,
    seasons: 1,
  },
  {
    id: "secret-garden",
    title: "Secret Garden",
    description: "A hidden oasis in the heart of the city.",
    thumbnailUrl: "https://picsum.photos/seed/garden/640/360",
    backdropUrl: "https://picsum.photos/seed/garden-bd/1920/1080",
    thumbnailGradient: "from-green-600 via-lime-700 to-emerald-800",
    backdropGradient: "from-green-950 to-black",
    genre: ["Fantasy", "Drama"],
    year: 2023,
    maturityRating: "U",
    matchPercentage: 83,
    seasons: 2,
  },
]

// ============================================================
// ALL SERIES (combined for search)
// ============================================================
export const allSeries: Series[] = [chiyaGanduSeries, ...placeholderSeries]

// ============================================================
// EPISODES FOR CHIYA GANDU
// ============================================================
export const chiyaGanduEpisodes: Episode[] = [
  {
    id: "chiya-gandu-s1-e01",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 1,
    title: "First Smile",
    description:
      "The moment that started it all. A chance encounter, a nervous glance, and a smile that changed everything forever.",
    duration: "24m",
    thumbnailUrl: "https://picsum.photos/seed/ep01/640/360",
    thumbnailGradient: "from-rose-500 to-red-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_01/preview",
    isNew: false,
  },
  {
    id: "chiya-gandu-s1-e02",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 2,
    title: "Coffee Date Mornings",
    description:
      "Cozy cafe moments together, where the warmth of the coffee is nothing compared to the warmth of the company.",
    duration: "28m",
    thumbnailUrl: "https://picsum.photos/seed/ep02/640/360",
    thumbnailGradient: "from-amber-600 to-yellow-900",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_02/preview",
    isNew: false,
  },
  {
    id: "chiya-gandu-s1-e03",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 3,
    title: "Sunset Walk",
    description:
      "Golden hour stroll at the park, where long shadows and golden light paint the perfect backdrop for love.",
    duration: "22m",
    thumbnailUrl: "https://picsum.photos/seed/ep03/640/360",
    thumbnailGradient: "from-orange-500 to-rose-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_03/preview",
    isNew: false,
  },
  {
    id: "chiya-gandu-s1-e04",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 4,
    title: "Kitchen Adventures",
    description:
      "Cooking chaos and laughter. The recipe might be a disaster, but the memories are five-star worthy.",
    duration: "26m",
    thumbnailUrl: "https://picsum.photos/seed/ep04/640/360",
    thumbnailGradient: "from-red-500 to-orange-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_04/preview",
    isNew: false,
  },
  {
    id: "chiya-gandu-s1-e05",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 5,
    title: "Rainy Day In",
    description:
      "Blanket fort and movie marathon. The rain outside makes the cozy warmth inside even more perfect.",
    duration: "31m",
    thumbnailUrl: "https://picsum.photos/seed/ep05/640/360",
    thumbnailGradient: "from-blue-500 to-indigo-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_05/preview",
    isNew: false,
  },
  {
    id: "chiya-gandu-s1-e06",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 6,
    title: "Birthday Surprise",
    description:
      "The secret party planning, the hidden gifts, and the look on their face when it all comes together.",
    duration: "29m",
    thumbnailUrl: "https://picsum.photos/seed/ep06/640/360",
    thumbnailGradient: "from-pink-500 to-fuchsia-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_06/preview",
    isNew: false,
  },
  {
    id: "chiya-gandu-s1-e07",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 7,
    title: "Beach Day",
    description:
      "Waves, sand, and silly photos. Salt in the air, sand in the shoes, and love in every moment.",
    duration: "25m",
    thumbnailUrl: "https://picsum.photos/seed/ep07/640/360",
    thumbnailGradient: "from-cyan-500 to-blue-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_07/preview",
    isNew: true,
  },
  {
    id: "chiya-gandu-s1-e08",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 8,
    title: "Late Night Talks",
    description:
      "Deep conversations under the stars. The world is quiet, and every whispered word feels like a secret.",
    duration: "33m",
    thumbnailUrl: "https://picsum.photos/seed/ep08/640/360",
    thumbnailGradient: "from-indigo-600 to-slate-900",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_08/preview",
    isNew: true,
  },
  {
    id: "chiya-gandu-s1-e09",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 9,
    title: "Festival Lights",
    description:
      "Dancing through the night market. Fairy lights overhead, street food in hand, and pure joy in the air.",
    duration: "27m",
    thumbnailUrl: "https://picsum.photos/seed/ep09/640/360",
    thumbnailGradient: "from-yellow-500 to-amber-800",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_09/preview",
    isNew: true,
  },
  {
    id: "chiya-gandu-s1-e10",
    seriesId: "chiya-gandu",
    seasonNumber: 1,
    episodeNumber: 10,
    title: "Our Song",
    description:
      "The playlist that tells our story. Every song a chapter, every melody a memory, every beat a heartbeat shared.",
    duration: "35m",
    thumbnailUrl: "https://picsum.photos/seed/ep10/640/360",
    thumbnailGradient: "from-rose-600 to-red-900",
    videoUrl: "https://drive.google.com/file/d/PLACEHOLDER_VIDEO_ID_10/preview",
    isNew: true,
  },
]

// ============================================================
// CONTENT ROWS FOR HOME PAGE
// ============================================================
export const contentRows: ContentRow[] = [
  {
    id: "continue-watching",
    title: "Continue Watching",
    items: [
      chiyaGanduSeries,
      placeholderSeries[0],
      placeholderSeries[4],
      placeholderSeries[9],
      placeholderSeries[12],
      placeholderSeries[2],
    ],
  },
  {
    id: "trending-now",
    title: "Trending Now",
    items: [
      placeholderSeries[13],
      chiyaGanduSeries,
      placeholderSeries[3],
      placeholderSeries[7],
      placeholderSeries[1],
      placeholderSeries[10],
      placeholderSeries[5],
      placeholderSeries[8],
    ],
  },
  {
    id: "popular-on-chiyaflix",
    title: "Popular on ChiyaFlix",
    items: [
      placeholderSeries[2],
      placeholderSeries[6],
      chiyaGanduSeries,
      placeholderSeries[11],
      placeholderSeries[0],
      placeholderSeries[14],
      placeholderSeries[4],
      placeholderSeries[9],
    ],
  },
  {
    id: "romantic-moments",
    title: "Romantic Moments",
    items: [
      chiyaGanduSeries,
      placeholderSeries[4],
      placeholderSeries[13],
      placeholderSeries[2],
      placeholderSeries[12],
      placeholderSeries[6],
      placeholderSeries[7],
    ],
  },
  {
    id: "new-releases",
    title: "New Releases",
    items: [
      placeholderSeries[5],
      placeholderSeries[1],
      chiyaGanduSeries,
      placeholderSeries[8],
      placeholderSeries[3],
      placeholderSeries[10],
      placeholderSeries[9],
      placeholderSeries[14],
    ],
  },
  {
    id: "my-list",
    title: "My List",
    items: [
      chiyaGanduSeries,
      placeholderSeries[0],
      placeholderSeries[13],
      placeholderSeries[4],
    ],
  },
]

// ============================================================
// HELPER FUNCTIONS
// ============================================================
export function getSeriesById(id: string): Series | undefined {
  return allSeries.find((s) => s.id === id)
}

export function getEpisodesBySeriesId(seriesId: string): Episode[] {
  if (seriesId === "chiya-gandu") return chiyaGanduEpisodes
  return []
}

export function getEpisodeById(episodeId: string): Episode | undefined {
  return chiyaGanduEpisodes.find((e) => e.id === episodeId)
}

export function searchSeries(query: string): Series[] {
  const lower = query.toLowerCase()
  return allSeries.filter(
    (s) =>
      s.title.toLowerCase().includes(lower) ||
      s.description.toLowerCase().includes(lower) ||
      s.genre.some((g) => g.toLowerCase().includes(lower)) ||
      (s.tags && s.tags.some((t) => t.toLowerCase().includes(lower)))
  )
}

export function getNextEpisode(currentEpisodeId: string): Episode | undefined {
  const currentIndex = chiyaGanduEpisodes.findIndex(
    (e) => e.id === currentEpisodeId
  )
  if (currentIndex === -1 || currentIndex >= chiyaGanduEpisodes.length - 1)
    return undefined
  return chiyaGanduEpisodes[currentIndex + 1]
}

export function getPreviousEpisode(
  currentEpisodeId: string
): Episode | undefined {
  const currentIndex = chiyaGanduEpisodes.findIndex(
    (e) => e.id === currentEpisodeId
  )
  if (currentIndex <= 0) return undefined
  return chiyaGanduEpisodes[currentIndex - 1]
}
