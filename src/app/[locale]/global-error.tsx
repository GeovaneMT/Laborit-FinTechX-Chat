'use client'

import '@styles/globals.css'

import { ErrorCard } from '@ui/error-card'
import { useEffect } from 'react'

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
