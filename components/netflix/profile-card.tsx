"use client"

import type { Profile } from "@/lib/types"

interface ProfileCardProps {
  profile: Profile
  onClick: (profile: Profile) => void
}

export function ProfileCard({ profile, onClick }: ProfileCardProps) {
  return (
    <button
      onClick={() => onClick(profile)}
      className="group flex flex-col items-center gap-2 md:gap-3"
      aria-label={`Select profile ${profile.name}`}
    >
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-md overflow-hidden
          ring-0 ring-transparent group-hover:ring-2 group-hover:ring-foreground group-focus-visible:ring-2 group-focus-visible:ring-foreground
          transition-all duration-200 ease-out group-hover:scale-105"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: profile.avatarColor }}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground select-none">
            {profile.avatarInitial}
          </span>
        </div>
        {profile.isKids && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#46D369] text-center py-0.5">
            <span className="text-[10px] font-bold tracking-wider uppercase text-background">
              Kids
            </span>
          </div>
        )}
      </div>
      <span className="text-xs sm:text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
        {profile.name}
      </span>
    </button>
  )
}
