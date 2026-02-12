"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, Plus, ThumbsUp, Share2, ChevronDown, ChevronUp } from "lucide-react"
import type { Series } from "@/lib/types"

interface SeriesHeaderProps {
  series: Series
  hasEpisodes: boolean
}

export function SeriesHeader({ series, hasEpisodes }: SeriesHeaderProps) {
  const [expanded, setExpanded] = useState(false)

  const firstEpisodeId =
    series.id === "chiya-gandu" ? "chiya-gandu-s1-e01" : undefined

  return (
    <section className="relative">
      {/* Backdrop */}
      <div className="relative h-[40vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={series.backdropUrl}
          alt={series.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 -mt-32 md:-mt-40 lg:-mt-48 px-3 md:px-8 lg:px-16 pb-6 md:pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 md:mb-4 text-balance">
          {series.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-5">
          <span className="text-sm md:text-base text-green-500 font-semibold">
            {series.matchPercentage}% Match
          </span>
          <span className="text-sm md:text-base text-muted-foreground">
            {series.year}
          </span>
          <span className="text-[10px] md:text-xs border border-muted-foreground/50 text-muted-foreground px-1.5 py-0.5">
            {series.maturityRating}
          </span>
          <span className="text-sm md:text-base text-muted-foreground">
            {series.seasons} Season{series.seasons > 1 ? "s" : ""}
          </span>
          <span className="text-[10px] md:text-xs border border-muted-foreground/50 text-muted-foreground px-1.5 py-0.5 rounded-sm">
            HD
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
          {firstEpisodeId && (
            <Link
              href={`/watch/${firstEpisodeId}`}
              className="flex items-center justify-center gap-2 bg-foreground text-background font-semibold
                px-5 py-2.5 md:px-7 md:py-3 rounded text-sm md:text-base
                hover:bg-foreground/80 transition-colors min-h-[44px]"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Play</span>
            </Link>
          )}
          <button
            className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-muted/50 text-foreground
              w-11 h-11 md:w-auto md:h-auto md:px-4 md:py-2.5 rounded-full md:rounded
              hover:bg-muted transition-colors min-h-[44px]"
            aria-label="Add to My List"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden md:inline text-sm">My List</span>
          </button>
          <button
            className="flex items-center justify-center bg-muted/50 text-foreground
              w-11 h-11 rounded-full hover:bg-muted transition-colors"
            aria-label="Like"
          >
            <ThumbsUp className="w-5 h-5" />
          </button>
          <button
            className="flex items-center justify-center bg-muted/50 text-foreground
              w-11 h-11 rounded-full hover:bg-muted transition-colors"
            aria-label="Share"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-4 md:mb-6">
          <p
            className={`text-sm md:text-base text-foreground/90 leading-relaxed ${
              expanded ? "" : "line-clamp-3 md:line-clamp-4 lg:line-clamp-none"
            }`}
          >
            {series.longDescription || series.description}
          </p>
          <button
            className="lg:hidden text-xs text-muted-foreground mt-1 flex items-center gap-1 min-h-[44px]"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                More <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        </div>

        {/* Cast and tags */}
        {(series.cast || series.genre || series.tags) && (
          <div className="flex flex-col gap-1 text-xs md:text-sm">
            {series.cast && series.cast.length > 0 && (
              <p>
                <span className="text-muted-foreground">Cast: </span>
                <span className="text-foreground/80">
                  {series.cast.join(", ")}
                </span>
              </p>
            )}
            <p>
              <span className="text-muted-foreground">Genres: </span>
              <span className="text-foreground/80">
                {series.genre.join(", ")}
              </span>
            </p>
            {series.tags && series.tags.length > 0 && (
              <p>
                <span className="text-muted-foreground">This show is: </span>
                <span className="text-foreground/80">
                  {series.tags.join(", ")}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
