'use client'

import { Label } from '@shadcn/label'
import { SunMoonIcon } from 'lucide-react'

import type { PreferencesMessages } from '@features/preferences/i18n'

import { AnimatedThemeToggler } from '@ui/magicui/animated-theme-toggler'
import { TypographyMuted } from '@ui/typography/basic/muted'

type ThemeSettingsProps = {
  theme: string | undefined
  messages: PreferencesMessages
}

export function ThemeSettings({ theme, messages }: ThemeSettingsProps) {
  return (
    <div className="flex items-center space-x-4">
      <SunMoonIcon fill={theme === 'dark' ? 'white' : 'black'} size={32} />
      <div className="space-y-1">
        <Label htmlFor="dark-mode">{messages['preferences.theme']}</Label>
        <TypographyMuted>{messages['preferences.theme.sub']}</TypographyMuted>
      </div>
      <div className="flex flex-1 justify-end">
        <AnimatedThemeToggler />
      </div>
    </div>
  )
}
