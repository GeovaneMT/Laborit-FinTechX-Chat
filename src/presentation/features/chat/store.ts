import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { useShallow } from 'zustand/shallow'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatState {
  messages: Message[]
  isLoading: boolean
  error: string | null
}

interface ChatActions {
  addMessage: (
    message: Omit<Message, 'id' | 'timestamp'>,
  ) => Promise<{ message?: string; errorMessage?: string }>
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearConversation: () => Promise<{ message?: string; errorMessage?: string }>
}

type ChatStore = ChatState & ChatActions

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      messages: [],
      isLoading: false,
      error: null,

      addMessage: async (message) => {
        try {
          const newMessage: Message = {
            ...message,
            id: crypto.randomUUID(),
            timestamp: new Date(),
          }

          set((state) => ({
            messages: [...state.messages, newMessage],
          }))

          return { message: 'Mensagem adicionada com sucesso' }
        } catch (error) {
          return {
            errorMessage:
              error instanceof Error
                ? error.message
                : 'Erro inesperado ao adicionar mensagem',
          }
        }
      },

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error }),

      clearConversation: async () => {
        try {
          set({ messages: [], error: null })
          return { message: 'Conversa limpa com sucesso' }
        } catch (error) {
          return {
            errorMessage:
              error instanceof Error
                ? error.message
                : 'Erro inesperado ao limpar conversa',
          }
        }
      },
    }),
    {
      name: 'chat-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ messages: state.messages }),
    },
  ),
)

export const useMessages = () => {
  return useChatStore(
    useShallow((store) => ({
      messages: store.messages,
      addMessage: store.addMessage,
      clearConversation: store.clearConversation,
    })),
  )
}

export const useChatLoading = () => {
  return useChatStore(
    useShallow((store) => ({
      isLoading: store.isLoading,
      error: store.error,
      setLoading: store.setLoading,
      setError: store.setError,
    })),
  )
}
