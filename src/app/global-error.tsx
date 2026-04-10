'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="p-8">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-neutral-600">{error.message}</p>
        <button
          type="button"
          className="mt-4 rounded border px-3 py-1 text-sm"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
