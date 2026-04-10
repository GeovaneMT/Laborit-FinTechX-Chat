import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@core/constants'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

const messages: Record<Locale, Record<string, string>> = {
  en: {
    'nav.items': 'Items',
    'nav.signOut': 'Sign out',
    'nav.settings': 'Settings',
    'nav.dashboard': 'Dashboard',
    'home.title': 'Home',
    'home.chat': 'Chat',
    'home.dashboard': 'Dashboard',
    'home.editInformation': 'Edit information',
    'home.healthInstructions': 'Health Instructions',
    'home.invite': 'Invite',
    'home.onboarding': 'Onboarding',
    'home.preferences': 'Preferences',
    'home.profile': 'Profile',
    'home.splash': 'Splash',
    'dashboard.title': 'Dashboard',
    'profile.title': 'Profile',
    'profile.personalInformation': 'Personal information',
    'profile.name': 'Name',
    'profile.email': 'Email',
    'profile.editInformation': 'Edit information',
    'preferences.title': 'Preferences',
    'preferences.settings': 'Settings',
    'preferences.darkMode': 'Dark mode',
    'preferences.notifications': 'Notifications',
    'preferences.language': 'Language',
    'preferences.inDevelopment': 'Feature in development',
    'preferences.currentLanguage': 'English (US)',
    'preferences.languageOption.en': 'English (US)',
    'preferences.languageOption.pt': 'Português (Brasil)',
    'editInformation.title': 'Edit information',
    'editInformation.updateProfile': 'Update profile',
    'editInformation.name': 'Name',
    'editInformation.email': 'Email',
    'editInformation.save': 'Save',
    'editInformation.cancel': 'Cancel',
    'editInformation.savedAlert': 'Information saved!',
    'healthInstructions.title': 'Health Instructions',
    'healthInstructions.assistantLimits': 'AI assistant limitations',
    'healthInstructions.descriptionStart':
      'This AI assistant is a helpful tool for general information, but it has important limitations:',
    'healthInstructions.notMedicalLabel': 'I am not a medical professional',
    'healthInstructions.notMedicalText':
      'I cannot provide diagnoses, treatments, or medical advice.',
    'healthInstructions.consultSpecialists':
      'For health concerns, always consult qualified specialists.',
    'healthInstructions.generalInfo':
      'I can help with general health questions, but I do not replace professional care.',
    'healthInstructions.privacy':
      'Your conversations are kept in session, but avoid sharing sensitive data.',
    'healthInstructions.descriptionEnd':
      'Use this assistant responsibly and with common sense. It is designed to be helpful, but it is not infallible.',
    'invite.title': 'Invite a friend',
    'invite.shareTitle': 'Share Laborit Chat',
    'invite.description':
      'Invite your friends to experience the AI assistant. Use this invitation code:',
    'invite.codeCopied': 'Code copied!',
    'onboarding.welcomeTitle': 'Welcome to Laborit Chat',
    'onboarding.description':
      'This is an AI assistant to help with general questions. It can provide useful information, but remember:',
    'onboarding.bullet1': 'I am not a medical professional',
    'onboarding.bullet2': 'Consult specialists for health questions',
    'onboarding.bullet3': 'Use responsibly',
    'onboarding.button': 'Got it, let’s chat',
    'splash.title': 'Laborit Chat',
    'splash.description':
      'Your AI assistant for questions and support. Remember: I am not a medical professional.',
    'splash.button': 'Get started',
  },
  pt: {
    'nav.items': 'Itens',
    'nav.signOut': 'Sair',
    'nav.dashboard': 'Painel',
    'nav.settings': 'Configurações',
    'home.title': 'Início',
    'home.chat': 'Chat',
    'home.dashboard': 'Painel',
    'home.editInformation': 'Editar informações',
    'home.healthInstructions': 'Instruções de saúde',
    'home.invite': 'Convidar',
    'home.onboarding': 'Onboarding',
    'home.preferences': 'Preferências',
    'home.profile': 'Perfil',
    'home.splash': 'Splash',
    'dashboard.title': 'Painel',
    'profile.title': 'Perfil',
    'profile.personalInformation': 'Informações pessoais',
    'profile.name': 'Nome',
    'profile.email': 'Email',
    'profile.editInformation': 'Editar Informações',
    'preferences.title': 'Preferências',
    'preferences.settings': 'Configurações',
    'preferences.darkMode': 'Modo Escuro',
    'preferences.notifications': 'Notificações',
    'preferences.language': 'Idioma',
    'preferences.inDevelopment': 'Funcionalidade em desenvolvimento',
    'preferences.currentLanguage': 'Português (Brasil)',
    'preferences.languageOption.en': 'English (US)',
    'preferences.languageOption.pt': 'Português (Brasil)',
    'editInformation.title': 'Editar Informações',
    'editInformation.updateProfile': 'Atualizar Perfil',
    'editInformation.name': 'Nome',
    'editInformation.email': 'Email',
    'editInformation.save': 'Salvar',
    'editInformation.cancel': 'Cancelar',
    'editInformation.savedAlert': 'Informações salvas!',
    'healthInstructions.title': 'Instruções de Saúde',
    'healthInstructions.assistantLimits': 'Limites do Assistente de IA',
    'healthInstructions.descriptionStart':
      'Este assistente de IA é uma ferramenta útil para informações gerais, mas tem limitações importantes:',
    'healthInstructions.notMedicalLabel': 'Não sou um profissional médico',
    'healthInstructions.notMedicalText':
      'Não posso fornecer diagnósticos, tratamentos ou conselhos médicos.',
    'healthInstructions.consultSpecialists':
      'Para questões de saúde, sempre procure médicos qualificados.',
    'healthInstructions.generalInfo':
      'Posso ajudar com dúvidas gerais sobre saúde, mas não substituo atendimento profissional.',
    'healthInstructions.privacy':
      'Suas conversas são mantidas em sessão, mas evite compartilhar dados sensíveis.',
    'healthInstructions.descriptionEnd':
      'Use este assistente com responsabilidade e bom senso. Ele é projetado para ser útil, mas não é infalível.',
    'invite.title': 'Convidar Amigo',
    'invite.shareTitle': 'Compartilhe o Laborit Chat',
    'invite.description':
      'Convide seus amigos para experimentar o assistente de IA. Use este código de convite:',
    'invite.codeCopied': 'Código copiado!',
    'onboarding.welcomeTitle': 'Bem-vindo ao Laborit Chat',
    'onboarding.description':
      'Este é um assistente de IA para ajudar com dúvidas gerais. Ele pode fornecer informações úteis, mas lembre-se:',
    'onboarding.bullet1': 'Não sou um profissional médico',
    'onboarding.bullet2': 'Consulte especialistas para questões de saúde',
    'onboarding.bullet3': 'Use com responsabilidade',
    'onboarding.button': 'Entendi, vamos conversar',
    'splash.title': 'Laborit Chat',
    'splash.description':
      'Seu assistente de IA para dúvidas e apoio. Lembre-se: não sou um profissional médico.',
    'splash.button': 'Começar',
  },
}

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value
  return DEFAULT_LOCALE as Locale
}

export function getMessages(locale: Locale) {
  return messages[locale]
}
