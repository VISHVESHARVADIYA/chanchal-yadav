"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, SkipForward, SkipBack } from "lucide-react"
import { getEpisodeById, getNextEpisode, getPreviousEpisode, getSeriesById } from "@/lib/data"
import { VideoPlayer } from "@/components/netflix/video-player"
import { useEffect, useState } from "react"

export default function WatchPage() {
  const params = useParams()
  const router = useRouter()
  const episodeId = params.episodeId as string
  const [showControls, setShowControls] = useState(true)

  const episode = getEpisodeById(episodeId)
  const nextEpisode = episode ? getNextEpisode(episodeId) : undefined
  const prevEpisode = episode ? getPreviousEpisode(episodeId) : undefined
  const series = episode ? getSeriesById(episode.seriesId) : undefined

  useEffect(() => {
    if (!episode) {
      router.replace("/browse")
      return
    }
    // Auto-hide controls after 4s on desktop
    const timer = setTimeout(() => setShowControls(false), 4000)
    return () => clearTimeout(timer)
  }, [episode, router])

  useEffect(() => {
    function handleMove() {
      setShowControls(true)
    }
    function handleLeave() {
      setTimeout(() => setShowControls(false), 3000)
    }
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchstart", handleMove)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchstart", handleLeave)
    }
  }, [])

  if (!episode || !series) return null

  return (
    <main
      className="relative min-h-dvh bg-background flex flex-col"
      onClick={() => setShowControls(true)}
    >
      {/* Top bar */}
      <div
        className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 md:px-6 py-3 md:py-4
          bg-gradient-to-b from-background/80 to-transparent transition-opacity duration-300
          ${showControls ? "opacity-100" : "opacity-0 pointer-events-none lg:opacity-0 lg:pointer-events-none"}`}
      >
        <Link
          href={`/series/${series.id}`}
          className="flex items-center gap-2 md:gap-3 min-h-[44px] group"
          aria-label="Back to series"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          <div className="hidden md:block">
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Back to {series.title}
            </p>
          </div>
        </Link>
        <div className="text-right">
          <p className="text-xs md:text-sm text-foreground font-medium">
            S{episode.seasonNumber}:E{episode.episodeNumber}
          </p>
          <p className="text-xs text-muted-foreground hidden md:block">
            {episode.title}
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="flex-1 flex items-center justify-center">
        <VideoPlayer episode={episode} />
      </div>

      {/* Bottom controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 px-3 md:px-6 py-3 md:py-4
          bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-300
          ${showControls ? "opacity-100" : "opacity-0 pointer-events-none lg:opacity-0 lg:pointer-events-none"}`}
      >
        {/* Episode title (mobile) */}
        <p className="md:hidden text-sm text-foreground font-medium mb-2 text-center">
          {episode.title}
        </p>

        <div className="flex items-center justify-between gap-3">
          {prevEpisode ? (
            <Link
              href={`/watch/${prevEpisode.id}`}
              className="flex items-center gap-1.5 md:gap-2 text-foreground/80 hover:text-foreground transition-colors min-h-[44px] text-xs md:text-sm"
            >
              <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden md:inline">Previous</span>
            </Link>
          ) : (
            <div />
          )}

          {nextEpisode ? (
            <Link
              href={`/watch/${nextEpisode.id}`}
              className="flex items-center gap-1.5 md:gap-2 bg-foreground text-background font-semibold
                px-4 py-2 md:px-5 md:py-2.5 rounded text-xs md:text-sm
                hover:bg-foreground/80 transition-colors min-h-[44px]"
            >
              <span>Next Episode</span>
              <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          ) : (
            <Link
              href={`/series/${series.id}`}
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors min-h-[44px] text-xs md:text-sm"
            >
              Back to Series
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
