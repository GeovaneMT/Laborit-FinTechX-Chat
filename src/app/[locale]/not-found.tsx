import type { Metadata } from 'next'

import { NotFound } from '@/presentation/layouts/not-found'

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

interface NotFoundProps {
  params: Promise<{
    locale: string
  }>
}

export default async function NotFoundPage({ params }: NotFoundProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<LayoutMessages>({
    locale,
    messages: LayoutMessages,
  })
  return <NotFound messages={messages} />
}
