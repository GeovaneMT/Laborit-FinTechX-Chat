import type { Metadata } from 'next'

import { NotFound } from '@/presentation/layouts/not-found'

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
