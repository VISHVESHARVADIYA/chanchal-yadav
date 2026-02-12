"use client"

import type { Episode } from "@/lib/types"

interface VideoPlayerProps {
  episode: Episode
}

export function VideoPlayer({ episode }: VideoPlayerProps) {
  const isPlaceholder = episode.videoUrl.includes("PLACEHOLDER")

  return (
    <div className="relative w-full max-w-[1920px] mx-auto aspect-video bg-background">
      {isPlaceholder ? (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${episode.thumbnailGradient} flex flex-col items-center justify-center gap-4 p-4 text-center`}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/20 backdrop-blur-sm border-2 border-foreground/40 flex items-center justify-center">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-foreground ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div>
            <p className="text-foreground font-semibold text-base md:text-lg">
              {episode.title}
            </p>
            <p className="text-foreground/70 text-xs md:text-sm mt-1">
              Replace the placeholder URL in lib/data.ts with your Google Drive
              link
            </p>
            <p className="text-foreground/50 text-[10px] md:text-xs mt-2 font-mono">
              {`Episode ${episode.episodeNumber} - ${episode.duration}`}
            </p>
          </div>
        </div>
      ) : (
        <iframe
          src={episode.videoUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`${episode.title} - Episode ${episode.episodeNumber}`}
        />
      )}
    </div>
  )
}
