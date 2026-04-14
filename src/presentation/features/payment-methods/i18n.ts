import type { Locale } from '@/infra/i18n'

export type PaymentMethodsMessages = {
  'paymentMethods.title': string
}

export const PaymentMethodsMessages: Record<Locale, PaymentMethodsMessages> = {
  en: {
    'paymentMethods.title': 'Payment Methods',
  },
  pt: {
    'paymentMethods.title': 'Métodos de Pagamento',
  },
}
