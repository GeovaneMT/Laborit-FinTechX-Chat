'use client'

import type { Locale, PreferencesMessages } from '@features/preferences/i18n'
import { usePreferencesScreen } from '@features/preferences/view-models/use-preferences-screen'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { Label } from '@ui/shadcn/label'
import { Switch } from '@ui/shadcn/switch'

type PreferencesScreenProps = {
  locale: Locale
  messages: PreferencesMessages
}

export function PreferencesScreen({
  locale,
  messages,
}: PreferencesScreenProps) {
  const { isDark, toggleDarkMode, selectedLocale, changeLanguage } =
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
              checked={isDark}
              onCheckedChange={toggleDarkMode}
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
