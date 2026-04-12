import type { ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@utils/cn'

type Props = {
  children: ReactNode
  nav: { href: string; label: string }[]
}

type HeaderProps = {
  children: ReactNode
  className?: string
}

export const Header = ({ children, className }: HeaderProps) => {
  return (
    <header className={cn('border-b', className)}>
      <div className="flex h-16 items-center px-4">Header {children}</div>
    </header>
  )
}

export function PrivateLayout({ children, nav }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="gap-4">
        <nav className="flex flex-1 items-center gap-3 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-(--color-muted-foreground) hover:text-(--color-foreground)"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Header>
      <main className="flex-1 px-4 py-6">{children}</main>
    </div>
  )
}
