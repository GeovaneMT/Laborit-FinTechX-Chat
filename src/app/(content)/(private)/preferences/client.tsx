'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Switch } from '@ui/shadcn/switch'
import { Label } from '@ui/shadcn/label'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'

type PreferencesPageClientProps = {
  locale: string
  messages: Record<string, string>
}

const localeOptions = [
  { value: 'en', labelKey: 'preferences.languageOption.en' },
  { value: 'pt', labelKey: 'preferences.languageOption.pt' },
]

export function PreferencesPageClient({
  locale,
  messages,
}: PreferencesPageClientProps) {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false

    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'

    return document.documentElement.classList.contains('dark')
  })
  const [selectedLocale, setSelectedLocale] = useState(locale)

  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('locale='))
      ?.split('=')[1]

    if (cookieValue && cookieValue !== selectedLocale) {
      setSelectedLocale(cookieValue)
    }
  }, [selectedLocale])

  const changeLanguage = (value: string) => {
    setSelectedLocale(value)
    document.cookie = `locale=${value}; Path=/; Max-Age=${60 * 60 * 24 * 365}`
    router.refresh()
  }

  const currentLanguageLabel =
    localeOptions.find((option) => option.value === selectedLocale)?.labelKey ??
    localeOptions[0].labelKey

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        {messages['preferences.title']}
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>{messages['preferences.settings']}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">
              {messages['preferences.darkMode']}
            </Label>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={() => {
                const newDark = !darkMode
                setDarkMode(newDark)
                if (newDark) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
                localStorage.setItem('theme', newDark ? 'dark' : 'light')
              }}
            />
          </div>
          <div className="space-y-2">
            <Label>{messages['preferences.notifications']}</Label>
            <p className="text-sm text-gray-500">
              {messages['preferences.inDevelopment']}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="language-select">
              {messages['preferences.language']}
            </Label>
            <select
              id="language-select"
              value={selectedLocale}
              onChange={(event) => changeLanguage(event.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-indigo-400"
            >
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {messages[option.labelKey]}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500">
              {messages[currentLanguageLabel]}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
