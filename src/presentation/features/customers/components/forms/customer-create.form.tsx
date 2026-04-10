'use client'

import { Input } from '@shadcn/input'
import { Separator } from '@ui/separator'

import type { UseFormReturn } from 'react-hook-form'
import type { CreateAccountRequestDTO } from '@http/generated'

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@ui/form'

interface CustomerCreateFormProps {
  delayError?: number

  onSubmit: (customerData: Omit<CreateAccountRequestDTO, 'username'>) => void

  form: UseFormReturn<Omit<CreateAccountRequestDTO, 'username'>>
}

export const CustomerCreateForm = ({
  form,
  onSubmit,
  delayError = 800,
}: CustomerCreateFormProps) => {
  const { control, clearErrors } = form

  return (
    <Form {...form}>
      <form
        id="customerCreateForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-1 grid grid-cols-1 gap-y-4"
      >
        <ul className="space-y-4">
          {/* Row 1 — first and last name (two columns on md+) */}
          <li>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* First name */}
              <li>
                <FormField
                  control={control}
                  name="firstName"
                  render={({ field: { name, value, ...field } }) => (
                    <FormItem>
                      <div className="flex space-x-2">
                        <FormLabel>Primeiro nome</FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input
                          {...field}
                          onBlur={() => {
                            setTimeout(() => {
                              if (!value) clearErrors(name)
                            }, delayError)
                          }}
                          placeholder="Primeiro nome do cliente"
                        />
                      </FormControl>
                      <FormDescription>Digite o primeiro nome.</FormDescription>
                    </FormItem>
                  )}
                />
              </li>

              {/* Last name */}
              <li>
                <FormField
                  control={control}
                  name="lastName"
                  render={({ field: { name, value, ...field } }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormLabel>Sobrenome</FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input
                          {...field}
                          onBlur={() => {
                            setTimeout(() => {
                              if (!value) clearErrors(name)
                            }, delayError)
                          }}
                          placeholder="Sobrenome do cliente"
                        />
                      </FormControl>
                      <FormDescription>Digite o sobrenome.</FormDescription>
                    </FormItem>
                  )}
                />
              </li>
            </ul>
          </li>
          <Separator />

          {/* Row 2 — email (validated via HTTP) */}
          <li>
            <FormField
              control={control}
              name="email"
              render={({ field: { name, value, ...field } }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <FormLabel>E-mail</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      onBlur={() => {
                        setTimeout(() => {
                          if (!value) clearErrors(name)
                        }, delayError)
                      }}
                      className="flex flex-col gap-4 md:flex-row"
                      placeholder="cliente@email.com"
                    />
                  </FormControl>
                  <FormDescription>
                    Este deve ser o melhor email.
                  </FormDescription>
                </FormItem>
              )}
            />
          </li>
          <Separator />

          {/* Row 3 — password */}
          <li>
            <FormField
              control={control}
              name="password"
              render={({ field: { name, value, ...field } }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <FormLabel>Senha</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      onBlur={() => {
                        setTimeout(() => {
                          if (!value) clearErrors(name)
                        }, delayError)
                      }}
                      placeholder="Exemplo: M3u#Nome"
                    />
                  </FormControl>
                  <FormDescription>
                    Escolha uma senha com ao menos 1 número, 1 letra Maiúscula e
                    um símbolo.
                  </FormDescription>
                </FormItem>
              )}
            />
          </li>
        </ul>
      </form>
    </Form>
  )
}

CustomerCreateForm.displayName = 'CustomerCreateForm'
