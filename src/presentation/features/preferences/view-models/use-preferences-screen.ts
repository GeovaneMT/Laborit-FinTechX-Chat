'use client'

import type { Locale } from '@features/preferences/i18n'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function usePreferencesScreen(_locale: Locale) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

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

  const isDark = theme === 'dark'

  const toggleDarkMode = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return {
    isDark,
    toggleDarkMode,
    selectedLocale,
    changeLanguage,
  }
}
