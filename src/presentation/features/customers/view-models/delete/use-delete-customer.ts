'use client'

import { useDelete } from '@pattern/hooks/use-delete'

import type { CustomersQueryKey } from '@infra/query-keys'
import type { FetchCustomersResultProps } from '@features/customers/actions'

import type {
  InfiniteData,
  RefetchOptions,
  QueryObserverResult,
} from '@tanstack/react-query'

import {
  deleteCustomerAction,
  type deleteCustomerActionProps,
} from '@actions/delete-customer.action'

interface useDeleteCustomerProps {
  queryKey: CustomersQueryKey
  customerId: string
  customerEmail: string

  refetch: (
    options?: RefetchOptions,
  ) => Promise<
    QueryObserverResult<InfiniteData<FetchCustomersResultProps, unknown>, Error>
  >
}

export const useDeleteCustomer = ({
  refetch,
  queryKey,
  customerId,
  customerEmail,
}: useDeleteCustomerProps) =>
  useDelete<deleteCustomerActionProps, FetchCustomersResultProps>({
    refetch,
    subjectWhat: 'Customer',
    actionFn: deleteCustomerAction,
    subjectData: { queryKey, customerId, customerEmail },
  })
