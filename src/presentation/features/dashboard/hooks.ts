'use client'

import { useDashboardQuery } from '@queries/dashboard/use-get-dashboard.query'

export function useDashboardSummary() {
  const data = useDashboardQuery()

  return data
}
