import { cookies } from 'next/headers'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { queryKeyRegistry } from '@infra/query-keys'
import { readDashboardSummaryAction } from '@features/dashboard/actions'
import { DashboardPanel } from '@features/dashboard/components/dashboard-panel'
import { getMessages, resolveLocale } from '@infra/i18n'

export default async function DashboardPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: queryKeyRegistry.dashboard.summary,
    queryFn: () => readDashboardSummaryAction(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">
          {messages['dashboard.title']}
        </h1>
        <DashboardPanel />
      </div>
    </HydrationBoundary>
  )
}
