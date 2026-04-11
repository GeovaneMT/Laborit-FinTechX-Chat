import { Locale } from '@/infra/i18n'

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

export const PreferencesMessages: Record<Locale, PreferencesMessages> = {
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
