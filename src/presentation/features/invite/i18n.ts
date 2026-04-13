import { LayoutMessages, type Locale } from '@/infra/i18n'

export type InviteMessages = {
  loading: LayoutMessages['loading']
  'invite.title': string
  'invite.shareTitle': string
  'invite.description': string
  'invite.codeCopied': string
}

export const InviteMessages: Record<Locale, InviteMessages> = {
  en: {
    'invite.title': 'Invite friends',
    'invite.shareTitle': 'Refer A Friend',
    'invite.description': 'Share Your Promo Code & Get $3 For Each Friend',
    'invite.codeCopied': 'Code copied!',
    loading: LayoutMessages.en.loading,
  },
  pt: {
    'invite.title': 'Convidar Amigos',
    'invite.shareTitle': 'Convide um amigo',
    'invite.description':
      'Compartilhe seu código promocional e obtenha $3 por cada amigo',
    'invite.codeCopied': 'Código copiado!',
    loading: LayoutMessages.pt.loading,
  },
}
