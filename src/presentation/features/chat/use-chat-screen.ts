import { useChatStore } from './store'
import { sendMessageAction } from './actions'

export function useChatScreen() {
  const {
    error,
    messages,
    setError,
    isLoading,
    addMessage,
    setLoading,
    clearConversation,
  } = useChatStore()

  const sendMessage = async (message: string) => {
    // Add user message immediately
    addMessage({ role: 'user', content: message })

    // Start loading
    setLoading(true)
    setError(null)

    try {
      const result = await sendMessageAction({ message })

      if (!result.response) {
        setError('Resposta vazia do servidor.')
        return
      }

      if (result.success) {
        addMessage({ role: 'assistant', content: result.response })
      } else {
        setError(result.error ?? 'Erro desconhecido. Tente novamente.')
      }
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
