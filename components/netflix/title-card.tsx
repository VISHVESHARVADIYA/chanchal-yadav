"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import type { Series } from "@/lib/types"
import { cn } from "@/lib/utils"

interface TitleCardProps {
  series: Series
  /** When used in a grid (search, more-like-this), set to true so the card fills its column */
  fillWidth?: boolean
}

export function TitleCard({ series, fillWidth = false }: TitleCardProps) {
  return (
    <Link
      href={`/series/${series.id}`}
      className={cn(
        "group relative snap-start",
        fillWidth
          ? "w-full"
          : "flex-shrink-0 w-[140px] sm:w-[170px] md:w-[200px] lg:w-[240px] xl:w-[280px]"
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={series.thumbnailUrl}
          alt={series.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out lg:group-hover:scale-110"
        />

        {/* Title text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-3">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <p className="relative z-10 text-[11px] sm:text-xs md:text-sm font-semibold text-white leading-tight line-clamp-2 drop-shadow-lg">
            {series.title}
          </p>
        </div>

        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/40 flex items-center justify-center">
            <Play className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Metadata below the card */}
      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="text-[10px] md:text-[11px] text-green-500 font-semibold">
          {series.matchPercentage}%
        </span>
        <span className="text-[10px] md:text-[11px] text-muted-foreground border border-muted-foreground/40 px-1 leading-none py-0.5">
          {series.maturityRating}
        </span>
        <span className="text-[10px] md:text-[11px] text-muted-foreground">
          {series.year}
        </span>
      </div>
    </Link>
  )
}
