'use client'

import { useDashboardSummary } from '@features/dashboard/hooks'

export function useDashboardScreen() {
  const summary = useDashboardSummary()
  return {
    headline: summary.data?.headline ?? '—',
    count: summary.data?.count ?? 0,
    isLoading: summary.isLoading,
    error: summary.error,
  }
}
