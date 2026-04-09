import { Alert, AlertDescription } from "@ui/alert";
import { Skeleton } from "@ui/skeleton";
import { ChatBubble } from "./chat-bubble";
import { Message } from "../store";

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export function ChatContainer({ messages, isLoading, error }: ChatContainerProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-muted">
            <Skeleton className="h-4 w-20 mb-1" />
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
        <div className="text-center text-muted-foreground py-8">
          <p>Comece uma conversa enviando uma mensagem.</p>
        </div>
      )}
    </div>
  );
}