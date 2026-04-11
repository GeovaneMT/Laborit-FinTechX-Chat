'use client'

import { DotPattern } from '@shadcn/dot-pattern'
import { LightRays } from '@shadcn/light-rays'
import { ScrollArea } from '@ui/scroll-area'
import { cn } from '@utils/cn'
import { useRef } from 'react'


interface ContentShellProps {
  children: React.ReactNode
}

export function ContentShell({ children }: Readonly<ContentShellProps>) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className="flex h-screen flex-col">
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

      {/* <NavigationMenuHeader className="z-50" /> */}

      <section className="mb-8 h-full overflow-hidden p-8 pb-0">
        {/* <SectionPages className="relative mx-auto h-full max-w-7xl rounded-md border bg-cover p-0"> */}
        {/* <ScrollContextProvider value={scrollRef}> */}
        <ScrollArea ref={scrollRef} type="scroll" className="h-full">
          {children}
          {/* <Footer /> */}
        </ScrollArea>
        {/* </ScrollContextProvider> */}
        {/* </SectionPages> */}
      </section>
    </main>
  )
}
