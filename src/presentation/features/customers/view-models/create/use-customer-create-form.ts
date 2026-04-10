'use client'

import { toast } from 'sonner'
import { useForm, useWatch } from 'react-hook-form'
import { useMemo, useEffect, useState } from 'react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'

import { onCustomerCreateHandleStep } from '@features/customers/view-models/on-actions/on-customer-create'
import { useEmailAsyncValidation } from '@features/customers/view-models/email/use-email-async-validation'
import { CreateAccountRequestSchema } from '@features/customers/schemas'

import { usePhones, useHandlePhones } from '@zustand/phone.store'

import { CreateCustomerMutation } from '@mutations/customer/create-customer.mutation'

import type { CreateAccountRequestDTO } from '@http/generated/models'

import type { stepsStateProps } from '@features/customers/view-models/create/use-customer-create-steps'

interface useCustomerCreateFormProps extends stepsStateProps {
  isLastStep: boolean
}

export const useCustomerCreateForm = ({
  steps,
  setStep,
  nextIndex,
  isLastStep,
}: useCustomerCreateFormProps) => {
  const [isTyping, setIsTyping] = useState(false)

  const { phones } = usePhones()
  const { noMorePhonesToAdd, setAccordionVisibility } = useHandlePhones()

  const form = useForm<Omit<CreateAccountRequestDTO, 'username'>>({
    mode: 'onChange',
    delayError: 800,
    shouldFocusError: true,
    resolver: standardSchemaResolver(
      CreateAccountRequestSchema.omit({
        username: true,
      }),
    ),
    defaultValues: {
      email: '',
      password: '',
      phones: [],
      lastName: '',
      firstName: '',
    },
  })

  const { setError, formState, clearErrors } = form
  const { errors, isValid, isValidating: isvalidatingForm } = formState
  const allErrors = Object.keys(errors)

  const values = useWatch({
    control: form.control,
  })

  const email = values.email

  const { isValidatingEmail, emailValidationError } = useEmailAsyncValidation({
    errors,
    setError,
    clearErrors,
    email: email ?? '',
  })

  const { mutateAsync, isCreatingCustomer } = CreateCustomerMutation({
    form,
    phones,
    isValid,
    emailValidationError,
  })

  useEffect(() => {
    const id = setTimeout(() => setIsTyping(false), 400)
    setIsTyping(true)
    return () => clearTimeout(id)
  }, [values])

  const isValidating = useMemo(
    () => isvalidatingForm || isValidatingEmail,
    [isvalidatingForm, isValidatingEmail],
  )

  const isLoading = useMemo(
    () => isTyping || isValidating || isCreatingCustomer,
    [isTyping, isCreatingCustomer, isValidating],
  )

  const hasErrors = useMemo(
    () => !!allErrors.length || !!emailValidationError,
    [allErrors, emailValidationError],
  )

  const canProceedToNexStep = useMemo(
    () => !isLoading && !hasErrors,
    [isLoading, hasErrors],
  )

  const canCreateCustomer = useMemo(
    () => canProceedToNexStep && isLastStep && noMorePhonesToAdd,
    [canProceedToNexStep, isLastStep, noMorePhonesToAdd],
  )

  const onSubmit = async (
    customerData: Omit<CreateAccountRequestDTO, 'username'>,
  ) => {
    if (canCreateCustomer) {
      toast.promise(mutateAsync(customerData), {
        loading: 'Criando cliente...',
        success: 'Cliente criado com sucesso!',
        error: (error: Error) => error.message,
      })

      return
    }

    onCustomerCreateHandleStep({
      steps,
      setStep,
      nextIndex,
      form,
      isValid,
      emailValidationError,
      setAccordionVisibility,
    })
  }

  return {
    form,
    onSubmit,
    hasErrors,
    isLoading,
    isValidating,
  }
}
