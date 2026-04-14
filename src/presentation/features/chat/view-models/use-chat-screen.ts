import { sendMessageAction } from '@features/chat/actions'
import { useChatLoading, useMessages } from '@features/chat/store'

export function useChatScreen() {
  const { messages, addMessage, clearConversation } = useMessages()

  const { isLoading, error, setLoading, setError } = useChatLoading()

  const sendMessage = async (message: string) => {
    addMessage({ role: 'user', content: message })

    setLoading(true)
    setError(null)

    try {
      const result = await sendMessageAction({ message })

      if (!result.success) {
        setError(result.error ?? 'Erro desconhecido. Tente novamente.')
        return
      }

      if (!result.response) {
        setError('Resposta vazia do servidor.')
        return
      }

      addMessage({ role: 'assistant', content: result.response })
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err)
      setError('Erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return {
    error,
    messages,
    isLoading,
    sendMessage,
    clearConversation,
  }
}
