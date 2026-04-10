import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type InviteMessages = {
  'invite.title': string
  'invite.shareTitle': string
  'invite.description': string
  'invite.codeCopied': string
}

const messages: Record<Locale, InviteMessages> = {
  en: {
    'invite.title': 'Invite a friend',
    'invite.shareTitle': 'Share Laborit Chat',
    'invite.description':
      'Invite your friends to experience the AI assistant. Use this invitation code:',
    'invite.codeCopied': 'Code copied!',
  },
  pt: {
    'invite.title': 'Convidar Amigo',
    'invite.shareTitle': 'Compartilhe o Laborit Chat',
    'invite.description':
      'Convide seus amigos para experimentar o assistente de IA. Use este código de convite:',
    'invite.codeCopied': 'Código copiado!',
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
