import { Suspense } from 'react'

import { CustomerIndex } from '@features/customers/components/customer-index'
import { ClientBoundary } from '@pattern/client-boundaries'

import { PrefetchInfiniteQuery } from '@pattern/prefetch-infinite-query'
import { createInfiniteSearchParamsCache } from '@http/factories/create-infinite-search-params'

import { LoadingSuspense } from '@app/(content)/(private)/(breadcrumb)/clientes/(customers)/loading'

import type { SearchParams } from 'nuqs/server'

import { customersInfiniteQueryFn } from '@queryFn/customer/customers-infinite.query'
import {
  customersInfiniteQueryKey,
  type CustomersQueryKey,
} from '@infra/query-keys'

interface PageProps {
  searchParams: Promise<SearchParams>
}

interface CustomerIndexRenderProps {
  paramsPromise: Promise<{
    cursor: string | null
    limit: number
    query: string
  }>
}

const searchParamsCache = createInfiniteSearchParamsCache()

const CustomerIndexRender = async ({
  paramsPromise,
}: CustomerIndexRenderProps) => {
  const params = await paramsPromise
  const { cursor, limit, query } = params

  const queryKey: CustomersQueryKey = customersInfiniteQueryKey(limit, query)

  return (
    <PrefetchInfiniteQuery
      queryKey={queryKey}
      initialPageParam={cursor ?? undefined}
      queryFn={customersInfiniteQueryFn}
    >
      <CustomerIndex
        limit={limit}
        queryKey={queryKey}
        cursor={cursor ?? undefined}
      />
    </PrefetchInfiniteQuery>
  )
}

const CustomerIndexPage = async ({ searchParams }: PageProps) => {
  const paramsPromise = searchParamsCache.parse(searchParams)

  return (
    <ClientBoundary errorTitle="Ocorreu um erro ao buscar os clientes:">
      <Suspense fallback={<LoadingSuspense />}>
        <CustomerIndexRender paramsPromise={paramsPromise} />
      </Suspense>
    </ClientBoundary>
  )
}

export default CustomerIndexPage
