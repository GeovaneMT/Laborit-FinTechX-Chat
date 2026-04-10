'use client'

import { LoadingMessage } from '@ui/loading-message'

export default function RootLoading() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <LoadingMessage message="Carregando..." />
    </div>
  )
}
