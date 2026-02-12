import type { Series } from "@/lib/types"
import { TitleCard } from "./title-card"

interface MoreLikeThisProps {
  series: Series[]
}

export function MoreLikeThis({ series }: MoreLikeThisProps) {
  if (series.length === 0) return null

  return (
    <section className="px-3 md:px-8 lg:px-16 pb-8 md:pb-12">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 md:mb-6">
        More Like This
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
        {series.map((s) => (
          <TitleCard key={s.id} series={s} fillWidth />
        ))}
      </div>
    </section>
  )
}
