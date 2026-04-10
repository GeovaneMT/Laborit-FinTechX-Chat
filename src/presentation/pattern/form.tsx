'use client'

import { GenericFormContext } from '@pattern/form.contexts'
import { Label } from '@ui/shadcn/label'
import { createId } from '@core/ids'
import type { ReactNode } from 'react'

type FormRootProps = {
  children: ReactNode
  id?: string
}

export function FormRoot({ children, id }: FormRootProps) {
  const formId = id ?? createId('form')
  return (
    <GenericFormContext.Provider value={{ formId }}>
      <div className="space-y-4">{children}</div>
    </GenericFormContext.Provider>
  )
}

type FieldProps = {
  label: string
  htmlFor: string
  children: ReactNode
}

export function FormField({ label, htmlFor, children }: FieldProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}
