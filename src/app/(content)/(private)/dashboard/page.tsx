import { queryKeyRegistry } from '@infra/query-keys'

import { readDashboardSummaryAction } from '@features/dashboard/actions'
import { DashboardScreen } from '@features/dashboard/components/dashboard-screen'
import { getMessages, resolveLocale } from '@features/dashboard/i18n'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { cookies } from 'next/headers'

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
      <DashboardScreen messages={messages} />
    </HydrationBoundary>
  )
}
