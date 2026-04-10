'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Locale } from '../i18n'

export function usePreferencesScreen(_locale: Locale) {
  const router = useRouter()
  const [darkMode, _setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) {
        return stored === 'dark'
      }
      return document.documentElement.classList.contains('dark')
    }
    return false
  })
  const [selectedLocale, setSelectedLocale] = useState(() => {
    if (typeof window !== 'undefined') {
      const cookieValue = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith('locale='))
        ?.split('=')[1]
      return (cookieValue as Locale) || _locale
    }
    return _locale
  })

  const changeLanguage = (value: string) => {
    setSelectedLocale(value as Locale)
    document.cookie = `locale=${value}; Path=/; Max-Age=${60 * 60 * 24 * 365}`
    router.refresh()
  }

  return {
    darkMode,
    selectedLocale,
    changeLanguage,
  }
}
