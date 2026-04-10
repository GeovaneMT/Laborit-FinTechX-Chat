'use client'

import { ErrorCard } from '@ui/error-card'
import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
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
  )
}
