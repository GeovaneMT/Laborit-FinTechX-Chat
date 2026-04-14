import { UpdateProfileAction } from '@actions/update-profile.action'
import { useMutation } from '@tanstack/react-query'

import type { UpdateProfileDto } from '@/http/generated/models'

export const UpdateProfileMutation = () => {
  const { mutateAsync, isPending: isUpdatingName } = useMutation({
    mutationFn: async (payload: UpdateProfileDto) => {
      const reply = await UpdateProfileAction(payload)

      if (!reply.success) {
        throw new Error(reply.error?.message)
      }

      return reply
    },
    onSuccess: (_, _payload) => {
      // router.replace(`/clientes/${slugify(payload.firstName)}_${email}`)
    },
  })

  return {
    mutateAsync,
    isUpdatingName,
  }
}
