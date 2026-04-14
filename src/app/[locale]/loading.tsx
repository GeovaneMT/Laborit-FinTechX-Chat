import { LoadingMessage } from '@ui/loading-message'

import { DEFAULT_LOCALE } from '@/core/constants'

import { getLocalMessages, LayoutMessages, resolveLocale } from '@/infra/i18n'

export default async function RootLoading() {
  const locale = resolveLocale(DEFAULT_LOCALE)
  const messages = getLocalMessages<LayoutMessages>({
    locale,
    messages: LayoutMessages,
  })

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <LoadingMessage message={messages['loading']} />
    </div>
  )
}
