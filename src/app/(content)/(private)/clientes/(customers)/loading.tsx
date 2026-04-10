'use client'

import { Fragment } from 'react'

import { ItemSeparator } from '@shadcn/item'
import { CustomerSkeleton } from '@features/customers/components/widgets/customer-item'

import { LoadingFallback } from '@ui/loading-toast-wrapper'

const limitParam = 10

export const LoadingSuspense = () => (
  <ul className="mt-4 space-y-2">
    {Array.from({ length: limitParam }).map((_, index) => (
      <Fragment key={index}>
        <CustomerSkeleton />
        {index !== limitParam - 1 && <ItemSeparator className="opacity-25" />}
      </Fragment>
    ))}
  </ul>
)

export default function Loading() {
  return (
    <section className="space-y-8">
      <LoadingFallback />
      <LoadingSuspense />
    </section>
  )
}
