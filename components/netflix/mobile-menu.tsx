"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  profileName: string
}

export function MobileMenu({ open, onClose, profileName }: MobileMenuProps) {
  const router = useRouter()

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 z-[70] w-[280px] bg-background border-r border-border transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-primary font-extrabold text-xl tracking-tight">
            ChiyaFlix
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-1">
          <div className="flex items-center gap-3 p-3 mb-4 rounded bg-accent">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">
                {profileName.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {profileName}
              </p>
              <button
                onClick={() => {
                  onClose()
                  router.push("/profiles")
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Switch Profile
              </button>
            </div>
          </div>

          <Link
            href="/browse"
            onClick={onClose}
            className="flex items-center px-3 py-3 text-sm font-medium text-foreground hover:bg-accent rounded transition-colors min-h-[44px]"
          >
            Home
          </Link>
          <Link
            href="/series/chiya-gandu"
            onClick={onClose}
            className="flex items-center px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors min-h-[44px]"
          >
            Series
          </Link>
          <Link
            href="/search"
            onClick={onClose}
            className="flex items-center px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors min-h-[44px]"
          >
            Search
          </Link>
          <Link
            href="/browse"
            onClick={onClose}
            className="flex items-center px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors min-h-[44px]"
          >
            My List
          </Link>
        </div>
      </div>
    </>
  )
}
