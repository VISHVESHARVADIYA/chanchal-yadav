"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const profile = localStorage.getItem("chiyaflix-profile")
    if (profile) {
      router.replace("/browse")
    } else {
      router.replace("/profiles")
    }
  }, [router])

  return (
    <div className="min-h-dvh flex items-center justify-center">
      <span className="text-primary font-extrabold text-3xl md:text-4xl tracking-tight animate-pulse">
        ChiyaFlix
      </span>
    </div>
  )
}
