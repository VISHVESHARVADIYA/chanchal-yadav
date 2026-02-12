"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ContentRow as ContentRowType } from "@/lib/types"
import { TitleCard } from "./title-card"
import { cn } from "@/lib/utils"

interface ContentRowProps {
  row: ContentRowType
}

export function ContentRow({ row }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll, { passive: true })
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.75
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative mb-5 md:mb-8 lg:mb-10">
      <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-foreground mb-1.5 md:mb-3 px-3 md:px-8 lg:px-16">
        {row.title}
      </h2>

      <div className="relative group/row">
        {/* Left arrow (desktop only) */}
        <button
          onClick={() => scroll("left")}
          className={cn(
            "hidden lg:flex absolute left-0 top-0 bottom-0 z-20 w-12 items-center justify-center",
            "bg-background/50 hover:bg-background/70 transition-all",
            canScrollLeft
              ? "opacity-0 group-hover/row:opacity-100"
              : "opacity-0 pointer-events-none"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-1.5 md:gap-3 overflow-x-auto scrollbar-hide px-3 md:px-8 lg:px-16 scroll-smooth snap-x snap-mandatory pb-1"
        >
          {row.items.map((series, i) => (
            <TitleCard key={`${series.id}-${i}`} series={series} />
          ))}
        </div>

        {/* Right arrow (desktop only) */}
        <button
          onClick={() => scroll("right")}
          className={cn(
            "hidden lg:flex absolute right-0 top-0 bottom-0 z-20 w-12 items-center justify-center",
            "bg-background/50 hover:bg-background/70 transition-all",
            canScrollRight
              ? "opacity-0 group-hover/row:opacity-100"
              : "opacity-0 pointer-events-none"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8 text-foreground" />
        </button>
      </div>
    </section>
  )
}
