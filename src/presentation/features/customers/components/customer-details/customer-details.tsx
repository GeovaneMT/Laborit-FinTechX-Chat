'use client'

import { ErrorCard } from '@ui/error-card'

import { EditNameSheet } from '@features/customers/components/sheets/edit-name-sheet'
import { EditPhoneSheet } from '@features/customers/components/sheets/edit-phone-sheet'

import { useCustomerSheets } from '@zustand/customer-sheets.store'
import { useCustomerDetails } from '@features/customers/view-models/use-customer-details'

import { LoadingCustomerSkeleton } from '@features/customers/components/customer-details/loading-customer-skeleton'
import { RenderCustomerDetails } from '@features/customers/components/customer-details/render-customer-details'

import type { CustomerDetailsByEmailQueryKey } from '@infra/query-keys'

interface CustomerDetailsProps {
  queryKey: CustomerDetailsByEmailQueryKey
}

export const CustomerDetails = ({ queryKey }: CustomerDetailsProps) => {
  const sheetsToOpen = useCustomerSheets()
  const data = useCustomerDetails(queryKey)

  const { error, refetch, customer, errorTitle, isFetching, errorMessage } =
    data

  if (isFetching) return <LoadingCustomerSkeleton />

  if (error || !customer) {
    return (
      <ErrorCard
        title={errorTitle}
        message={errorMessage}
        action={() => refetch()}
      />
    )
  }

  return (
    <>
      <EditNameSheet customer={customer} />
      <EditPhoneSheet {...customer} />
      <RenderCustomerDetails {...data} {...sheetsToOpen} />
    </>
  )
}
