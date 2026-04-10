'use client'

import { queryKeyRegistry } from '@infra/query-keys'

import { readDashboardSummaryAction } from '@features/dashboard/actions'
import { useQuery } from '@tanstack/react-query'

export function useDashboardSummary() {
  return useQuery({
    queryKey: queryKeyRegistry.dashboard.summary,
    queryFn: () => readDashboardSummaryAction(),
  })
}
