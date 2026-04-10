import { Providers } from '@/infra/providers'

import '@styles/globals.css'

import { geistMono, geistSans } from '@styles/fonts'
import { NotFound } from '@/presentation/layouts/not-found'
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

export default async function GlobalNotFound() {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased transition-all duration-200 ease-in-out`}
      >
        <Providers>
          <NotFound />
        </Providers>
      </body>
    </html>
  )
}
