import Link from 'next/link'

import { APP_NAME } from '@core/constants'
import { cn } from '@utils/cn'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border bg-background/90 text-muted-foreground border-t px-4 py-6 text-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">
          © {year} {APP_NAME}. Built with accessibility and responsive design in
          mind.
        </p>

        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-3 text-xs">
          <Link
            href="/"
            className="hover:text-foreground focus-visible:ring-ring rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            Home
          </Link>
          <Link
            href="/#"
            className="hover:text-foreground focus-visible:ring-ring rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            Terms
          </Link>
          <Link
            href="/#"
            className="hover:text-foreground focus-visible:ring-ring rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
