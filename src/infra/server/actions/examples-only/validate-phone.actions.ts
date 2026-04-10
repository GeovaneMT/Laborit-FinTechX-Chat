'use server'

import { validatePhone } from '@/http/services/example-only/validate-phone.service'

import type { ValidatePhoneReplyDtoOutput } from '@http/generated/models'

export interface ValidatePhoneSuccessProps extends ValidatePhoneReplyDtoOutput {
  status?: number
  errorMessage?: string
}

export const validatePhoneAction = async (
  number: string,
): Promise<ValidatePhoneSuccessProps> => {
  const reply = await validatePhone(number)

  if (reply.isLeft())
    return {
      isValid: false,
      status: reply.value.statusCode,
      errorMessage: reply.value.errorMessage,
    }

  const { isValid } = reply.value

  return {
    isValid,
  }
}
