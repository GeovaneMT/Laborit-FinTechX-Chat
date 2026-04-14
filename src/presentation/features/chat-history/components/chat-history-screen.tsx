'use client'

import type { ChatHistoryMessages } from '@features/chat-history/i18n'

import { TypographyH1 } from '@/presentation/ui/typography/hx/h1'

import { useChatHistoryScreen } from '@/presentation/features/chat-history/view-models/use-chat-history-screen'

type ChatHistoryScreenProps = {
  messages: ChatHistoryMessages
}

export function ChatHistoryScreen({ messages }: ChatHistoryScreenProps) {
  const {} = useChatHistoryScreen()

  return (
    <section>
      <TypographyH1 className="text-center">
        {messages['chatHistory.title']}
      </TypographyH1>
    </section>
  )
}
