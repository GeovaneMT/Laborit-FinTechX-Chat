'use client'

import { toast } from 'sonner'
import { useForm, useWatch } from 'react-hook-form'
import { useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { usePhones, useHandlePhones } from '@zustand/phone.store'

import { CreatePhoneMutation } from '@mutations/phone/create-phone.mutation'

import { PhoneValidationSchema } from '@features/vehicles/schemas'

import { usePhoneAsyncValidation } from '@features/customers/view-models/phone/validate/use-phone-async-validation'

import type { CreatePhoneRequestDto } from '@http/generated/models'

const createPhoneSchema = (storePhones: CreatePhoneRequestDto[]) =>
  PhoneValidationSchema.omit({
    id: true,
    userId: true,
    userRole: true,
  }).refine(
    (data) => !storePhones.some((phone) => phone.number === data.number),
    {
      path: ['number'],
      message: 'Este número já está listado',
    },
  )

export const usePhoneStoreCreateForm = () => {
  const [isTyping, setIsTyping] = useState(false)

  const { phones: storePhones, createPhone } = usePhones()
  const { setIsPhoneInputEmpty } = useHandlePhones()

  const form = useForm<CreatePhoneRequestDto>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(createPhoneSchema(storePhones)),
    defaultValues: {
      type: 'MOBILE',
      number: '',
      isWhatsapp: true,
    },
  })

  const { setError, formState, clearErrors } = form
  const { errors, isValid, isValidating: isvalidatingForm } = formState
  const allErrors = Object.keys(errors)

  const values = useWatch({
    control: form.control,
  })

  const phoneNumber = values.number

  const { isValidatingPhone, phoneValidationError } = usePhoneAsyncValidation({
    errors,
    setError,
    clearErrors,
    phoneNumber: phoneNumber ?? '',
  })

  const { mutateAsync, isCreatingPhone } = CreatePhoneMutation({
    form,
    isValid,
    createPhone,
    clearErrors,
    phoneValidationError,
  })

  useEffect(() => {
    setIsPhoneInputEmpty(!phoneNumber || !phoneNumber.length)
  }, [phoneNumber, setIsPhoneInputEmpty])

  useEffect(() => {
    const id = setTimeout(() => setIsTyping(false), 400)
    setIsTyping(true)
    return () => clearTimeout(id)
  }, [values])

  const isValidating = useMemo(
    () => isvalidatingForm || isValidatingPhone,
    [isvalidatingForm, isValidatingPhone],
  )

  const isLoading = useMemo(
    () => isTyping || isValidating || isCreatingPhone,
    [isTyping, isCreatingPhone, isValidating],
  )

  const hasErrors = useMemo(
    () => !!allErrors.length || !!phoneValidationError,
    [allErrors, phoneValidationError],
  )

  const onSubmit = async (phoneData: CreatePhoneRequestDto) => {
    toast.promise(mutateAsync(phoneData), {
      loading: 'Criando telefone...',
      success: 'Telefone adicionado com sucesso!',
      error: (error: Error) => error.message,
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
