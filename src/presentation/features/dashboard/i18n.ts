import { Locale } from '@/infra/i18n'

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
