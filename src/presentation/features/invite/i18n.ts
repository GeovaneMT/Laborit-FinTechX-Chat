import type { Locale } from '@/infra/i18n'

export type InviteMessages = {
  'invite.title': string
  'invite.shareTitle': string
  'invite.description': string
  'invite.codeCopied': string
}

export const InviteMessages: Record<Locale, InviteMessages> = {
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
