'use server'

import { parseDashboardSummary } from '@core/schemas/dashboard.schema'

export const getDashboardAction = async () => {
  const dashboardSummary = {
    count: 42,
    success: true,
    headline: 'Total de cadastros',
    message: 'Cadastrados buscados com sucesso!',
  }

  return parseDashboardSummary(dashboardSummary)
}
