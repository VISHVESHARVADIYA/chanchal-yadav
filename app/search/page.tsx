"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Search, ArrowLeft } from "lucide-react"
import { searchSeries, allSeries } from "@/lib/data"
import { TitleCard } from "@/components/netflix/title-card"
import { Navbar } from "@/components/netflix/navbar"
import { Footer } from "@/components/netflix/footer"

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh flex items-center justify-center">
          <span className="text-primary font-extrabold text-2xl animate-pulse">
            Loading...
          </span>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchSeries(query)
  }, [query])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.replace(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-14 md:pt-16 lg:pt-[68px]">
        {/* Search input area */}
        <div className="px-3 md:px-8 lg:px-16 pt-6 pb-4 md:pt-8 md:pb-6">
          <div className="flex items-center gap-3 mb-4 md:hidden">
            <Link
              href="/browse"
              className="flex items-center justify-center w-10 h-10"
              aria-label="Back to browse"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <span className="text-lg font-semibold text-foreground">
              Search
            </span>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="flex items-center bg-card border border-border rounded px-4 py-3 gap-3">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  router.replace(
                    `/search?q=${encodeURIComponent(e.target.value)}`
                  )
                }}
                placeholder="Search for series, genres, people..."
                className="flex-1 bg-transparent text-base md:text-lg text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="px-3 md:px-8 lg:px-16 pb-12">
          {!query.trim() ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="w-12 h-12 text-muted-foreground/40 mb-4" />
              <p className="text-muted-foreground text-sm md:text-base">
                Search for a series, movie, or genre...
              </p>
              {/* Popular suggestions */}
              <div className="mt-8 w-full max-w-4xl">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 text-left">
                  Popular Searches
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                  {allSeries.slice(0, 10).map((s) => (
                    <TitleCard key={s.id} series={s} fillWidth />
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-foreground text-lg md:text-xl font-medium mb-2">
                {`No results for "${query}"`}
              </p>
              <p className="text-muted-foreground text-sm md:text-base max-w-md">
                Try searching for a different title, genre, or person.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                {results.length} result{results.length !== 1 ? "s" : ""} for
                {` "${query}"`}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                {results.map((s) => (
                  <TitleCard key={s.id} series={s} fillWidth />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
