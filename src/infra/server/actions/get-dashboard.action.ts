'use server'

import { right } from '@core/either'
import { parseDashboardSummary } from '@core/schemas/dashboard.schema'
import type { ServerActionResult } from '@/infra/server/types/server.types'
import { wrapServerActionResult } from '@infra/server/actions/common/action-factory'

interface DashboardSummary {
  count: number
  success: boolean
  headline: string
  message: string
}

export const getDashboardAction = async (): Promise<
  ServerActionResult<DashboardSummary>
> => {
  try {
    const dashboardSummary = {
      count: 42,
      success: true,
      headline: 'Total de cadastros',
      message: 'Cadastrados buscados com sucesso!',
    }

    const validated = parseDashboardSummary(dashboardSummary)

    return await wrapServerActionResult(right(validated), {
      revalidateTags: ['dashboard'],
    })
  } catch (error) {
    console.error('Error fetching dashboard:', error)
    return {
      success: false,
      error: {
        code: 'DASHBOARD_FETCH_ERROR',
        message: 'Failed to fetch dashboard summary',
        statusCode: 500,
      },
    }
  }
}
