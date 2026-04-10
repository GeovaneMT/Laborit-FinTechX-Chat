'use client'

import { useDashboardSummary } from '@features/dashboard/hooks'

export function useDashboardScreen() {
  const { data, error, isLoading } = useDashboardSummary()
  return {
    error: error,
    isLoading: isLoading,
    count: data?.count ?? 0,
    headline: data?.headline ?? '—',
  }
}
