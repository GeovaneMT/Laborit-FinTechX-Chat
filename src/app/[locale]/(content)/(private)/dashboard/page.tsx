import {
  dashboardQueryFn,
  type DashboardQueryKey,
} from '@/infra/data/query-functions/dashboard/get-dashboard.query'
import { ClientBoundary } from '@/presentation/pattern/client-boundaries'
import { PrefetchQuery } from '@/presentation/pattern/prefetch-query'
import { LoadingMessage } from '@/presentation/ui/loading-message'

import { getLocalMessages, resolveLocale } from '@infra/i18n'
import { queryKeyRegistry } from '@infra/query-keys'

import { DashboardScreen } from '@features/dashboard/components/dashboard-screen'
import { DashboardMessages } from '@features/dashboard/i18n'
import { connection } from 'next/server'
import { Suspense } from 'react'

interface DashboardPageProps {
  params: Promise<{
    locale: string
  }>
}

const DashboardPageRender = async ({ params }: DashboardPageProps) => {
  await connection() //force connection to simulate http request so it turns this into a dynamic route
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<DashboardMessages>({
    locale,
    messages: DashboardMessages,
  })

  const queryKey: DashboardQueryKey = queryKeyRegistry.dashboard.summary

  return (
    <PrefetchQuery queryKey={queryKey} queryFn={dashboardQueryFn}>
      <DashboardScreen messages={messages} />
    </PrefetchQuery>
  )
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  return (
    <ClientBoundary errorTitle="Ocorreu um erro ao buscar os dados da dashboard:">
      <Suspense fallback={<LoadingMessage />}>
        <DashboardPageRender params={params} />
      </Suspense>
    </ClientBoundary>
  )
}
