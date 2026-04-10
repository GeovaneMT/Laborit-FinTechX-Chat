import { cookies } from 'next/headers'

import { HomeScreen } from '@features/home/components/home-screen'
import { getMessages, resolveLocale } from '@features/home/i18n'

const HomePage = async () => {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <HomeScreen messages={messages} />
}

export default HomePage
