'use client'

import { toast } from 'sonner'
import { useMemo } from 'react'

import { UpdatePhonesMutation } from '@mutations/phone/update-phones.mutation'

import { usePhoneStoreCreate } from '@features/customers/view-models/phone/create/use-phone-store-create'
import { useUpdatePhonesSheet } from '@features/customers/view-models/phone/edit/use-update-phones-sheet'

import { usePhones, useHandlePhones } from '@zustand/phone.store'

import type { CustomerDetailsDTOOutput } from '@http/generated'

export const useUpdatePhones = (user: CustomerDetailsDTOOutput) => {
  const persistedPhones = user.phones

  const { phones: storePhones } = usePhones()
  const phoneStoreData = usePhoneStoreCreate()
  const { isPhoneInputEmpty } = useHandlePhones()
  const { mutateAsync, isUpdatingPhones } = UpdatePhonesMutation()
  const { hasPhonesChanged } = useUpdatePhonesSheet(persistedPhones)

  const phonesToDelete = persistedPhones.filter(
    (persistedPhone) =>
      !storePhones.some((storePhone) => storePhone.id === persistedPhone.id),
  )

  const {
    hasErrors,
    isValidating,
    isLoading: isCreatingStorePhone,
  } = phoneStoreData

  const isLoading = useMemo(
    () => isCreatingStorePhone || isUpdatingPhones || isValidating,
    [isCreatingStorePhone, isUpdatingPhones, isValidating],
  )

  const canCreateStorePhones = useMemo(
    () => !isLoading && !hasErrors && !isPhoneInputEmpty,
    [isLoading, hasErrors, isPhoneInputEmpty],
  )

  const canSavePhones = useMemo(
    () => !isLoading && !hasErrors && hasPhonesChanged && isPhoneInputEmpty,
    [isLoading, hasErrors, hasPhonesChanged, isPhoneInputEmpty],
  )

  const onSubmit = async () => {
    toast.promise(
      mutateAsync({
        persistedPhones,
        userEmail: user.email,
        userId: user.customerId,
      }),
      {
        loading: 'Atualizando telefones...',
        success: 'Telefones atualizados com sucesso!',
        error: (error: Error) => error.message,
      },
    )
  }

  return {
    onSubmit,
    isLoading,
    canSavePhones,
    phonesToDelete,
    phoneStoreData,
    isPhoneInputEmpty,
    canCreateStorePhones,
  }
}
