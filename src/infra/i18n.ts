import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

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

function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale)
}

/**
 * Resolves a locale from a string (cookie, param, etc.).
 * Falls back to DEFAULT_LOCALE if invalid or missing.
 */
export function resolveLocale(value: string | undefined): Locale {
  if (value && isSupportedLocale(value)) {
    return value
  }
  return DEFAULT_LOCALE
}

/**
 * Helper to get messages for a specific locale (generic for any message shape).
 */
export function getLocalMessages<T extends Record<string, string>>({
  locale,
  messages,
}: {
  locale: Locale
  messages: Record<Locale, T>
}): T {
  return messages[locale]
}

/**
 * Generates static params for dynamic [locale] routes.
 */
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

/**
 * Checks if a pathname already contains a supported locale prefix.
 */
export function hasLocalePrefix(pathname: string): boolean {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
}

/**
 * Extracts the locale from a pathname that has a prefix.
 * Returns undefined if no valid locale prefix is found.
 */
export function getLocaleFromPathname(pathname: string): Locale | undefined {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  if (firstSegment && isSupportedLocale(firstSegment)) {
    return firstSegment
  }
  return undefined
}
