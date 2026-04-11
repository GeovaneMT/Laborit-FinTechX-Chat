'use client'

import { DotPattern } from '@shadcn/dot-pattern'
import { LightRays } from '@shadcn/light-rays'
import { ScrollArea } from '@ui/scroll-area'
import { SiteFooter } from '@layouts/site-footer'
import { SiteHeader } from '@layouts/site-header'
import { cn } from '@utils/cn'
import { useRef } from 'react'

interface ContentShellProps {
  children: React.ReactNode
}

export function ContentShell({ children }: Readonly<ContentShellProps>) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className="flex min-h-screen flex-col">
      <figure>
        <LightRays
          isStatic
          count={7}
          speed={4}
          length="100vh"
          className="opacity-24"
          color="var(--color-secondary)"
        />
        <DotPattern
          className={cn(
            'opacity-20',
            'mask-[radial-gradient(100vh_circle_at_center,white,transparent)]',
            'sm:mask-[radial-gradient(100vw_circle_at_center,white,transparent)]',
          )}
        />
      </figure>

      <SiteHeader />

      <section className="mb-8 flex-1 overflow-hidden p-8 pb-0">
        <ScrollArea ref={scrollRef} type="scroll" className="h-full">
          {children}
        </ScrollArea>
      </section>

      <SiteFooter />
    </main>
  )
}
