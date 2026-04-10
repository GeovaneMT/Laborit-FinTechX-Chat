import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type SplashMessages = {
  'splash.title': string
  'splash.description': string
  'splash.button': string
}

const messages: Record<Locale, SplashMessages> = {
  en: {
    'splash.title': 'Laborit Chat',
    'splash.description':
      'Your AI assistant for questions and support. Remember: I am not a medical professional.',
    'splash.button': 'Get started',
  },
  pt: {
    'splash.title': 'Laborit Chat',
    'splash.description':
      'Seu assistente de IA para dúvidas e apoio. Lembre-se: não sou um profissional médico.',
    'splash.button': 'Começar',
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
