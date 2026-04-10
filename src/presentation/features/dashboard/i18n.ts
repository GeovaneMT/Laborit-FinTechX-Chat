import { SUPPORTED_LOCALES } from '@core/constants'

type Locale = (typeof SUPPORTED_LOCALES)[number]

export type DashboardMessages = {
  'dashboard.title': string
}

export const DashboardMessages: Record<Locale, DashboardMessages> = {
  en: {
    'dashboard.title': 'Dashboard',
  },
  pt: {
    'dashboard.title': 'Painel',
  },
}
