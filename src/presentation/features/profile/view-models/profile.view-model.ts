import { queryKeyRegistry } from '@infra/query-keys'

import { useQuery } from '@tanstack/react-query'
import { useProfileForm } from '@features/profile/hooks'

export function useProfileViewModel() {
  const { submitForm, isSubmitting } = useProfileForm()
  const { data: profile, isLoading } = useQuery({
    queryKey: queryKeyRegistry.profile.current,
    queryFn: async () => {
      // Fetch profile logic
      return { displayName: 'John Doe', email: 'john@example.com' }
    },
  })

  return {
    profile,
    isLoading,
    submitForm,
    isSubmitting,
  }
}
