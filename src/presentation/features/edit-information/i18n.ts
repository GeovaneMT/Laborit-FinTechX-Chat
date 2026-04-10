import { SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type EditInformationMessages = {
  'editInformation.title': string
  'editInformation.updateProfile': string
  'editInformation.name': string
  'editInformation.email': string
  'editInformation.save': string
  'editInformation.cancel': string
  'editInformation.savedAlert': string
}

export const EditInformationMessages: Record<Locale, EditInformationMessages> =
  {
    en: {
      'editInformation.title': 'Edit information',
      'editInformation.updateProfile': 'Update profile',
      'editInformation.name': 'Name',
      'editInformation.email': 'Email',
      'editInformation.save': 'Save',
      'editInformation.cancel': 'Cancel',
      'editInformation.savedAlert': 'Information saved!',
    },
    pt: {
      'editInformation.title': 'Editar Informações',
      'editInformation.updateProfile': 'Atualizar Perfil',
      'editInformation.name': 'Nome',
      'editInformation.email': 'Email',
      'editInformation.save': 'Salvar',
      'editInformation.cancel': 'Cancelar',
      'editInformation.savedAlert': 'Informações salvas!',
    },
  }
