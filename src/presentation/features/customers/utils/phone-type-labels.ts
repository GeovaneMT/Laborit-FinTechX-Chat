import type { CreatePhoneRequestDtoType } from '@http/generated/models'

export const phoneTypeLabels: Record<CreatePhoneRequestDtoType, string> = {
  MOBILE: 'Celular',
  HOME: 'Residencial',
  WORK: 'Trabalho',
}
