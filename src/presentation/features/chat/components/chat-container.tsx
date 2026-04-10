import { Alert, AlertDescription } from '@ui/shadcn/alert'
import { Skeleton } from '@ui/shadcn/skeleton'
import { ChatBubble } from './chat-bubble'
import { Message } from '../store'

interface ChatContainerProps {
  messages: Message[]
  isLoading: boolean
  error: string | null
}

export function ChatContainer({
  messages,
  isLoading,
  error,
}: ChatContainerProps) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-muted max-w-xs rounded-lg px-4 py-2 lg:max-w-md">
            <Skeleton className="mb-1 h-4 w-20" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {messages.length === 0 && !isLoading && (
        <div className="text-muted-foreground py-8 text-center">
          <p>Comece uma conversa enviando uma mensagem.</p>
        </div>
      )}
    </div>
  )
}
