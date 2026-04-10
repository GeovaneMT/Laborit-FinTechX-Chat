'use client'

import { ChevronLeftIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

import { Button } from '@ui/button'
import { LoadingMessage } from '@ui/loading-message'

import { TypographyP } from '@ui/typography/p'
import { TypographyH2 } from '@ui/typography/hx/h2'

import { PhoneList } from '@features/customers/components/forms/phone-create-form/phone-list'
import { CustomerCreateForm } from '@features/customers/components/forms/customer-create.form'
import { PhoneCreateForm } from '@features/customers/components/forms/phone-create-form/phone-create.form'

import { useCustomerCreate } from '@features/customers/view-models/create/use-customer-create'

import type {
  StepsState,
  SubmitConfig,
} from '@features/customers/view-models/create/use-customer-create-state'

export const CustomerCreate = () => {
  const {
    form,
    step,
    setStep,
    onSubmit,
    stepsState,
    phoneStoreData,
    canProceedToNexStep,
  } = useCustomerCreate()

  const submitConfig: Record<StepsState, SubmitConfig> = {
    validating: {
      form: 'customerCreateForm',
      label: <LoadingMessage message="Validando Email" />,
    },

    'validating-phone': {
      form: 'phoneCreateForm',
      label: <LoadingMessage message="Validando telefone" />,
    },

    loading: {
      form: 'customerCreateForm',
      label: <LoadingMessage message="Carregando..." />,
    },

    'loading-phone': {
      form: 'phoneCreateForm',
      label: <LoadingMessage message="Carregando telefone..." />,
    },

    'show-errors': {
      form: 'customerCreateForm',
      label: <TypographyP>Mostrar erros</TypographyP>,
    },

    'show-phone-errors': {
      form: 'phoneCreateForm',
      label: <TypographyP>Mostrar erros do telefone</TypographyP>,
    },

    'add-phone': {
      form: 'phoneCreateForm',
      label: <TypographyP>Adicionar telefone</TypographyP>,
    },

    'create-customer': {
      form: 'customerCreateForm',
      label: <TypographyP>Criar Cliente</TypographyP>,
    },

    'advance-step': {
      form: 'customerCreateForm',
      label: <TypographyP>Avançar</TypographyP>,
    },
  } as const

  if (!submitConfig[stepsState]) {
    console.error('Invalid stepsState:', stepsState)
  }

  const config = submitConfig[stepsState]
  if (!config) return null

  return (
    <section className="space-y-4">
      <div className="relative overflow-hidden">
        {/* STEP 1 */}
        <motion.div
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          animate={{
            x: step === 'customer' ? 0 : -40,
            opacity: step === 'customer' ? 1 : 0,
            pointerEvents: step === 'customer' ? 'auto' : 'none',
            position: step === 'customer' ? 'relative' : 'absolute',
          }}
        >
          <TypographyH2>Criar Novo Cliente</TypographyH2>

          <CustomerCreateForm form={form} onSubmit={onSubmit} />
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          animate={{
            x: step === 'phones' ? 0 : 40,
            opacity: step === 'phones' ? 1 : 0,
            pointerEvents: step === 'phones' ? 'auto' : 'none',
            position: step === 'phones' ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        >
          <TypographyH2>Adicionar Telefones</TypographyH2>

          <PhoneCreateForm {...phoneStoreData} />
          <PhoneList />
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        {step !== 'customer' && (
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => setStep('customer')}
          >
            <div className="flex">
              <ChevronLeftIcon className="mr-2 size-4" />
              Voltar
            </div>
          </Button>
        )}

        <Button
          type="submit"
          variant="secondary"
          form={config.form}
          disabled={!canProceedToNexStep}
          className="w-full flex-1 transition-all duration-800 ease-in-out"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={stepsState}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {config.label}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>
    </section>
  )
}
