/**
 * Centralized server reads. Each function documents:
 * - queryKey: see queryKeyRegistry in feature hooks
 * - tags: Next fetch `next.tags` for revalidation
 * - invalidation: updateTag / revalidateTag / revalidatePath after mutations
 */

import { getJson } from '@http/http-resource'
import { cacheTags } from '@infra/cache-tags'

export async function readDashboardSummaryJson(): Promise<{
  count: number
  headline: string
}> {
  return getJson<{ headline: string; count: number }>(
    '/api/v1/dashboard/summary',
    {
      tags: [cacheTags.dashboard],
    },
  )
}

export async function readProfileJson(): Promise<{
  email: string
  displayName: string
}> {
  return getJson<{ displayName: string; email: string }>('/api/v1/profile', {
    tags: [cacheTags.profile],
  })
}
