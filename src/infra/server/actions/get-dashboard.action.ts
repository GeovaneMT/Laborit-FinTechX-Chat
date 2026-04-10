'use server'

export interface DashboardSummary {
  headline: string
  count: number
}

export interface FetchDashboardResultProps extends DashboardSummary {
  error?: string
  status?: number
  success: boolean
  message: string
}

export const getDashboardAction =
  async (): Promise<FetchDashboardResultProps> => {
    return {
      count: 42,
      success: true,
      headline: 'Total de cadastros',
      message: 'Cadastrados buscados com sucesso!',
    }
  }
