'use server'

import {
  dehydrate,
  HydrationBoundary,
  type QueryFunction,
  type QueryKey,
} from '@tanstack/react-query'
import { queryClient } from '@tanstack/react-query/query-client'
import type { ReactNode } from 'react'

interface PrefetchInfiniteQueryProps<
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
> {
  queryKey: TQueryKey
  children: ReactNode
  initialPageParam: TPageParam
  queryFn: QueryFunction<TQueryFnData, TQueryKey, TPageParam>
}

export const PrefetchInfiniteQuery = async <
  TQueryFnData,
  TQueryKey extends QueryKey,
  TPageParam = unknown,
>({
  queryFn,
  queryKey,
  children,
  initialPageParam,
}: PrefetchInfiniteQueryProps<TQueryFnData, TQueryKey, TPageParam>) => {
  try {
    await queryClient.prefetchInfiniteQuery({
      queryFn,
      queryKey,
      initialPageParam,
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
