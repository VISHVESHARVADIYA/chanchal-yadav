"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Bell, ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileName, setProfileName] = useState("User")

  useEffect(() => {
    const stored = localStorage.getItem("chiyaflix-profile")
    if (stored) {
      try {
        const p = JSON.parse(stored)
        setProfileName(p.name || "User")
      } catch {
        /* ignore */
      }
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-14 md:h-16 lg:h-[68px]",
          isScrolled ? "bg-background" : "bg-gradient-to-b from-background/80 to-transparent"
        )}
      >
        <div className="flex items-center justify-between h-full px-3 md:px-8 lg:px-16">
          {/* Left section */}
          <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
            <Link href="/browse" className="flex-shrink-0">
              <span className="text-primary font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight">
                <span className="hidden sm:inline">ChiyaFlix</span>
                <span className="sm:hidden">CF</span>
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href="/browse"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/series/chiya-gandu"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Series
              </Link>
              <Link
                href="/browse"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                My List
              </Link>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop search */}
            <div className="hidden md:flex items-center">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="flex items-center bg-background border border-foreground px-3 py-1.5 gap-2 animate-fade-in">
                    <Search className="w-4 h-4 text-foreground flex-shrink-0" />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Titles, people, genres"
                      className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40 lg:w-56"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false)
                        setSearchQuery("")
                      }}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center justify-center w-10 h-10"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5 text-foreground" />
                </button>
              )}
            </div>

            {/* Mobile search icon */}
            <Link
              href="/search"
              className="md:hidden flex items-center justify-center w-10 h-10"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-foreground" />
            </Link>

            <button
              className="hidden md:flex items-center justify-center w-10 h-10"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-foreground" />
            </button>

            <button
              onClick={() => router.push("/profiles")}
              className="flex items-center gap-1 group min-h-[44px]"
              aria-label="Switch profile"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold text-primary-foreground">
                  {profileName.charAt(0)}
                </span>
              </div>
              <ChevronDown className="hidden md:block w-4 h-4 text-foreground group-hover:rotate-180 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        profileName={profileName}
      />
    </>
  )
}
