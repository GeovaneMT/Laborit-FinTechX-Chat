'use client'

import { useMemo } from 'react'

import { useHandlePhones } from '@zustand/phone.store'

import { usePhoneStoreCreate } from '@features/customers/view-models/phone/create/use-phone-store-create'
import { useCustomerCreateForm } from '@features/customers/view-models/create/use-customer-create-form'
import { useCustomerCreateSteps } from '@features/customers/view-models/create/use-customer-create-steps'
import { useCustomerCreateState } from '@features/customers/view-models/create/use-customer-create-state'

export const useCustomerCreate = () => {
  const phoneStoreData = usePhoneStoreCreate()
  const { noMorePhonesToAdd } = useHandlePhones()

  const {
    hasErrors: hasPhoneStoreErrors,
    isValidating: isValidatingPhones,
    isLoading: isCreatingStorePhone,
    stepsState: phoneStoreStepsState,
  } = phoneStoreData

  const stepsData = useCustomerCreateSteps()
  const { step, setStep, isLastStep } = stepsData

  const {
    form,
    onSubmit,
    hasErrors: hasCustomerErrors,
    isLoading: isLoadingCustomer,
    isValidating: isValidatingCustomer,
  } = useCustomerCreateForm(stepsData)

  const isValidating = useMemo(
    () => isValidatingCustomer || isValidatingPhones,
    [isValidatingCustomer, isValidatingPhones],
  )

  const isLoading = useMemo(
    () => isValidating || isLoadingCustomer || isCreatingStorePhone,
    [isValidating, isLoadingCustomer, isCreatingStorePhone],
  )

  const hasErrors = useMemo(
    () => hasCustomerErrors || hasPhoneStoreErrors,
    [hasCustomerErrors, hasPhoneStoreErrors],
  )

  const canProceedToNexStep = useMemo(
    () => !isLoading && !hasErrors,
    [isLoading, hasErrors],
  )

  const canCreateCustomer = useMemo(
    () => canProceedToNexStep && isLastStep && noMorePhonesToAdd,
    [canProceedToNexStep, isLastStep, noMorePhonesToAdd],
  )

  const stepsState = useCustomerCreateState({
    ...stepsData,
    step,
    canCreateCustomer,
    phoneStoreStepsState,
    hasErrors: hasCustomerErrors,
    isLoading: isLoadingCustomer,
    isValidating: isValidatingCustomer,
  })

  return {
    form,
    step,
    setStep,
    onSubmit,
    stepsState,
    phoneStoreData,
    canProceedToNexStep,
  }
}
