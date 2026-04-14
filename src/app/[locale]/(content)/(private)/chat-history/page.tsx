import { ChatHistoryScreen } from '@features/chat-history/components/chat-history-screen'
import { ChatHistoryMessages } from '@features/chat-history/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface ChatHistoryPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ChatHistoryPage({
  params,
}: ChatHistoryPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<ChatHistoryMessages>({
    locale,
    messages: ChatHistoryMessages,
  })

  return <ChatHistoryScreen messages={messages} />
}
