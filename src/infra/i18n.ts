import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type LayoutMessages = {
  'nav.chat': string
  'nav.profile': string

  'footer.copyright': string
  'footer.home': string
  'footer.terms': string
  'footer.privacy': string

  'header.slogan': string

  'notFound.emptyHeader': string
  'notFound.emptyTitle': string
  'notFound.emptyDescription': string
  'notFound.backToHome': string
  'notFound.error404': string

  loading: string
}

export const LayoutMessages: Record<Locale, LayoutMessages> = {
  en: {
    loading: 'Loading...',

    'nav.chat': 'Chat',
    'nav.profile': 'Profile',

    'footer.copyright':
      'Built with accessibility and responsive design in mind.',
    'footer.home': 'Home',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',

    'header.slogan': 'Fast, accessible route navigation',

    'notFound.emptyHeader': '404',
    'notFound.emptyTitle': 'Page not found',
    'notFound.emptyDescription':
      'Looks like the page you are looking for has been moved or deleted.',
    'notFound.backToHome': 'Back to home',
    'notFound.error404': 'Error 404 — Page drifted into the void 🌌',
  },
  pt: {
    loading: 'Carregando...',

    'nav.chat': 'Chat',
    'nav.profile': 'Perfil',

    'footer.copyright': 'Criado com design responsivo e acessível em mente.',
    'footer.home': 'Início',
    'footer.terms': 'Termos',
    'footer.privacy': 'Privacidade',

    'header.slogan': 'Navegação rápida e acessível',

    'notFound.emptyHeader': '404',
    'notFound.emptyTitle': 'Página não encontrada',
    'notFound.emptyDescription':
      'Parece que a página que você procura se perdeu no caminho...',
    'notFound.backToHome': 'Voltar para o início',
    'notFound.error404': 'Erro 404 — Página foi arrastada para o vazio 🌌',
  },
}

export function isSupportedLocale(value: string): value is Locale {
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

/** Maps a locale to a label for the language select dropdown. */
export const LOCALES_LABELS: Record<Locale, string> = {
  en: 'English (US)',
  pt: 'Português (Brasil)',
}
