import type { Locale } from '@/infra/i18n'

export type ChatMessages = {
  'chat.title': string
  'chat.clearConversation': string
}

export const ChatMessages: Record<Locale, ChatMessages> = {
  en: {
    'chat.title': 'Chat',
    'chat.clearConversation': 'Clear conversation',
  },
  pt: {
    'chat.title': 'Chat',
    'chat.clearConversation': 'Limpar conversa',
  },
}
