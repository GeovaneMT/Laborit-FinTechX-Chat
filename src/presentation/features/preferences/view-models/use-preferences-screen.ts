'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'

import type { Locale } from '@infra/i18n'
import { getLocaleFromPathname, resolveLocale } from '@infra/i18n'

export function usePreferencesScreen(locale: Locale) {
  const { theme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const selectedLocale = getLocaleFromPathname(pathname)

  const changeLanguage = (nextLocale: string) => {
    const resolvedNextLocale = resolveLocale(nextLocale)

    const nextPathname = pathname.replace(
      `/${locale}`,
      `/${resolvedNextLocale}`,
    )

    router.push(nextPathname)
  }

  return {
    theme,
    selectedLocale,
    changeLanguage,
  }
}
