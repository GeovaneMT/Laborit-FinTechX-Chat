'use client'

import dynamic from 'next/dynamic'
import type { ThemeProviderProps } from 'next-themes'

const NextThemesProvider = dynamic<ThemeProviderProps>(
  () => import('next-themes').then((mod) => mod.ThemeProvider),
  { ssr: false },
)

export const ThemeProvider = (props: ThemeProviderProps) => (
  <NextThemesProvider {...props} />
)
