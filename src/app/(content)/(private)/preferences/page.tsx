'use client'

import { useState } from 'react'
import { Switch } from '@ui/shadcn/switch'
import { Label } from '@ui/shadcn/label'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'

export default function PreferencesPage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false

    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'

    return document.documentElement.classList.contains('dark')
  })

  const toggleTheme = () => {
    const newDark = !darkMode
    setDarkMode(newDark)
    if (newDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Preferências</h1>
      <Card>
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Modo Escuro</Label>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={toggleTheme}
            />
          </div>
          <div className="space-y-2">
            <Label>Notificações</Label>
            <p className="text-sm text-gray-500">
              Funcionalidade em desenvolvimento
            </p>
          </div>
          <div className="space-y-2">
            <Label>Idioma</Label>
            <p className="text-sm text-gray-500">Português (Brasil)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
