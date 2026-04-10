import { LoadingCustomerSkeleton } from '@features/customers/components/customer-details/loading-customer-skeleton'

export default async function Loading() {
  return (
    <section className="space-y-8">
      <LoadingCustomerSkeleton />
    </section>
  )
}
