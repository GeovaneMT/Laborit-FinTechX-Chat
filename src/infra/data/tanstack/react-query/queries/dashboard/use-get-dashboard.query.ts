import { queryKeyRegistry } from '@/infra/query-keys'

import {
  dashboardQueryFn,
  type DashboardQueryKey,
} from '@queryFn/dashboard/get-dashboard.query'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useDashboardQuery = () => {
  return useSuspenseQuery({
    queryKey: queryKeyRegistry.dashboard.summary as DashboardQueryKey,
    queryFn: dashboardQueryFn,

    gcTime: Infinity,
    staleTime: Infinity,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
