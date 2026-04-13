import type { Locale } from '@/infra/i18n'

export type PreferencesMessages = {
  'preferences.title': string
  'preferences.theme': string
  'preferences.theme.sub': string
  'preferences.language': string
  'preferences.language.sub': string
  'preferences.notifications': string
  'preferences.inDevelopment': string
  'preferences.accountInfo': string
  'preferences.accountInfo.sub': string
  'preferences.changePassword': string
  'preferences.changePassword.sub': string
  'preferences.paymentMethods': string
  'preferences.paymentMethods.sub': string
  'preferences.Invite': string
  'preferences.Invite.sub': string
}

export const PreferencesMessages: Record<Locale, PreferencesMessages> = {
  en: {
    'preferences.title': 'Preferences',
    'preferences.theme': 'Change Theme',
    'preferences.theme.sub': 'Toogle Dark/Light mode',
    'preferences.notifications': 'Notifications',
    'preferences.language': 'Language',
    'preferences.language.sub': 'Change your language preference',
    'preferences.inDevelopment': 'Feature in development',
    'preferences.accountInfo': 'Account Information',
    'preferences.accountInfo.sub': 'Change your Account information',
    'preferences.changePassword': 'Change Password',
    'preferences.changePassword.sub': 'Change your password',
    'preferences.paymentMethods': 'Payment Methods',
    'preferences.paymentMethods.sub': 'Add Your Credit / Credit Cards',
    'preferences.Invite': 'Invite',
    'preferences.Invite.sub': 'Invite your friends',
  },
  pt: {
    'preferences.title': 'Preferências',
    'preferences.theme': 'Mudar Tema',
    'preferences.theme.sub': 'Alternar modo Claro/Escuro',
    'preferences.notifications': 'Notificações',
    'preferences.language': 'Idioma',
    'preferences.language.sub': 'Alterar sua preferência de idioma',
    'preferences.inDevelopment': 'Funcionalidade em desenvolvimento',
    'preferences.accountInfo': 'Informações de Conta',
    'preferences.accountInfo.sub': 'Alterar suas informações de conta',
    'preferences.changePassword': 'Alterar Senha',
    'preferences.changePassword.sub': 'Alterar sua senha',
    'preferences.paymentMethods': 'Métodos de Pagamento',
    'preferences.paymentMethods.sub': 'Adicionar Seus Cartões de Crédito',
    'preferences.Invite': 'Convidar',
    'preferences.Invite.sub': 'Convidar seus amigos',
  },
}
