'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'

import { getLocaleFromPathname } from '@infra/i18n'

export function usePreferencesScreen() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { theme, setTheme } = useTheme()

  const selectedLocale = getLocaleFromPathname(pathname)

  const changeLanguage = (nextLocale: string) => {
    const currentLocale = getLocaleFromPathname(pathname)

    const nextPathname = currentLocale
      ? pathname.replace(`/${currentLocale}`, `/${nextLocale}`)
      : `/${nextLocale}${pathname}`

    const search = searchParams.toString()
    router.push(search ? `${nextPathname}?${search}` : nextPathname)
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
