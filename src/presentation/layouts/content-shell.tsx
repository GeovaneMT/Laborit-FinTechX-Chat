'use client'

import { useRef } from 'react'

import { SiteFooter } from '@layouts/site-footer'
import { SiteHeader } from '@layouts/site-header'

import { ScrollContextProvider } from '@/presentation/pattern/contexts/scroll-virtualization-context'

import { ScrollArea } from '@ui/scroll-area'

import type { LayoutMessages } from '@/infra/i18n'

interface ContentShellProps {
  children: React.ReactNode
  messages: LayoutMessages
}

export function ContentShell({
  messages,
  children,
}: Readonly<ContentShellProps>) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className="flex h-screen flex-col">
      <SiteHeader messages={messages} />

      <section className="h-full overflow-hidden">
        <ScrollContextProvider value={scrollRef}>
          <ScrollArea ref={scrollRef} type="scroll" className="h-full">
            {children}
            <SiteFooter messages={messages} />
          </ScrollArea>
        </ScrollContextProvider>
      </section>
    </main>
  )
}
