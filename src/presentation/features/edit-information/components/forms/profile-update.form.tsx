'use client'

import { Button } from '@shadcn/button'
import { Input } from '@shadcn/input'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form'
import { Separator } from '@ui/separator'

import type { EditInformationMessages } from '@/presentation/features/edit-information/i18n'
import { useUpdateProfileForm } from '@/presentation/features/edit-information/view-models/profile/use-update-profile-form'

interface UpdateProfileFormProps {
  messages: EditInformationMessages
  delayError?: number
}

export const UpdateProfileForm = ({
  messages,
  delayError = 800,
}: UpdateProfileFormProps) => {
  const {
    form,
    onSubmit,
    isInputDisabled,
    setIsNameInputEmpty,
    setIsEmailInputEmpty,
  } = useUpdateProfileForm()

  const { control, clearErrors, formState } = form
  const isSubmitting = formState.isSubmitting

  const handleBlur = (
    fieldName: 'email' | 'displayName',
    value?: string | null,
  ) => {
    setTimeout(() => {
      if (!value) clearErrors(fieldName)
    }, delayError)
  }

  return (
    <Form {...form}>
      <form id="nameUpdateForm" onSubmit={form.handleSubmit(onSubmit)}>
        <ul className="space-y-4">
          {/* Name Field */}
          <li className="mb-6">
            <FormField
              name="displayName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{messages['profile.update.form.name']}</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      type="text"
                      inputMode="text"
                      disabled={isInputDisabled}
                      placeholder={
                        messages['profile.update.form.name.placeholder']
                      }
                      onChange={(event) => {
                        const value = event.target.value
                        field.onChange(value)
                        setIsNameInputEmpty(!value)
                      }}
                      onBlur={() => handleBlur(field.name, field.value)}
                    />
                  </FormControl>

                  <FormDescription>
                    {messages['profile.update.form.name.description']}
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
          </li>

          <Separator />

          {/* Email Field */}
          <li className="mb-6">
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{messages['profile.update.form.email']}</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      type="email"
                      inputMode="email"
                      disabled={isInputDisabled}
                      placeholder={
                        messages['profile.update.form.email.placeholder']
                      }
                      onChange={(event) => {
                        const value = event.target.value
                        field.onChange(value)
                        setIsEmailInputEmpty(!value)
                      }}
                      onBlur={() => handleBlur(field.name, field.value)}
                    />
                  </FormControl>

                  <FormDescription>
                    {messages['profile.update.form.email.description']}
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
          </li>

          {/* Submit Button */}
          <li className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting || isInputDisabled}
              className="w-full"
            >
              {isSubmitting
                ? messages['profile.update.form.submit.saving']
                : messages['profile.update.form.submit']}
            </Button>
          </li>
        </ul>
      </form>
    </Form>
  )
}

UpdateProfileForm.displayName = 'UpdateProfileForm'
