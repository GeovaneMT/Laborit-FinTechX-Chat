'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { cn } from '@utils/cn'

const NAV_ITEMS: Array<{
  href: string
  label: string
  segment: string
}> = [
  { href: '', label: 'Home', segment: '' },
  { href: 'dashboard', label: 'Dashboard', segment: 'dashboard' },
  { href: 'chat', label: 'Chat', segment: 'chat' },
  { href: 'profile', label: 'Profile', segment: 'profile' },
  { href: 'preferences', label: 'Preferences', segment: 'preferences' },
]

type HeaderLinkProps = {
  href: string
  label: string
  isActive: boolean
}

function HeaderLink({ href, label, isActive }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'focus-visible:ring-ring rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none',
        isActive
          ? 'bg-muted text-foreground'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/70',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}

export function SiteHeader() {
  const segments = useSelectedLayoutSegments()
  const currentSegment = segments.length > 0 ? segments[0] : ''

  return (
    <header className="border-border bg-background/90 sticky top-0 z-40 border-b shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-foreground text-lg font-semibold">
            FinTechX
          </Link>
          <p className="text-muted-foreground text-sm">
            Fast, accessible route navigation
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {NAV_ITEMS.map((item) => (
            <HeaderLink
              key={item.href || 'home'}
              href={item.href ? `/${item.href}` : '/'}
              label={item.label}
              isActive={currentSegment === item.segment}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}
