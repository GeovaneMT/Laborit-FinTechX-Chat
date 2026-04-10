import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type DashboardMessages = {
  'dashboard.title': string
}

const messages: Record<Locale, DashboardMessages> = {
  en: {
    'dashboard.title': 'Dashboard',
  },
  pt: {
    'dashboard.title': 'Painel',
  },
}

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value

  return DEFAULT_LOCALE as Locale
}

export function getMessages(locale: Locale) {
  return messages[locale]
}
