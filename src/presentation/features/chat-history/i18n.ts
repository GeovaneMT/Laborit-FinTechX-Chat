import type { Locale } from '@/infra/i18n'

export type ChatHistoryMessages = {
  'chatHistory.title': string
}

export const ChatHistoryMessages: Record<Locale, ChatHistoryMessages> = {
  en: {
    'chatHistory.title': 'Chat History',
  },
  pt: {
    'chatHistory.title': 'Histórico de Chat',
  },
}
