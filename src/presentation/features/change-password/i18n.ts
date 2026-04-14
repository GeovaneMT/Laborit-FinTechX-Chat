import type { Locale } from '@/infra/i18n'

export type ChangePasswordMessages = {
  'changePassword.title': string
}

export const ChangePasswordMessages: Record<Locale, ChangePasswordMessages> = {
  en: {
    'changePassword.title': 'Change Password',
  },
  pt: {
    'changePassword.title': 'Alterar Senha',
  },
}
