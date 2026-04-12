import { HomeScreen } from '@features/home/components/home-screen'
import { HomeMessages } from '@features/home/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface HomePageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<HomeMessages>({
    locale,
    messages: HomeMessages,
  })

  return <HomeScreen messages={messages} />
}
