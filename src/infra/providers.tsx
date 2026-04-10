'use client'

import { ReactNode, Suspense } from 'react'

import { Toaster } from '@shadcn/sonner'
import { TooltipProvider } from '@shadcn/tooltip'

import { ThemeProvider } from '@providers/theme.provider'
import { QueryProvider } from '@providers/query-provider'
import { I18nProvider } from '@providers/i18n.provider'

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
      <I18nProvider>
        <QueryProvider>
          <ThemeProvider
            scriptProps={scriptProps}
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster position="top-right" />
          </ThemeProvider>
        </QueryProvider>
      </I18nProvider>
    </Suspense>
  )
}
