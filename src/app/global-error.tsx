'use client'

import { useEffect } from 'react'

import { ErrorCard } from '@ui/error-card'

import '@styles/globals.css'

interface RootGlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: RootGlobalErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <div className="flex min-h-svh items-center justify-center p-6">
          <div className="w-full max-w-lg">
            <ErrorCard
              title="Algo deu errado"
              message={error.message}
              action={reset}
              actionTitle="Tentar novamente"
            />
          </div>
        </div>
      </body>
    </html>
  )
}
