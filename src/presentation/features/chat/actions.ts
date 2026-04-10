'use server'

import { sendMessageSchema } from '@presentation/features/chat/schemas'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function sendMessageAction(input: { message: string }) {
  const { message } = sendMessageSchema.parse(input)

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente de IA útil e amigável. Forneça respostas claras e acolhedoras. Lembre-se de que você não é um profissional médico e não deve dar conselhos médicos. Responda em português brasileiro.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from AI')
    }

    return { success: true, response }
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    return {
      success: false,
      error: 'Erro ao processar a mensagem. Tente novamente.',
    }
  }
}
