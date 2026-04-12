import { ProfileScreen } from '@features/profile/components/profile-screen'
import { ProfileMessages } from '@features/profile/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

export { generateStaticParams } from '@infra/i18n'

interface ProfilePageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<ProfileMessages>({
    locale,
    messages: ProfileMessages,
  })

  return <ProfileScreen messages={messages} />
}
