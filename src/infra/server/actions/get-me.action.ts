'use server'

import { right } from '@core/either'
import { safeParseProfileInput } from '@core/schemas/profile.schema'

import type { ServerActionResult } from '@/infra/server/types/server.types'
import { wrapServerActionResult } from '@infra/server/actions/common/action-factory'

import type { ProfileDto } from '@/http/generated/models'
import { getMe } from '@/http/services/get-me.service'

export interface FetchCustomerDetailsResultProps {
  success: boolean
  error?: string
  status?: number
  profile?: ProfileDto
}

export const getMeAction = async (): Promise<
  ServerActionResult<ProfileDto>
> => {
  const reply = await getMe()

  if (reply.isLeft()) {
    const { errorMessage } = reply.value
    throw new Error(errorMessage)
  }

  const { value: profile } = reply

  const { data, error, success } = safeParseProfileInput(profile)
  if (!success || error || !data) {
    throw new Error('Invalid profile data')
  }

  return await wrapServerActionResult(right(data), {
    revalidateTags: ['profile'],
  })
}
