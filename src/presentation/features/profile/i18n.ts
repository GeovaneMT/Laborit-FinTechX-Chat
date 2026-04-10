import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type ProfileMessages = {
  'profile.title': string
  'profile.personalInformation': string
  'profile.name': string
  'profile.email': string
  'profile.editInformation': string
}

const messages: Record<Locale, ProfileMessages> = {
  en: {
    'profile.title': 'Profile',
    'profile.personalInformation': 'Personal information',
    'profile.name': 'Name',
    'profile.email': 'Email',
    'profile.editInformation': 'Edit information',
  },
  pt: {
    'profile.title': 'Perfil',
    'profile.personalInformation': 'Informações pessoais',
    'profile.name': 'Nome',
    'profile.email': 'Email',
    'profile.editInformation': 'Editar Informações',
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
