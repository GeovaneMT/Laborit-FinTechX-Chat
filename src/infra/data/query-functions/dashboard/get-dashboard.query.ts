import { queryKeyRegistry } from '@infra/query-keys'
import type { DashboardSummary } from '@core/entities/dashboard-summary'
import { getDashboardAction } from '@actions/get-dashboard.action'
import type { QueryFunction } from '@tanstack/react-query'

type pageParam = never
export type DashboardQueryKey = typeof queryKeyRegistry.dashboard.summary

export const dashboardQueryFn: QueryFunction<
  DashboardSummary,
  DashboardQueryKey,
  pageParam
> = async () => await getDashboardAction()
