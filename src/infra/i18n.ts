import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

const messages: Record<Locale, Record<string, string>> = {
  en: {
    'nav.items': 'Items',
    'nav.signOut': 'Sign out',
    'nav.settings': 'Settings',
    'nav.dashboard': 'Dashboard',
  },
  pt: {
    'nav.items': 'Itens',
    'nav.signOut': 'Sair',
    'nav.dashboard': 'Painel',
    'nav.settings': 'Configurações',
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
