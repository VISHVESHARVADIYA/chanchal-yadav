import { Navbar } from "@/components/netflix/navbar"
import { Footer } from "@/components/netflix/footer"

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-dvh">{children}</div>
      <Footer />
    </>
  )
}
