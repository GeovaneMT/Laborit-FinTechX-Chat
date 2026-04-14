'use client'

import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { UpdateProfileValidationSchema } from '@features/profile/schemas'

import { UpdateProfileMutation } from '@/infra/data/mutations/profile/update-profile.mutation'

import type { UpdateProfileDto } from '@/http/generated/models'

export const useUpdateProfileForm = () => {
  const [isSubmitNameButtonDisabled, setIsSubmitNameButtonDisabled] =
    useState(false)

  const [isNameInputEmpty, setIsNameInputEmpty] = useState(false)
  const [isEmailInputEmpty, setIsEmailInputEmpty] = useState(false)

  const form = useForm<UpdateProfileDto>({
    delayError: 800,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(UpdateProfileValidationSchema),
    defaultValues: {
      email: '',
      displayName: '',
    },
  })

  const { formState } = form

  const { errors, isSubmitting, isValidating } = formState

  const { mutateAsync, isUpdatingName } = UpdateProfileMutation()

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

  const onSubmit = (nameData: UpdateProfileDto) => {
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
    isNameInputEmpty,
    isEmailInputEmpty,
    setIsNameInputEmpty,
    setIsEmailInputEmpty,
    isSubmitNameButtonDisabled,
  }
}
