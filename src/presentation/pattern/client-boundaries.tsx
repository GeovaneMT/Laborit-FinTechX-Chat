'use client'

import { ErrorBoundary } from 'react-error-boundary'

import { QueryErrorResetBoundary } from '@tanstack/react-query'

import { ErrorCard } from '@ui/error-card'

interface ClientBoundaryProps {
  errorTitle: string
  children: React.ReactNode
}

export const ClientBoundary = ({
  children,
  errorTitle,
}: ClientBoundaryProps) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ error, resetErrorBoundary }) => {
          const message =
            error instanceof Error
              ? error.message
              : 'An unexpected error occurred'

          return (
            <div className="p-4">
              <ErrorCard
                title={errorTitle}
                message={message}
                action={resetErrorBoundary}
              />
            </div>
          )
        }}
      >
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
)
