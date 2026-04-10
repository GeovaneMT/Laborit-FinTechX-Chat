import { useForm } from '@tanstack/react-form'
import { createStore } from 'zustand/vanilla'
import type { z } from 'zod'

const formMetaStore = createStore<{ lastSubmittedAt: number | null }>(() => ({
  lastSubmittedAt: null,
}))

export function createFormHook<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  initialValues: z.infer<TSchema>,
) {
  return function useSchemaForm() {
    return useForm({
      defaultValues: initialValues as never,
      onSubmit: async ({ value }) => {
        schema.parse(value)
        formMetaStore.setState({ lastSubmittedAt: Date.now() })
      },
    })
  }
}

export function createFormSubmitHandler<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  action: (data: z.infer<TSchema>) => Promise<void> | void,
) {
  return async (raw: unknown) => {
    const data = schema.parse(raw)
    await action(data)
  }
}

export function getLastFormSubmitTime() {
  return formMetaStore.getState().lastSubmittedAt
}
