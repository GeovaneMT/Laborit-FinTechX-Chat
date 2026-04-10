'use client'

import { useMemo } from 'react'

import { useCustomersInfiniteQuery } from '@tanstack/react-query/queries/customer/use-customers-infinite.query'

import type { FetchCustomersParams } from '@http/generated/models'
import type { CustomersQueryKey } from '@infra/query-keys'

interface useCustomerIndexInifiniteQueryProps
  extends Omit<FetchCustomersParams, 'query' | 'limit'> {
  queryKey: CustomersQueryKey
}

export const useCustomerIndexInifiniteQuery = ({
  cursor,
  queryKey,
}: useCustomerIndexInifiniteQueryProps) => {
  const {
    data,
    error,
    refetch,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isInitialLoading,
  } = useCustomersInfiniteQuery({
    cursor,
    queryKey,
  })

  const isLoading = isFetching || isInitialLoading

  const customers = useMemo(
    () => data.pages.flatMap((page) => page.customers),
    [data.pages],
  )

  const errors = useMemo(
    () => data.pages.flatMap((page) => page.error),
    [data.pages],
  )

  const status = useMemo(
    () => data.pages.flatMap((page) => page.status),
    [data.pages],
  )

  const notFoundErrorStatus = status.find((status) => status === 404)

  const errorMessage = error?.message || errors[0]

  return {
    refetch,
    customers,
    isLoading,
    hasNextPage,
    errorMessage,
    fetchNextPage,
    isFetchingNextPage,
    notFoundErrorStatus,
  }
}
