import Link from 'next/link'
import { Button } from '@ui/button'

export default function SplashPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="space-y-8 p-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Laborit Chat
          </h1>
          <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-300">
            Seu assistente de IA para dúvidas e apoio. Lembre-se: não sou um
            profissional médico.
          </p>
        </div>
        <Link href="/onboarding">
          <Button size="lg" className="px-8">
            Começar
          </Button>
        </Link>
      </div>
    </div>
  )
}
