import { cookies } from 'next/headers'

import { ChatScreen } from '@features/chat/components/chat-screen'
import { getMessages, resolveLocale } from '@features/chat/i18n'

export default async function ChatPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <ChatScreen messages={messages} />
}
