import type { Locale } from '@/infra/i18n'

export type EditInformationMessages = {
  'editInformation.title': string
  'editInformation.updateProfile': string
  'editInformation.name': string
  'editInformation.email': string
  'editInformation.save': string
  'editInformation.cancel': string
  'editInformation.savedAlert': string

  'profile.update.form.name': string
  'profile.update.form.name.placeholder': string
  'profile.update.form.name.description': string

  'profile.update.form.email': string
  'profile.update.form.email.placeholder': string
  'profile.update.form.email.description': string

  'profile.update.form.submit': string
  'profile.update.form.submit.saving': string
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

      'profile.update.form.name': 'Name',
      'profile.update.form.name.placeholder': 'Name',
      'profile.update.form.name.description':
        'Please enter your name. This will be displayed publicly.',

      'profile.update.form.email': 'Email',
      'profile.update.form.email.placeholder': 'Email',
      'profile.update.form.email.description': 'Please enter your email.',

      'profile.update.form.submit': 'Save',
      'profile.update.form.submit.saving': 'Saving...',
    },
    pt: {
      'editInformation.title': 'Editar Informações',
      'editInformation.updateProfile': 'Atualizar Perfil',
      'editInformation.name': 'Nome',
      'editInformation.email': 'Email',
      'editInformation.save': 'Salvar',
      'editInformation.cancel': 'Cancelar',
      'editInformation.savedAlert': 'Informações salvas!',

      'profile.update.form.name': 'Nome',
      'profile.update.form.name.placeholder': 'Nome',
      'profile.update.form.name.description':
        'Por favor, insira seu nome. Isso será exibido publicamente.',

      'profile.update.form.email': 'Email',
      'profile.update.form.email.placeholder': 'Email',
      'profile.update.form.email.description': 'Por favor, insira seu email.',

      'profile.update.form.submit': 'Salvar',
      'profile.update.form.submit.saving': 'Salvando...',
    },
  }
