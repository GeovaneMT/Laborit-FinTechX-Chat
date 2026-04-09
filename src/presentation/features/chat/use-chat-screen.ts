import { useChatStore } from "./store";
import { sendMessageAction } from "./actions";

export function useChatScreen() {
  const {
    messages,
    isLoading,
    error,
    addMessage,
    setLoading,
    setError,
    clearConversation,
  } = useChatStore();

  const sendMessage = async (message: string) => {
    // Add user message immediately
    addMessage({ role: "user", content: message });

    // Start loading
    setLoading(true);
    setError(null);

    try {
      const result = await sendMessageAction({ message });

      if (result.success) {
        addMessage({ role: "assistant", content: result.response });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearConversation,
  };
}