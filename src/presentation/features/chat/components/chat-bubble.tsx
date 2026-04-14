import { AIMessageHeader } from '@features/chat/components/ai-message-header'
import { UserMessageActions } from '@features/chat/components/user-message-actions'
import type { Message } from '@features/chat/store'

interface ChatBubbleProps {
  message: Message
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user'
  const isAssistant = message.role === 'assistant'

  const getFormattedTime = () => {
    const timestamp =
      message.timestamp instanceof Date
        ? message.timestamp
        : new Date(message.timestamp)

    return timestamp.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="mb-4 flex flex-col">
      {isAssistant && <AIMessageHeader messageContent={message.content} />}

      <div
        className={`flex items-center gap-2 ${
          isUser ? 'justify-end' : 'justify-start'
        }`}
      >
        {isUser && <UserMessageActions.Avatar messageId={message.id} />}

        <div
          className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
            isUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          <p className="text-sm">{message.content}</p>
          <p className="mt-1 text-xs opacity-70">{getFormattedTime()}</p>
        </div>

        {isUser && <UserMessageActions.EditButton messageId={message.id} />}
      </div>
    </div>
  )
}
