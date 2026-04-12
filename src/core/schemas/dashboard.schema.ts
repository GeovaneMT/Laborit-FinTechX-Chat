import { z } from 'zod/v4'

import type { DashboardSummary } from '@core/entities/dashboard-summary'

export const dashboardSummarySchema = z.object({
  headline: z.string(),
  count: z.number().nonnegative(),
  success: z.boolean(),
  message: z.string(),
  error: z.string().optional(),
  status: z.number().int().optional(),
})

export function parseDashboardSummary(value: unknown): DashboardSummary {
  return dashboardSummarySchema.parse(value)
}

export function safeParseDashboardSummary(value: unknown) {
  return dashboardSummarySchema.safeParse(value)
}
