'use client'

import type { ReactNode} from 'react';
import { Suspense } from 'react'

import { Toaster } from '@shadcn/sonner'
import { TooltipProvider } from '@shadcn/tooltip'

import { QueryProvider } from '@providers/query-provider'
import { ThemeProvider } from '@providers/theme.provider'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const scriptProps =
    typeof window === 'undefined'
      ? undefined
      : ({ type: 'application/json' } as const)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryProvider>
        <ThemeProvider
          scriptProps={scriptProps}
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
      </QueryProvider>
    </Suspense>
  )
}
