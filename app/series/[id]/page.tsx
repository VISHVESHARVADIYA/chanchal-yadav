import { notFound } from "next/navigation"
import { getSeriesById, getEpisodesBySeriesId, placeholderSeries } from "@/lib/data"
import { SeriesHeader } from "@/components/netflix/series-header"
import { EpisodeList } from "@/components/netflix/episode-list"
import { MoreLikeThis } from "@/components/netflix/more-like-this"
import { Navbar } from "@/components/netflix/navbar"
import { Footer } from "@/components/netflix/footer"

interface SeriesPageProps {
  params: Promise<{ id: string }>
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { id } = await params
  const series = getSeriesById(id)
  if (!series) notFound()

  const episodes = getEpisodesBySeriesId(id)
  const moreLikeThis = placeholderSeries.slice(0, 8)

  return (
    <>
      <Navbar />
      <main className="min-h-dvh">
        <SeriesHeader series={series} hasEpisodes={episodes.length > 0} />
        {episodes.length > 0 && <EpisodeList episodes={episodes} />}
        <MoreLikeThis series={moreLikeThis} />
      </main>
      <Footer />
    </>
  )
}
