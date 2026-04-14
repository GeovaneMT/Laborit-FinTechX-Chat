'use client'

import Link from 'next/link'

import { Card, CardContent, CardHeader } from '@shadcn/card'
import { Trash2 } from 'lucide-react'

import { ChatContainer } from '@features/chat/components/chat-container'
import { ChatInput } from '@features/chat/components/chat-input'
import type { ChatMessages } from '@features/chat/i18n'

import { Button } from '@ui/button'
import { TypographyP } from '@ui/typography/p'

import { paths } from '@/core/utils/paths'

import { useChatScreen } from '@/presentation/features/chat/view-models/use-chat-screen'
import { CardHeaderContent } from '@/presentation/pattern/card-header-content'
import { useParentSize } from '@/presentation/pattern/hooks/use-parent-size'

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

  const { height } = useParentSize()

  return (
    <section className="h-full w-full" style={{ minHeight: height }}>
      <Card
        className="flex h-full w-full flex-col"
        style={{ minHeight: height }}
      >
        <CardHeader className="flex items-center justify-between border-b">
          <CardHeaderContent
            title={messages['chat.title']}
            rightButton={
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearConversation}
                  disabled={chatMessages.length === 0}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <TypographyP>
                      {messages['chat.clearConversation']}
                    </TypographyP>
                  </div>
                </Button>

                <Button variant="outline" size="sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Link href={paths.preferences}>
                      <TypographyP>...</TypographyP>
                    </Link>
                  </div>
                </Button>
              </div>
            }
          />
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden p-0">
          <ChatContainer
            messages={chatMessages}
            isLoading={isLoading}
            error={error}
          />
        </CardContent>

        <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
      </Card>
    </section>
  )
}
