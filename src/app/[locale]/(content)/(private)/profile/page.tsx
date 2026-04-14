import { Suspense } from 'react'

import { profileQueryFn } from '@queryFn/me/get-me.query'

import { ProfileScreen } from '@features/profile/components/profile-screen'
import { ProfileMessages } from '@features/profile/i18n'

import { ClientBoundary } from '@pattern/client-boundaries'
import { PrefetchQuery } from '@pattern/prefetch-query'

import { LoadingMessage } from '@ui/loading-message'

import { getLocalMessages, resolveLocale } from '@infra/i18n'
import { queryKeyRegistry } from '@infra/query-keys'

interface ProfilePageProps {
  params: Promise<{
    locale: string
  }>
}

const RenderProfilePage = async ({ params }: ProfilePageProps) => {
  const { locale: localeParam } = await params
  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<ProfileMessages>({
    locale,
    messages: ProfileMessages,
  })

  const { current: queryKey } = queryKeyRegistry.profile

  return (
    <PrefetchQuery queryKey={queryKey} queryFn={profileQueryFn}>
      <ProfileScreen messages={messages} />
    </PrefetchQuery>
  )
}

const CustomerDetailsPage = async ({ params }: ProfilePageProps) => (
  <ClientBoundary errorTitle="Ocorreu um erro ao buscar os dados do perfil:">
    <Suspense fallback={<LoadingMessage message="Carregando perfil..." />}>
      <RenderProfilePage params={params} />
    </Suspense>
  </ClientBoundary>
)

export default CustomerDetailsPage
