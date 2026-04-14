import { type NextRequest, NextResponse } from 'next/server'

import OpenAI from 'openai'

import { buildFintechxContext } from '@core/constants/fintechx-knowledge'

export const runtime = 'nodejs'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' })

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

/**
 * Detects locale from request pathname or defaults to Portuguese
 */
function detectLocaleFromRequest(req: NextRequest): 'pt' | 'en' {
  try {
    const pathname = req.nextUrl.pathname || '/'
    if (pathname.startsWith('/en/')) {
      return 'en'
    }
    return 'pt'
  } catch (error) {
    console.warn('Failed to detect locale, defaulting to Portuguese:', error)
    return 'pt'
  }
}

export async function POST(req: NextRequest) {
  try {
    // Validate OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing OpenAI API Key' },
        { status: 400 },
      )
    }

    // Parse and validate request body
    let messages: ChatMessage[] = []
    try {
      const body = await req.json()
      messages = body.messages || []
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError)
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 },
      )
    }

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'No messages provided' },
        { status: 400 },
      )
    }

    // Detect locale and build FinTechX context
    const locale = detectLocaleFromRequest(req)
    const fintechxContext = buildFintechxContext(locale)

    // Ensure system message is first with FinTechX context
    const systemMessageExists = messages.some((msg) => msg.role === 'system')
    const messagesWithContext: ChatMessage[] = systemMessageExists
      ? messages
      : [
          {
            role: 'system',
            content: fintechxContext,
          } as ChatMessage,
          ...messages,
        ]

    // Create chat completion response
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messagesWithContext,
      max_tokens: 500,
      temperature: 0.7,
    })

    // Validate response
    if (!response.choices || response.choices.length === 0) {
      console.error('Empty response from OpenAI', { response })
      return NextResponse.json(
        { error: 'No response generated from AI model' },
        { status: 500 },
      )
    }

    const firstChoice = response.choices[0]
    if (!firstChoice.message || !firstChoice.message.content) {
      console.error('Empty message content from OpenAI', { firstChoice })
      return NextResponse.json(
        { error: 'Generated response has no content' },
        { status: 500 },
      )
    }

    // Return the response content
    return NextResponse.json(
      {
        content: firstChoice.message.content,
        role: 'assistant',
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    const errorCode =
      error instanceof Error && 'code' in error
        ? (error as Record<string, unknown>).code
        : undefined
    const errorStatus =
      error instanceof Error && 'status' in error
        ? (error as Record<string, unknown>).status
        : 500

    console.error('Chat API error:', {
      message: errorMessage,
      code: errorCode,
      status: errorStatus,
      stack: error instanceof Error ? error.stack : undefined,
    })

    return NextResponse.json(
      {
        error:
          errorMessage || 'An error occurred while processing your message',
      },
      { status: errorStatus as number },
    )
  }
}
