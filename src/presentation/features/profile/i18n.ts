import type { Locale } from '@/infra/i18n'

export type ProfileMessages = {
  'profile.title': string

  'profile.name': string
  'profile.email': string

  'profile.preferences': string
  'profile.accountSecurity': string
  'profile.customerSupport': string
  'profile.logout': string
  'profile.logoutToast': string

  'profile.securityPoor': string
  'profile.securityNotBad': string
  'profile.securityGreat': string
  'profile.securityExcellent': string
}

export const ProfileMessages: Record<Locale, ProfileMessages> = {
  en: {
    'profile.title': 'Profile',

    'profile.name': 'Name',
    'profile.email': 'Email',

    'profile.preferences': 'Preferences',
    'profile.accountSecurity': 'Account Security',
    'profile.customerSupport': 'Customer Support',
    'profile.logout': 'Logout',

    'profile.securityPoor': 'Poor',
    'profile.securityNotBad': 'Not bad',
    'profile.securityGreat': 'Great',
    'profile.securityExcellent': 'Excellent',
    'profile.logoutToast': 'Logging out... (fake)',
  },
  pt: {
    'profile.title': 'Perfil',

    'profile.name': 'Nome',
    'profile.email': 'Email',

    'profile.preferences': 'Configurações',
    'profile.accountSecurity': 'Segurança da conta',
    'profile.customerSupport': 'Suporte ao cliente',
    'profile.logout': 'Sair',

    'profile.securityPoor': 'Ruim',
    'profile.securityNotBad': 'Nada Mal',
    'profile.securityGreat': 'Bom',
    'profile.securityExcellent': 'Excelente',
    'profile.logoutToast': 'Saindo... (fake)',
  },
}
