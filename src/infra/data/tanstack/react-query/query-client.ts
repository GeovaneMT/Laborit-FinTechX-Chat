import { cache } from 'react'

import { QueryClient } from '@tanstack/react-query'

const queryClientOptions = {
  defaultOptions: {
    queries: {
      retry: 1,
      suspense: true,
      staleTime: 1000 * 60 * 5, // 5 min
      refetchOnWindowFocus: false,
    },
  },
}

const getQueryClient = cache(() => new QueryClient(queryClientOptions))
export const queryClient = getQueryClient()
