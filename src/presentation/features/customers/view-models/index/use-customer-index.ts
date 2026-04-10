'use client'
'use no memo'

import { useCustomerIndexVirtualizer } from '@features/customers/view-models/index/use-customer-index-virtualizer'
import { useCustomerIndexInifiniteQuery } from '@features/customers/view-models/index/use-customer-index-infinite-query'

import type { FetchCustomersParams } from '@http/generated/models'
import type { CustomersQueryKey } from '@infra/query-keys'

interface CustomerIndexHandlerProps
  extends Omit<FetchCustomersParams, 'query' | 'limit'> {
  queryKey: CustomersQueryKey
}

export const useCustomerIndex = ({
  cursor,
  queryKey,
}: CustomerIndexHandlerProps) => {
  const {
    refetch,
    customers,
    isLoading,
    hasNextPage,
    errorMessage,
    fetchNextPage,
    isFetchingNextPage,
    notFoundErrorStatus,
  } = useCustomerIndexInifiniteQuery({
    cursor,
    queryKey,
  })

  const { parentRef, rowVirtualizer } = useCustomerIndexVirtualizer({
    customers,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  })

  return {
    refetch,
    customers,
    parentRef,
    isLoading,
    errorMessage,
    rowVirtualizer,
    notFoundErrorStatus,
  }
}
