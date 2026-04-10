'use client'

import { Input } from '@shadcn/input'
import { Separator } from '@ui/separator'

import { useNameUpdateForm } from '@features/customers/view-models/name/use-name-update-form'

import type { CustomerDetailsDTOOutput } from '@http/generated'

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@ui/form'

interface NameUpdateFormProps {
  delayError?: number
  customer: CustomerDetailsDTOOutput
}

export const NameUpdateForm = ({
  customer,
  delayError = 800,
}: NameUpdateFormProps) => {
  const {
    form,
    onSubmit,
    isInputDisabled,
    setIsLastNameInputEmpty,
    setIsFirstNameInputEmpty,
  } = useNameUpdateForm({ customer })

  const { control, clearErrors } = form

  return (
    <Form {...form}>
      <form id="nameUpdateForm" onSubmit={form.handleSubmit(onSubmit)}>
        <ul className="space-y-4">
          {/* First Name Field */}
          <li className="mb-6">
            <FormField
              name="firstName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primeiro nome</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      type="text"
                      inputMode="text"
                      disabled={isInputDisabled}
                      placeholder="Novo Nome"
                      onChange={(event) => {
                        const { value } = event.target

                        field.onChange(value)
                        setIsFirstNameInputEmpty(!value)
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          if (!field.value) clearErrors(field.name)
                        }, delayError)
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Insira aqui o seu primeiro nome.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>

          <Separator />

          {/* Last Name Field */}
          <li className="mb-6">
            <FormField
              name="lastName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      type="text"
                      inputMode="text"
                      disabled={isInputDisabled}
                      placeholder="Novo Sobrenome"
                      onChange={(event) => {
                        const { value } = event.target

                        field.onChange(value)
                        setIsLastNameInputEmpty(!value)
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          if (!field.value) clearErrors(field.name)
                        }, delayError)
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Insira aqui o seu sobrenome.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </li>
        </ul>
      </form>
    </Form>
  )
}

NameUpdateForm.displayName = 'NameUpdateForm'
