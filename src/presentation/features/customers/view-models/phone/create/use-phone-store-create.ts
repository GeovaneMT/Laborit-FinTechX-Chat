'use client'

import { usePhoneStoreCreateForm } from '@features/customers/view-models/phone/create/use-phone-store-create-form'
import { usePhoneStoreCreateState } from '@features/customers/view-models/phone/create/use-phone-store-create-submit-state'

export const usePhoneStoreCreate = () => {
  const { form, onSubmit, hasErrors, isLoading, isValidating } =
    usePhoneStoreCreateForm()

  const stepsState = usePhoneStoreCreateState({
    isLoading,
    hasErrors,
    isValidating,
  })

  return {
    form,
    onSubmit,
    hasErrors,
    isLoading,
    stepsState,
    isValidating,
  }
}
