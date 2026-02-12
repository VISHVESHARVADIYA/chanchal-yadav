"use client"

import type { Episode } from "@/lib/types"
import { EpisodeCard } from "./episode-card"

interface EpisodeListProps {
  episodes: Episode[]
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <section className="px-3 md:px-8 lg:px-16 pb-6 md:pb-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
          Episodes
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded text-sm text-foreground">
          <span>Season 1</span>
        </div>
      </div>
      <div className="flex flex-col">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  )
}
