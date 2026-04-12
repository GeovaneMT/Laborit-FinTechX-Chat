import type { Locale } from '@/infra/i18n'

export type HealthInstructionsMessages = {
  'healthInstructions.title': string
  'healthInstructions.assistantLimits': string
  'healthInstructions.descriptionStart': string
  'healthInstructions.notMedicalLabel': string
  'healthInstructions.notMedicalText': string
  'healthInstructions.consultSpecialists': string
  'healthInstructions.generalInfo': string
  'healthInstructions.privacy': string
  'healthInstructions.descriptionEnd': string
}

export const HealthInstructionsMessages: Record<
  Locale,
  HealthInstructionsMessages
> = {
  en: {
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
  },
  pt: {
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
  },
}
