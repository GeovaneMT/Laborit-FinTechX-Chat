'use server'

import { headers } from 'next/headers'

import OpenAI from 'openai'

import { buildFintechxContext } from '@core/constants/fintechx-knowledge'
import {
  parseSendMessageInput,
  type SendMessageInput,
} from '@core/schemas/chat.schema'

/**
 * Detects the user's preferred locale from the request headers or URL
 * Defaults to 'pt' (Portuguese) if not found
 */
async function detectLocale(): Promise<'pt' | 'en'> {
  try {
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || '/'

    // Check if pathname starts with /en/
    if (pathname.startsWith('/en/')) {
      return 'en'
    }

    // Default to Portuguese
    return 'pt'
  } catch {
    return 'pt'
  }
}

export async function sendMessageAction(input: SendMessageInput) {
  const { message } = parseSendMessageInput(input)
  const locale = await detectLocale()

  // Validate OpenAI API key is available
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY environment variable is not set')
    return {
      success: false,
      error: 'Erro de configuração: Chave de API não encontrada.',
    }
  }

  try {
    // Initialize OpenAI client with current API key
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const fintechxContext = buildFintechxContext(locale)

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: fintechxContext,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    console.log('Completion:', completion)

    // Validate response structure
    if (!completion || !completion.choices || completion.choices.length === 0) {
      console.error('Invalid Groq response structure:', completion)
      throw new Error('Groq returned empty choices array')
    }

    const firstChoice = completion.choices[0]
    if (!firstChoice.message) {
      console.error('No message in first choice:', firstChoice)
      throw new Error('Groq message is undefined')
    }

    const response = firstChoice.message.content
    if (!response) {
      console.error('No content in message:', firstChoice.message)
      throw new Error('No response from AI')
    }

    console.log('Response:', response)

    return { success: true, response }
  } catch (error) {
    const errorDetails = error instanceof Error ? error.message : String(error)
    console.error('Error calling OpenAI:', errorDetails, error)

    // In development, return actual error for debugging
    const isDevelopment = process.env.NODE_ENV === 'development'
    const errorMessage = isDevelopment
      ? `Erro: ${errorDetails}`
      : locale === 'en'
        ? 'Error processing your message. Please try again.'
        : 'Erro ao processar a mensagem. Tente novamente.'

    return {
      success: false,
      error: errorMessage,
    }
  }
}
