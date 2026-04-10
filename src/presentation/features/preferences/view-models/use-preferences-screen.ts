'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Locale } from '../i18n'

export function usePreferencesScreen(locale: Locale) {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState(locale)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      setDarkMode(stored === 'dark')
    } else {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
  }, [])

  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('locale='))
      ?.split('=')[1]

    if (cookieValue && cookieValue !== selectedLocale) {
      setSelectedLocale(cookieValue as Locale)
    }
  }, [selectedLocale])

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
