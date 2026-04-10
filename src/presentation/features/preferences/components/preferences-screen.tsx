'use client'

import { usePreferencesScreen } from '../view-models/use-preferences-screen'
import type { Locale, PreferencesMessages } from '../i18n'
import { Button } from '@ui/button'
import { Switch } from '@ui/shadcn/switch'
import { Label } from '@ui/shadcn/label'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'

type PreferencesScreenProps = {
  locale: Locale
  messages: PreferencesMessages
}

export function PreferencesScreen({
  locale,
  messages,
}: PreferencesScreenProps) {
  const { darkMode, selectedLocale, changeLanguage } =
    usePreferencesScreen(locale)

  const currentLanguageLabel =
    messages[
      selectedLocale === 'pt'
        ? 'preferences.languageOption.pt'
        : 'preferences.languageOption.en'
    ]

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
              <option value="en">
                {messages['preferences.languageOption.en']}
              </option>
              <option value="pt">
                {messages['preferences.languageOption.pt']}
              </option>
            </select>
            <p className="text-sm text-gray-500">{currentLanguageLabel}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
