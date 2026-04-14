import type { Metadata } from 'next'

import { NotFound } from '@/presentation/layouts/not-found'

import { DEFAULT_LOCALE } from '@/core/constants'

import { getLocalMessages, LayoutMessages, resolveLocale } from '@/infra/i18n'

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
  const locale = resolveLocale(DEFAULT_LOCALE)
  const messages = getLocalMessages<LayoutMessages>({
    locale,
    messages: LayoutMessages,
  })
  return <NotFound messages={messages} />
}
