export type DashboardSummary = {
  headline: string
  count: number
  success: boolean
  message: string
  error?: string
  status?: number
}

export const createDashboardSummary = (
  params: DashboardSummary,
): DashboardSummary => params
