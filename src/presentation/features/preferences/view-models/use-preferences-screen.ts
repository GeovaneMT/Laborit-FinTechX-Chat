'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'

import type { Locale } from '@infra/i18n'
import { useLocalePreference } from '@infra/stores/preferences-store'

export function usePreferencesScreen(_locale: Locale) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { theme, setTheme } = useTheme()
  const { locale: selectedLocale, setLocale } = useLocalePreference()

  const changeLanguage = (value: string) => {
    const locale = value as Locale
    setLocale(locale)

    const segments = pathname.split('/')
    if (segments.length > 1 && segments[1]) {
      segments[1] = locale
    }

    const search = searchParams?.toString()
    const nextPath = `${segments.join('/')}${search ? `?${search}` : ''}`

    router.push(nextPath)
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
