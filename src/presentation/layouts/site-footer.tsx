import Link from 'next/link'

import { paths } from '@/core/utils/paths'
import { APP_NAME } from '@core/constants'

import type { LayoutMessages } from '@/infra/i18n'

interface SiteFooterProps {
  messages: LayoutMessages
}

export function SiteFooter({ messages }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border bg-background/90 text-muted-foreground hidden border-t px-4 py-6 text-sm sm:block">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">
          © {year} {APP_NAME}. {messages['footer.copyright']}
        </p>

        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-3 text-xs">
          <Link
            href={paths.onboarding}
            className="hover:text-foreground focus-visible:ring-ring rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            {messages['footer.home']}
          </Link>
          <Link
            href="/#"
            className="hover:text-foreground focus-visible:ring-ring rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            {messages['footer.terms']}
          </Link>
          <Link
            href="/#"
            className="hover:text-foreground focus-visible:ring-ring rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            {messages['footer.privacy']}
          </Link>
        </div>
      </div>
    </footer>
  )
}
