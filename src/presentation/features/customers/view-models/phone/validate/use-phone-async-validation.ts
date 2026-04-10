'use client'

import { toast } from 'sonner'
import { useEffect, useRef, useState } from 'react'

import { useHandlePhones } from '@zustand/phone.store'

import { useDebounce } from '@pattern/hooks/use-debounce'
import { ValidatePhoneMutation } from '@mutations/phone/validate-phone-mutation'

import type { CreatePhoneRequestDto } from '@http/generated'

import type {
  FieldErrors,
  UseFormSetError,
  UseFormClearErrors,
} from 'react-hook-form'

interface usePhoneAsyncValidationProps {
  phoneNumber: string

  errors: FieldErrors<CreatePhoneRequestDto>
  setError: UseFormSetError<CreatePhoneRequestDto>
  clearErrors: UseFormClearErrors<CreatePhoneRequestDto>
}

export const usePhoneAsyncValidation = ({
  errors,
  setError,
  phoneNumber,
  clearErrors,
}: usePhoneAsyncValidationProps) => {
  const debouncedPhone = useDebounce(phoneNumber, 800)
  const lastValidated = useRef<string | null>(null)

  const { isPhoneInputEmpty } = useHandlePhones()
  const { mutateAsync, isPending, error } = ValidatePhoneMutation()

  const [phoneValidationError, setPhoneValidationError] =
    useState<Error | null>(null)

  useEffect(() => {
    if (Object.keys(errors).length > 0) return
    if (!debouncedPhone || isPhoneInputEmpty) return
    if (lastValidated.current === debouncedPhone) return

    lastValidated.current = debouncedPhone

    toast.promise(
      mutateAsync(debouncedPhone, {
        onSuccess(data) {
          if (!data.isValid) {
            const message = data.errorMessage || 'Invalid phone number'

            setPhoneValidationError(new Error(message))

            setError('number', {
              type: 'manual',
              message,
            })

            throw new Error(message)
          }

          setPhoneValidationError(null)
          clearErrors('number')
        },
      }),
      {
        loading: 'Validando telefone...',
        success: 'Telefone disponível',
        error: (error: Error) => error.message,
      },
    )
  }, [
    errors,
    setError,
    mutateAsync,
    clearErrors,
    debouncedPhone,
    isPhoneInputEmpty,
  ])

  return {
    phoneValidationError,
    mutationError: error,
    isValidatingPhone: isPending,
  }
}
