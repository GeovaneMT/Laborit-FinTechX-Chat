'use server'

import { z } from 'zod/v4'
import { wrapServerActionMutation } from '@infra/server/actions/common/action-factory'
import { createPhone } from '@http/services/example-only/create-phone.service'

import type { CreatePhoneRequestDto } from '@http/generated/models'
import { getFirstZodErrorMessage } from '@core/validation/zod-errors'
import { createPhoneInputSchema } from '@core/schemas/create-phone.schema'
import type { CreatePhoneInput } from '@core/schemas/create-phone.schema'

export type CreatePhoneActionInput = CreatePhoneInput & CreatePhoneRequestDto

export const createPhoneAction = async (
  phoneData: CreatePhoneActionInput,
): Promise<{
  success: boolean
  message?: string
  error?: { code: string; message: string; statusCode?: number }
}> => {
  try {
    const validatedInput = createPhoneInputSchema.parse(phoneData)

    const reply = await createPhone(validatedInput)

    return await wrapServerActionMutation(reply, 'Phone created successfully', {
      revalidateTags: [
        `customer:${validatedInput.userId}`,
        `customer-email:${validatedInput.userEmail}`,
      ],
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: getFirstZodErrorMessage(error),
        },
      }
    }

    console.error('Error creating phone:', error)
    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to create phone',
        statusCode: 500,
      },
    }
  }
}
