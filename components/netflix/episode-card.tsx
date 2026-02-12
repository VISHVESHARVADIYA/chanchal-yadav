"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import type { Episode } from "@/lib/types"

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/watch/${episode.id}`}
      className="group flex gap-3 md:gap-4 p-3 md:p-4 rounded
        hover:bg-accent/50 transition-colors border-b border-border/30 last:border-b-0"
    >
      {/* Thumbnail */}
      <div className="relative w-28 sm:w-36 md:w-40 lg:w-60 flex-shrink-0 aspect-video rounded overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={episode.thumbnailUrl}
          alt={episode.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Episode number badge */}
        <div className="absolute top-1.5 left-1.5 bg-background/70 backdrop-blur-sm px-1.5 py-0.5 rounded">
          <span className="text-[10px] md:text-xs font-bold text-foreground">
            E{episode.episodeNumber}
          </span>
        </div>
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/30 backdrop-blur-sm border border-foreground/30 flex items-center justify-center">
            <Play className="w-4 h-4 md:w-5 md:h-5 text-foreground fill-current ml-0.5" />
          </div>
        </div>
        {/* New badge */}
        {episode.isNew && (
          <div className="absolute top-2 right-2 bg-primary px-2 py-0.5 rounded">
            <span className="text-[10px] font-bold text-primary-foreground uppercase tracking-wide">
              New
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 py-0.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xs sm:text-sm md:text-base font-medium text-foreground truncate">
            {episode.title}
          </h3>
          <span className="text-[10px] md:text-sm text-muted-foreground flex-shrink-0">
            {episode.duration}
          </span>
        </div>
        <p className="text-[11px] md:text-sm text-muted-foreground mt-0.5 md:mt-1 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>
      </div>
    </Link>
  )
}
