import { HeroBanner } from "@/components/netflix/hero-banner"
import { ContentRow } from "@/components/netflix/content-row"
import { contentRows } from "@/lib/data"

export default function BrowsePage() {
  return (
    <main>
      <HeroBanner />
      <div className="-mt-16 md:-mt-24 lg:-mt-32 relative z-10">
        {contentRows.map((row) => (
          <ContentRow key={row.id} row={row} />
        ))}
      </div>
    </main>
  )
}
