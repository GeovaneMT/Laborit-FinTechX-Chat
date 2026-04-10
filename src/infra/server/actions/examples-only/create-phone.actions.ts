'use server'

import { updateTag } from 'next/cache'
import { queryClient } from '@tanstack/react-query/query-client'
import { createPhone } from '@/http/services/example-only/create-phone.service'

import type { Error, Success } from '@http/types/api.types'
import type { CreatePhoneRequestDto } from '@http/generated/models'

import { serverResourceCacheTags } from '@infra/cache-tags'

import {
  customerDetailsByIdQueryKey,
  customerDetailsByEmailQueryKey,
} from '@infra/query-keys'

export interface createPhoneActionProps extends CreatePhoneRequestDto {
  userId: string
  userEmail: string
}

export const createPhoneAction = async (
  PhoneRequestData: createPhoneActionProps,
): Promise<Success | Error> => {
  const reply = await createPhone(PhoneRequestData)

  if (reply.isLeft()) {
    return {
      ...reply.value,
      success: false,
    }
  }

  updateTag(serverResourceCacheTags.customerId(PhoneRequestData.userId))
  updateTag(serverResourceCacheTags.customerByIdAction(PhoneRequestData.userId))

  updateTag(serverResourceCacheTags.customerEmail(PhoneRequestData.userEmail))
  updateTag(
    serverResourceCacheTags.customerEmailAction(PhoneRequestData.userEmail),
  )

  queryClient.invalidateQueries({
    queryKey: customerDetailsByIdQueryKey(PhoneRequestData.userId),
  })

  queryClient.invalidateQueries({
    queryKey: customerDetailsByEmailQueryKey(PhoneRequestData.userEmail),
  })

  return {
    success: true,
    successMessage: 'Telefone cadastrado com sucesso!',
  }
}
