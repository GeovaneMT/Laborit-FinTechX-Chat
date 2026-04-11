import { Locale } from '@/infra/i18n'

export type OnboardingMessages = {
  'onboarding.welcomeTitle': string
  'onboarding.description': string
  'onboarding.bullet1': string
  'onboarding.bullet2': string
  'onboarding.bullet3': string
  'onboarding.button': string
}

export const OnboardingMessages: Record<Locale, OnboardingMessages> = {
  en: {
    'onboarding.welcomeTitle': 'Welcome to Laborit Chat',
    'onboarding.description':
      'This is an AI assistant to help with general questions. It can provide useful information, but remember:',
    'onboarding.bullet1': 'I am not a medical professional',
    'onboarding.bullet2': 'Consult specialists for health questions',
    'onboarding.bullet3': 'Use responsibly',
    'onboarding.button': 'Got it, let’s chat',
  },
  pt: {
    'onboarding.welcomeTitle': 'Bem-vindo ao Laborit Chat',
    'onboarding.description':
      'Este é um assistente de IA para ajudar com dúvidas gerais. Ele pode fornecer informações úteis, mas lembre-se:',
    'onboarding.bullet1': 'Não sou um profissional médico',
    'onboarding.bullet2': 'Consulte especialistas para questões de saúde',
    'onboarding.bullet3': 'Use com responsabilidade',
    'onboarding.button': 'Entendi, vamos conversar',
  },
}
