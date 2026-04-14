'use client'

import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

import {
  getLocalMessages,
  LayoutMessages,
  type Locale,
  resolveLocale,
} from '@infra/i18n'

interface I18nContextType<TMessages extends Record<string, string>> {
  locale: Locale
  messages: TMessages
  t: (key: keyof TMessages) => string
}

const I18nContext = createContext<I18nContextType<LayoutMessages> | null>(null)

interface I18nProviderProps {
  children: ReactNode
  locale?: Locale
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const resolvedLocale = resolveLocale(locale)
  const messages = getLocalMessages<LayoutMessages>({
    locale: resolvedLocale,
    messages: LayoutMessages,
  })

  const t = (key: keyof typeof messages) => messages[key] || key

  return (
    <I18nContext.Provider value={{ locale: resolvedLocale, messages, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
