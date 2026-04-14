import { toast } from 'sonner'

import type { ProfileMessages } from '@features/profile/i18n'

import { useGetMeQuery } from '@/infra/data/tanstack/react-query/queries/me/use-get-me.query'

export function useProfileViewModel(messages: ProfileMessages) {
  const { data: profile, isLoading, error } = useGetMeQuery()
  const logoutAction = () => toast(messages['profile.logoutToast'])

  function getProfileSecurityLabel(score: number): string {
    if (score < 25) return messages['profile.securityPoor']
    if (score < 50) return messages['profile.securityNotBad']
    if (score < 75) return messages['profile.securityGreat']
    return messages['profile.securityExcellent']
  }

  return {
    error,
    profile,
    isLoading,
    logoutAction,
    getProfileSecurityLabel,
  }
}
