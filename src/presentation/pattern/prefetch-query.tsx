import type { ReactNode } from 'react'

import {
  dehydrate,
  HydrationBoundary,
  type QueryFunction,
  type QueryKey,
} from '@tanstack/react-query'
import { queryClient } from '@tanstack/react-query/query-client'

interface PrefetchQueryProps<
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = QueryKey,
> {
  queryKey: TQueryKey
  children: ReactNode
  queryFn: QueryFunction<TQueryFnData, TQueryKey>
}

export const PrefetchQuery = async <TQueryFnData, TQueryKey extends QueryKey>({
  queryFn,
  queryKey,
  children,
}: PrefetchQueryProps<TQueryFnData, TQueryKey>) => {
  try {
    await queryClient.prefetchQuery({
      queryKey,
      queryFn,
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'unknown error'

    console.error('Prefetch failed:', errorMessage)
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
