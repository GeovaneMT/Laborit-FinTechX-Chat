'use client'

import { Button } from '@ui/button'
import { Trash2 } from 'lucide-react'
import { ChatContainer } from './chat-container'
import { ChatInput } from './chat-input'
import { useChatScreen } from '../use-chat-screen'
import type { ChatMessages } from '../i18n'

type ChatScreenProps = {
  messages: ChatMessages
}

export function ChatScreen({ messages }: ChatScreenProps) {
  const {
    messages: chatMessages,
    isLoading,
    error,
    sendMessage,
    clearConversation,
  } = useChatScreen()

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-lg font-semibold">{messages['chat.title']}</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={clearConversation}
          disabled={chatMessages.length === 0}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          {messages['chat.clearConversation']}
        </Button>
      </div>

      <ChatContainer
        messages={chatMessages}
        isLoading={isLoading}
        error={error}
      />

      <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
    </div>
  )
}
