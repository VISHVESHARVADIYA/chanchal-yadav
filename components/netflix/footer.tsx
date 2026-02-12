import Link from "next/link"

const footerLinks = [
  ["FAQ", "Help Center", "Account", "Media Center"],
  ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
  ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
  ["Speed Test", "Legal Notices", "Only on ChiyaFlix", "Ad Choices"],
]

export function Footer() {
  return (
    <footer className="px-3 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12 mt-8 md:mt-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-muted-foreground mb-4">
          Questions? Call 000-800-919-1694
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {footerLinks.map((col, colIdx) =>
            col.map((label) => (
              <Link
                key={`${colIdx}-${label}`}
                href="#"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                {label}
              </Link>
            ))
          )}
        </div>
        <p className="text-xs text-muted-foreground/60">
          Made with love - ChiyaFlix
        </p>
      </div>
    </footer>
  )
}
