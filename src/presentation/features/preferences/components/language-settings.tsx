'use client'

import { LanguagesIcon } from 'lucide-react'

import type { PreferencesMessages } from '@features/preferences/i18n'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/presentation/ui/shadcn/select'
import { TypographyMuted } from '@/presentation/ui/typography/basic/muted'
import { TypographyP } from '@/presentation/ui/typography/p'
import { Label } from '@ui/shadcn/label'

import { SUPPORTED_LOCALES } from '@/core/constants'

import { LOCALES_LABELS } from '@/infra/i18n'

type LanguageSettingsProps = {
  messages: PreferencesMessages
  selectedLocale: 'en' | 'pt' | undefined
  changeLanguage: (nextLocale: string) => void
}

export function LanguageSettings({
  messages,
  changeLanguage,
  selectedLocale,
}: LanguageSettingsProps) {
  return (
    <div className="space-y-4">
      <Label htmlFor="language-select">
        <LanguagesIcon size={32} />
        <div>
          <TypographyP className="flex gap-4 text-center">
            {messages['preferences.language']}
          </TypographyP>
          <TypographyMuted>
            {messages['preferences.language.sub']}
          </TypographyMuted>
        </div>
      </Label>
      <Select value={selectedLocale} onValueChange={changeLanguage}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{messages['preferences.language']}</SelectLabel>
            {SUPPORTED_LOCALES.map((locale) => (
              <SelectItem key={locale} value={locale}>
                {LOCALES_LABELS[locale]}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
