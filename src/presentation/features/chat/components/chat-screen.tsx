"use client";

import { Button } from "@ui/button";
import { Trash2 } from "lucide-react";
import { ChatContainer } from "./chat-container";
import { ChatInput } from "./chat-input";
import { useChatScreen } from "../use-chat-screen";

export function ChatScreen() {
  const { messages, isLoading, error, sendMessage, clearConversation } = useChatScreen();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-semibold">Chat</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={clearConversation}
          disabled={messages.length === 0}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Limpar Conversa
        </Button>
      </div>

      <ChatContainer messages={messages} isLoading={isLoading} error={error} />

      <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
    </div>
  );
}