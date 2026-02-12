"use client"

import { useRouter } from "next/navigation"
import { profiles } from "@/lib/data"
import type { Profile } from "@/lib/types"
import { ProfileCard } from "@/components/netflix/profile-card"

export default function ProfilesPage() {
  const router = useRouter()

  function handleProfileSelect(profile: Profile) {
    localStorage.setItem("chiyaflix-profile", JSON.stringify(profile))
    router.push("/browse")
  }

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-4 py-8 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 md:mb-8 lg:mb-10 text-balance text-center">
        {"Who's Watching?"}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onClick={handleProfileSelect}
          />
        ))}
      </div>
      <button
        className="mt-8 md:mt-12 px-6 py-2 border border-muted-foreground/50 text-muted-foreground
          text-sm md:text-base tracking-widest hover:text-foreground hover:border-foreground
          transition-colors min-h-[44px]"
      >
        Manage Profiles
      </button>
    </main>
  )
}
