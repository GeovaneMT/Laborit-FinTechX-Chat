import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type PreferencesMessages = {
  'preferences.title': string
  'preferences.settings': string
  'preferences.darkMode': string
  'preferences.notifications': string
  'preferences.language': string
  'preferences.inDevelopment': string
  'preferences.languageOption.en': string
  'preferences.languageOption.pt': string
}

const messages: Record<Locale, PreferencesMessages> = {
  en: {
    'preferences.title': 'Preferences',
    'preferences.settings': 'Settings',
    'preferences.darkMode': 'Dark mode',
    'preferences.notifications': 'Notifications',
    'preferences.language': 'Language',
    'preferences.inDevelopment': 'Feature in development',
    'preferences.languageOption.en': 'English (US)',
    'preferences.languageOption.pt': 'Português (Brasil)',
  },
  pt: {
    'preferences.title': 'Preferências',
    'preferences.settings': 'Configurações',
    'preferences.darkMode': 'Modo Escuro',
    'preferences.notifications': 'Notificações',
    'preferences.language': 'Idioma',
    'preferences.inDevelopment': 'Funcionalidade em desenvolvimento',
    'preferences.languageOption.en': 'English (US)',
    'preferences.languageOption.pt': 'Português (Brasil)',
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
