'use server'

import { right } from '@core/either'
import { safeParseProfileInput } from '@core/schemas/profile.schema'

import type { ServerActionResult } from '@/infra/server/types/server.types'
import { wrapServerActionResult } from '@infra/server/actions/common/action-factory'

import type { ProfileDto, UpdateProfileDto } from '@/http/generated/models'
import { updateProfile } from '@/http/services/update-profile.service'

export const UpdateProfileAction = async (
  profile: UpdateProfileDto,
): Promise<ServerActionResult<ProfileDto>> => {
  const reply = await updateProfile(profile)

  if (reply.isLeft()) {
    const { errorMessage } = reply.value
    throw new Error(errorMessage)
  }

  const updatedProfile = reply.value

  const { data, error } = safeParseProfileInput(updatedProfile)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('Invalid profile data')
  }

  return wrapServerActionResult(right(data), {
    revalidateTags: ['profile'],
  })
}
