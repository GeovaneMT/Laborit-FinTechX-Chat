import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type HomeMessages = {
  'home.title': string
  'home.chat': string
  'home.dashboard': string
  'home.editInformation': string
  'home.healthInstructions': string
  'home.invite': string
  'home.onboarding': string
  'home.preferences': string
  'home.profile': string
  'home.splash': string
}

const messages: Record<Locale, HomeMessages> = {
  en: {
    'home.title': 'Home',
    'home.chat': 'Chat',
    'home.dashboard': 'Dashboard',
    'home.editInformation': 'Edit information',
    'home.healthInstructions': 'Health Instructions',
    'home.invite': 'Invite',
    'home.onboarding': 'Onboarding',
    'home.preferences': 'Preferences',
    'home.profile': 'Profile',
    'home.splash': 'Splash',
  },
  pt: {
    'home.title': 'Início',
    'home.chat': 'Chat',
    'home.dashboard': 'Painel',
    'home.editInformation': 'Editar informações',
    'home.healthInstructions': 'Instruções de saúde',
    'home.invite': 'Convidar',
    'home.onboarding': 'Onboarding',
    'home.preferences': 'Preferências',
    'home.profile': 'Perfil',
    'home.splash': 'Splash',
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
