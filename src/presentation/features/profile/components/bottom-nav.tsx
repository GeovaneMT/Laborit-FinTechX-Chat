'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ClockIcon, HomeIcon, LayoutGridIcon, UserIcon } from 'lucide-react'

import { Card } from '@/presentation/ui/shadcn/card'

import { cn } from '@/core/utils/cn'
import { paths } from '@/core/utils/paths'

export function BottomNav() {
  const pathname = usePathname()

  const normalizedPathname = '/' + pathname.split('/').slice(2).join('/')

  const navLinks = [
    { href: paths.onboarding, icon: HomeIcon },
    { href: paths.chat, icon: LayoutGridIcon },
    { href: paths.chatHistory, icon: ClockIcon },
    { href: paths.profile, icon: UserIcon },
  ]

  return (
    <div className="bg-background fixed right-0 bottom-0 left-0 z-50 border-t">
      <Card className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-none px-4 py-6 sm:flex-row">
        <nav className="flex w-full items-center justify-between">
          {navLinks.map(({ href, icon: Icon }) => {
            const isActive =
              normalizedPathname === href ||
              normalizedPathname.startsWith(href + '/')

            return (
              <Link
                key={href}
                href={href}
                className="relative flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs transition"
              >
                <Icon
                  className={cn(
                    'absolute inset-0',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                />
              </Link>
            )
          })}
        </nav>
      </Card>
    </div>
  )
}
