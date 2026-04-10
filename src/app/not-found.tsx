import { cacheLife, cacheTag } from 'next/cache'

import { NotFound } from '@ui/not-found'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'Página não encontrada',
  openGraph: {
    title: 'Página não encontrada',
    description: 'Página não encontrada',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Página não encontrada',
    description: 'Página não encontrada',
  },
}

export default async function NotFoundPage() {
  return <NotFound />
}
