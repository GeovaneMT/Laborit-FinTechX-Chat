import type { Metadata } from 'next'

import { fontPrimary, fontSecondary } from '@styles/fonts'

import { NotFound } from '@/presentation/layouts/not-found'

import { cn } from '@/core/utils/cn'

import { getLocalMessages, LayoutMessages, resolveLocale } from '@/infra/i18n'
import { Providers } from '@/infra/providers'

import '@styles/globals.css'

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

export default async function GlobalNotFound({ params }: NotFoundProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<LayoutMessages>({
    locale,
    messages: LayoutMessages,
  })

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={cn('font-sans', fontPrimary.variable, fontSecondary.variable)}
    >
      <body
        className={`bg-background antialiased transition-all duration-200 ease-in-out`}
      >
        <Providers>
          <NotFound messages={messages} />
        </Providers>
      </body>
    </html>
  )
}
