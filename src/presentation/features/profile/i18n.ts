import type { Locale } from '@/infra/i18n'

export type ProfileMessages = {
  'profile.title': string
  'profile.personalInformation': string
  'profile.name': string
  'profile.email': string
  'profile.editInformation': string
}

export const ProfileMessages: Record<Locale, ProfileMessages> = {
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
