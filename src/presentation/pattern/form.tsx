'use client'

import type { ReactNode } from 'react'

import { Label } from '@shadcn/label'

import { GenericFormContext } from '@pattern/form.contexts'

import { createId } from '@core/ids'

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
