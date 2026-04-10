'use client'

import { toast } from 'sonner'
import { usePhones } from '@zustand/phone.store'
import { RemovePhoneMutation } from '@mutations/phone/remove-phone.mutation'

export const usePhoneIndex = () => {
  const { phones: storePhones } = usePhones()
  const { mutateAsync, isRemovingPhone } = RemovePhoneMutation()

  const onRemovePhone = async (phoneId: string) => {
    toast.promise(mutateAsync(phoneId), {
      loading: 'Removendo telefone...',
      success: 'Telefone removido com sucesso!',
      error: (error: Error) => error.message,
    })
  }

  return {
    storePhones,
    onRemovePhone,
    isRemovingPhone,
  }
}
