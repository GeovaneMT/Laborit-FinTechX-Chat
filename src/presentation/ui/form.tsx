'use client'

import * as React from 'react'
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form'

import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { Label } from '@shadcn/label'
import { cn } from '@utils/cn'
import type { HTMLMotionProps} from 'motion/react';
import { AnimatePresence, motion } from 'motion/react'

import { Separator } from '@ui/separator'
import { TypographySmall } from '@ui/typography/sizes/small'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getValues, getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (!itemContext) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext
  const value = getValues(fieldContext.name)

  return {
    id,
    name: fieldContext.name,
    value,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(
        error && 'text-red-500 dark:text-red-900',
        'block transition-all',
        className,
      )}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
  React.ComponentRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  const { error, isTouched, formItemId, formDescriptionId, formMessageId } =
    useFormField()

  return (
    <Slot
      ref={ref}
      className={cn(
        className,
        error &&
          'border-red-700 focus-visible:ring-1 focus-visible:ring-red-600 dark:border-red-400 dark:focus-visible:ring-red-300',
        isTouched &&
          !error &&
          'border-green-700 focus-visible:ring-1 focus-visible:ring-green-600 dark:border-green-400 dark:focus-visible:ring-green-300',
      )}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        'text-[0.8rem] text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  Omit<HTMLMotionProps<'div'>, 'children'> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()

  const body = error ? String(error?.message ?? '') : children

  return (
    <AnimatePresence mode="wait" initial={false}>
      {body && (
        <motion.div
          key={body.toString()}
          ref={ref}
          id={formMessageId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={cn(
            'flex space-x-2 text-red-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-red-900',
            className,
          )}
          {...props}
        >
          <Separator orientation="vertical" />
          <TypographySmall>{body}</TypographySmall>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
FormMessage.displayName = 'FormMessage'

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
}
