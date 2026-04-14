import type { Locale } from '@/infra/i18n'

export type OnboardingMessages = {
  'onboarding.nextButton': string
  'onboarding.title1': string
  'onboarding.title2': string
  'onboarding.title3': string
  'onboarding.description1': string
  'onboarding.description2': string
  'onboarding.description3': string
}

export const OnboardingMessages: Record<Locale, OnboardingMessages> = {
  en: {
    'onboarding.nextButton': 'Skip',

    'onboarding.title1': 'Unlock the Power Of Future AI',
    'onboarding.description1':
      'Chat with the smartest AI and experience the future today',

    'onboarding.title2': 'Boost Your Productivity',
    'onboarding.description2':
      'Get instant answers, automate tasks, and save time every day',

    'onboarding.title3': 'Create Without Limits',
    'onboarding.description3':
      'Generate ideas, content, and solutions in seconds with AI',
  },

  pt: {
    'onboarding.nextButton': 'Pular',

    'onboarding.title1': 'Desbloqueie o Poder da IA do Futuro',
    'onboarding.description1':
      'Converse com a inteligência artificial mais avançada e viva o futuro hoje',

    'onboarding.title2': 'Aumente sua Produtividade',
    'onboarding.description2':
      'Obtenha respostas instantâneas, automatize tarefas e economize tempo',

    'onboarding.title3': 'Crie Sem Limites',
    'onboarding.description3':
      'Gere ideias, conteúdos e soluções em segundos com IA',
  },
}
