import { Suspense } from 'react'

import { parseCustomerSlug } from '@core/mappers/customer-slug-route.mapper'

import { ErrorCard } from '@ui/error-card'
import { PrefetchQuery } from '@pattern/prefetch-query'
import { ClientBoundary } from '@pattern/client-boundaries'

import { CustomerDetails } from '@features/customers/components/customer-details/customer-details'
import { LoadingCustomerSkeleton } from '@features/customers/components/customer-details/loading-customer-skeleton'

import { customerDetailsByEmailQueryFn } from '@queryFn/customer/customer-details-by-email.query'
import {
  customerDetailsByEmailQueryKey,
  type CustomerDetailsByEmailQueryKey,
} from '@infra/query-keys'

interface CustomerDetailsPageProps {
  params: Promise<{ fname_email: string }>
}

const CustomerDetailsRender = async ({ params }: CustomerDetailsPageProps) => {
  const { fname_email } = await params

  const parsed = parseCustomerSlug(fname_email)
  if (!parsed) {
    return (
      <ErrorCard
        title={`Invalid params`}
        message={`Params ${fname_email} was not parsed correctly.`}
      />
    )
  }

  const { email } = parsed

  const queryKey: CustomerDetailsByEmailQueryKey =
    customerDetailsByEmailQueryKey(email)

  return (
    <PrefetchQuery queryKey={queryKey} queryFn={customerDetailsByEmailQueryFn}>
      <CustomerDetails queryKey={queryKey} />
    </PrefetchQuery>
  )
}

const CustomerDetailsPage = async ({ params }: CustomerDetailsPageProps) => (
  <ClientBoundary errorTitle="Ocorreu um erro ao buscar os dados do cliente:">
    <Suspense fallback={<LoadingCustomerSkeleton />}>
      <CustomerDetailsRender params={params} />
    </Suspense>
  </ClientBoundary>
)

export default CustomerDetailsPage
