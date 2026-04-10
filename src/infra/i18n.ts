import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

type Locale = (typeof SUPPORTED_LOCALES)[number]

type GetMessagesProps<T extends Record<string, string>> = {
  locale: Locale
  messages: Record<Locale, T>
}

export type DefaultMessages = {
  'nav.items': string
  'nav.signOut': string
  'nav.settings': string
  'nav.dashboard': string
}

export const DefaultMessages: Record<Locale, DefaultMessages> = {
  en: {
    'nav.items': 'Items',
    'nav.signOut': 'Sign out',
    'nav.settings': 'Settings',
    'nav.dashboard': 'Dashboard',
  },
  pt: {
    'nav.items': 'Itens',
    'nav.signOut': 'Sair',
    'nav.settings': 'Configurações',
    'nav.dashboard': 'Painel',
  },
}

function isLocale(value: string) {
  return SUPPORTED_LOCALES.toString().includes(value)
}

export function resolveLocale(value: string | undefined): Locale {
  const IsLocale = value ? isLocale(value) : false

  if (IsLocale) return value as Locale
  return DEFAULT_LOCALE
}

export function getLocalMessages<T extends Record<string, string>>({
  locale,
  messages,
}: GetMessagesProps<T>) {
  return messages[locale]
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
  }))
}
