"use client"

import Link from "next/link"
import { Play, Info } from "lucide-react"
import { chiyaGanduSeries } from "@/lib/data"

export function HeroBanner() {
  const series = chiyaGanduSeries

  return (
    <section className="relative w-full h-[56vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
      {/* Backdrop image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={series.backdropUrl}
        alt={series.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom gradient fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-3 md:px-8 lg:px-16 pb-12 md:pb-24 lg:pb-32 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-2 md:mb-4 text-balance leading-tight">
          {series.title}
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-foreground/90 mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 lg:line-clamp-none leading-relaxed">
          {series.longDescription || series.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Link
            href={`/watch/chiya-gandu-s1-e01`}
            className="flex items-center justify-center gap-2 bg-foreground text-background font-semibold
              px-5 py-2.5 md:px-7 md:py-3 rounded text-sm md:text-base lg:text-lg
              hover:bg-foreground/80 transition-colors min-h-[44px]"
          >
            <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
            <span>Play</span>
          </Link>
          <Link
            href={`/series/${series.id}`}
            className="flex items-center justify-center gap-2 bg-muted-foreground/30 text-foreground font-semibold
              px-5 py-2.5 md:px-7 md:py-3 rounded text-sm md:text-base lg:text-lg
              hover:bg-muted-foreground/20 transition-colors min-h-[44px]"
          >
            <Info className="w-5 h-5 md:w-6 md:h-6" />
            <span>More Info</span>
          </Link>
        </div>
      </div>

      {/* Maturity badge */}
      <div className="absolute right-0 bottom-24 md:bottom-32 lg:bottom-40 flex items-center gap-2 bg-background/40 border-l-2 border-foreground/50 px-3 py-1">
        <span className="text-xs md:text-sm text-foreground font-medium">
          {series.maturityRating}
        </span>
      </div>
    </section>
  )
}
