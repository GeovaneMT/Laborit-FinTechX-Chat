'use client'

import { createContext, ReactNode, useContext } from 'react'

import { getMessages, Locale, resolveLocale } from '@infra/i18n'

interface I18nContextType {
  locale: Locale
  messages: Record<string, string>
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

interface I18nProviderProps {
  children: ReactNode
  locale?: string
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const resolvedLocale = resolveLocale(locale)
  const messages = getMessages(resolvedLocale)

  const t = (key: string) => messages[key] || key

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
