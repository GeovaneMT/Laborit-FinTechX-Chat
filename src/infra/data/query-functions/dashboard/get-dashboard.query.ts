import { getDashboardAction } from '@actions/get-dashboard.action'
import type { QueryFunction } from '@tanstack/react-query'

import type { DashboardSummary } from '@core/entities/dashboard-summary'

import type { queryKeyRegistry } from '@infra/query-keys'

type pageParam = never
export type DashboardQueryKey = typeof queryKeyRegistry.dashboard.summary

export const dashboardQueryFn: QueryFunction<
  DashboardSummary,
  DashboardQueryKey,
  pageParam
> = async () => {
  const result = await getDashboardAction()

  if (!result.success) {
    throw new Error(result.error.message)
  }

  return result.data
}
