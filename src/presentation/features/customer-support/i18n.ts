import type { Locale } from '@/infra/i18n'

export type CustomerSupportMessages = {
  'customerSupport.title': string
}

export const CustomerSupportMessages: Record<Locale, CustomerSupportMessages> =
  {
    en: {
      'customerSupport.title': 'Customer Support',
    },
    pt: {
      'customerSupport.title': 'Suporte ao Cliente',
    },
  }
