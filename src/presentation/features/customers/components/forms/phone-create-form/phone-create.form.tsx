'use client'

import { MessageCircleMore } from 'lucide-react'

import { phoneTypes } from '@core/enums/prisma.enums'

import { phoneTypeLabels } from '@features/customers/utils/phone-type-labels'

import { TypographyP } from '@ui/typography/p'
import { useHandlePhones } from '@zustand/phone.store'

import { Label } from '@shadcn/label'
import { Input } from '@shadcn/input'
import { Separator } from '@ui/separator'
import { Checkbox } from '@shadcn/checkbox'

import type { Control, UseFormClearErrors } from 'react-hook-form'

import type { CreatePhoneRequestDto } from '@http/generated/models'

import type { FormType } from '@pattern/forms/types/form.types'

import { RadioGroup, RadioGroupItem } from '@shadcn/radio-group'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@shadcn/accordion'

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@ui/form'

interface baseProps {
  delayError?: number
  isValidating: boolean
}

interface PhoneCreateFormContentProps extends baseProps {
  control: Control<CreatePhoneRequestDto, unknown, CreatePhoneRequestDto>
  clearErrors: UseFormClearErrors<CreatePhoneRequestDto>
}

interface PhoneCreateFormProps extends baseProps {
  disableAccordion?: boolean

  form: FormType<CreatePhoneRequestDto>
  onSubmit: (data: CreatePhoneRequestDto) => void
}

const PhoneCreateFormContent = ({
  control,
  delayError,
  clearErrors,
}: PhoneCreateFormContentProps) => (
  <ul className="mx-1 space-y-4">
    {/* Number Field */}
    <li className="mb-6">
      <FormField
        name="number"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value ?? ''}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Número de Telefone"
                onBlur={() => {
                  setTimeout(() => {
                    if (!field.value) clearErrors(field.name)
                  }, delayError)
                }}
              />
            </FormControl>
            <FormDescription>
              Insira aqui o seu melhor número de telefone.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </li>

    <Separator />

    <ul className="grid-cols-9 items-center justify-between space-y-4 space-x-4 sm:grid">
      {/* Phone Type Field */}
      <li className="col-span-4">
        <FormField
          control={control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Tipo de telefone</FormLabel>
              <FormControl>
                <RadioGroup
                  key={value}
                  defaultValue={value}
                  onValueChange={onChange}
                >
                  {phoneTypes.map((type) => (
                    <div key={type} className="flex items-center gap-3">
                      <RadioGroupItem value={type} id={type} />
                      <Label htmlFor={type}>{phoneTypeLabels[type]}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Escolha o tipo do seu número de telefone, se é um número de
                celular, residencial, ou trabalho.
              </FormDescription>
            </FormItem>
          )}
        />
      </li>

      <Separator orientation="vertical" className="mx-auto self-stretch" />

      {/* Is Whatsapp Checkbox */}
      <li className="col-span-4">
        <FormField
          control={control}
          name="isWhatsapp"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <div className="flex justify-center space-x-2">
                <FormControl>
                  <Label className="hover:bg-accent has-aria-checked:bg-accent flex flex-col items-start gap-3 space-x-2 rounded-md border p-3">
                    <Checkbox
                      key={value ? 'checked' : 'unchecked'}
                      checked={value}
                      id="whatsapp-checkbox"
                      name="whatsapp-checkbox"
                      onCheckedChange={onChange}
                    />
                    <div className="grid gap-1.5 font-normal">
                      <div className="flex items-center space-x-2">
                        <MessageCircleMore className="size-4" />
                        <TypographyP className="mt-0! w-max">
                          É WhatsApp?
                        </TypographyP>
                      </div>
                      <FormDescription>
                        selecione se este telefone é WhatsApp.
                      </FormDescription>
                    </div>
                  </Label>
                </FormControl>
              </div>
            </FormItem>
          )}
        />
      </li>
    </ul>
  </ul>
)

export const PhoneCreateForm = ({
  form,
  onSubmit,
  delayError = 800,
  disableAccordion,
  ...rest
}: PhoneCreateFormProps) => {
  const { accordionVisibility, setAccordionVisibility } = useHandlePhones()

  return (
    <Form {...form}>
      <form id="phoneCreateForm" onSubmit={form.handleSubmit(onSubmit)}>
        {disableAccordion ? (
          <PhoneCreateFormContent delayError={delayError} {...form} {...rest} />
        ) : (
          <Accordion
            type="single"
            collapsible
            value={accordionVisibility}
            className="border-muted/25 rounded-md border"
            onValueChange={(value) => {
              setAccordionVisibility(value === 'OPENED' ? 'OPENED' : 'CLOSED')
            }}
          >
            <AccordionItem value="OPENED" className="border-0">
              <AccordionTrigger className="hover:bg-muted/25 rounded-md border-b px-4">
                Adicionar Novo Telefone
              </AccordionTrigger>
              <AccordionContent className="mt-4 px-4">
                <PhoneCreateFormContent
                  delayError={delayError}
                  {...form}
                  {...rest}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </form>
    </Form>
  )
}

PhoneCreateForm.displayName = 'PhoneCreateForm'
