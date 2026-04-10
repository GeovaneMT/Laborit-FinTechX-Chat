'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useEffect, useMemo } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useSetCustomerName } from '@zustand/customer-name.store'

import { NameValidationSchema } from '@features/customers/schemas'

import { EditCustomerNameMutation } from '@mutations/customer/edit-customer-name.mutation'

import type {
  EditUserRequestDTO,
  CustomerDetailsDTOOutput,
} from '@http/generated/models'

interface useNameUpdateFormProps {
  customer: CustomerDetailsDTOOutput
}

export const useNameUpdateForm = ({ customer }: useNameUpdateFormProps) => {
  const {
    setIsLastNameInputEmpty,
    setIsFirstNameInputEmpty,

    setIsSubmitNameButtonDisabled,
  } = useSetCustomerName()

  const form = useForm<Omit<EditUserRequestDTO, 'username' | 'email'>>({
    delayError: 800,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(NameValidationSchema.omit({ username: true })),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  const { formState } = form

  const { errors, isSubmitting, isValidating } = formState

  const { mutateAsync, isUpdatingName } = EditCustomerNameMutation({
    customer,
  })

  const isLoading = useMemo(
    () => isSubmitting || isValidating || isUpdatingName,
    [isSubmitting, isValidating, isUpdatingName],
  )

  const isInputDisabled = useMemo(
    () => isSubmitting || isUpdatingName,
    [isSubmitting, isUpdatingName],
  )

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0
    setIsSubmitNameButtonDisabled(isLoading || hasErrors)
  }, [errors, isLoading, setIsSubmitNameButtonDisabled])

  const onSubmit = (
    nameData: Omit<EditUserRequestDTO, 'username' | 'email'>,
  ) => {
    toast.promise(mutateAsync(nameData), {
      loading: 'Atualizando nome...',
      success: 'Nome atualizado com sucesso!',
      error: (error: Error) => error.message,
    })
  }

  return {
    form,
    onSubmit,
    isInputDisabled,
    setIsLastNameInputEmpty,
    setIsFirstNameInputEmpty,
  }
}
