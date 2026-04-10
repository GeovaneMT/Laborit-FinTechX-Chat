'use client'

import type { SplashMessages } from '@features/splash/i18n'
import { Button } from '@ui/button'
import Link from 'next/link'

type SplashScreenProps = {
  messages: SplashMessages
}

export function SplashScreen({ messages }: SplashScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="space-y-8 p-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {messages['splash.title']}
          </h1>
          <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-300">
            {messages['splash.description']}
          </p>
        </div>
        <Link href="/onboarding">
          <Button size="lg" className="px-8">
            {messages['splash.button']}
          </Button>
        </Link>
      </div>
    </div>
  )
}
