import { ChatScreen } from '@features/chat/components/chat-screen'
import { ChatMessages } from '@features/chat/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface ChatPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ChatPage({ params }: ChatPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<ChatMessages>({
    locale,
    messages: ChatMessages,
  })

  return <ChatScreen messages={messages} />
}
