import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type ChatMessages = {
  'chat.title': string
  'chat.clearConversation': string
}

const messages: Record<Locale, ChatMessages> = {
  en: {
    'chat.title': 'Chat',
    'chat.clearConversation': 'Clear conversation',
  },
  pt: {
    'chat.title': 'Chat',
    'chat.clearConversation': 'Limpar conversa',
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
