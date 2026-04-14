/**
 * FinTechX Knowledge Base
 *
 * Contains all FAQ information and company context for the chatBot.
 * This data is injected into the LLM system prompt to provide accurate,
 * contextual responses about FinTechX services.
 *
 * Translations: Portuguese (pt-BR) primary, English (en) secondary
 */

export const FINTECHX_KNOWLEDGE = {
  pt: {
    company: {
      name: 'FinTechX',
      description:
        'Empresa líder no setor financeiro em soluções digitais inovadoras',
      tagline:
        'Transformando o futuro das decisões financeiras através de IA e automação',
      founded: '2015',
      founder: 'Círculo LAB / Laborit',
    },
    operatingHours: {
      description: 'Horários de atendimento da FinTechX',
      weekdays: 'Segunda a sexta: 08:00 às 18:00 (horário de Brasília)',
      weekends: 'Sábado e domingo: Atendimento automatizado 24/7 via chat',
      holidays: 'Feriados: Atendimento automatizado via assistente virtual',
      note: 'Respostas indisponíveis durante manutenção programada (segunda-feira 02:00 às 04:00)',
    },
    officeLocations: {
      description: 'Escritórios e localização da FinTechX',
      headquarters: {
        city: 'São Paulo',
        state: 'SP',
        address: 'Avenida Paulista, 1000 - Bela Vista',
        coordinates: 'Zona centro-norte da capital',
      },
      regionalOffices: [
        {
          city: 'Rio de Janeiro',
          state: 'RJ',
          description: 'Atendimento regional para o Estado do Rio de Janeiro',
        },
        {
          city: 'Belo Horizonte',
          state: 'MG',
          description: 'Atendimento regional para Minas Gerais e arredores',
        },
        {
          city: 'Porto Alegre',
          state: 'RS',
          description: 'Atendimento regional para o Sul do Brasil',
        },
      ],
      contact:
        'Para mais informações sobre localidades, envie e-mail para: contato@fintechx.com.br',
    },
    security: {
      description: 'Proteção de dados e segurança da FinTechX',
      dataPrivacy: [
        'Utilizamos criptografia de ponta a ponta (AES-256) para proteger seus dados pessoais',
        'Conformidade com LGPD (Lei Geral de Proteção de Dados)',
        'Auditoria de segurança realizada trimestialmente por terceiros certificados',
        'Seus dados nunca são compartilhados com terceiros sem seu consentimento explícito',
      ],
      authentication:
        'Autenticação bimétrica obrigatória para acessar sua conta',
      monitoring:
        'Monitoramento 24/7 de atividades suspeitas e tentativas de fraude',
      support:
        'Equipe dedicada de segurança responde a incidentes em menos de 1 hora',
    },
    phishing: {
      description: 'Como identificar e reagir a e-mails suspeitos',
      whatIs:
        'Phishing é uma tentativa fraudulenta de obter informações pessoais através de e-mails forjados',
      identifyIndicators: [
        'FinTechX nunca pede senhas, CPF ou PIN por e-mail ou mensagem',
        'Desconfie de endereços de e-mail que parecem legítimos, mas têm pequenos erros (ex: fintechx.com.br vs fintech-x.com.br)',
        'Links suspeitos que direcionam para URLs diferentes do esperado',
        'Pedidos urgentes de ação ou ameaças de bloqueio da conta',
        'Anexos inesperados ou solicitação para habilitar macros',
      ],
      actions: [
        '1. NÃO clique em links ou baixe anexos do e-mail suspeito',
        '2. NÃO responda com seus dados pessoais ou financeiros',
        '3. Encaminhe o e-mail para: seguranca@fintechx.com.br',
        '4. Reporte através do chat ou portal (Configurações > Segurança > Reportar Fraude)',
        '5. Mude sua senha imediatamente se suspeitar que foi comprometida',
        '6. Entre em contato conosco por telefone: +55 11 XXXX-XXXX para confirmação',
      ],
      verification:
        'Para verificar se um e-mail é legítimo, entre em contato via canais oficiais (app, site, telefone)',
    },
    investments: {
      description: 'Educação sobre investimentos e poupança',
      basicConcepts: [
        'Diversificação: Não coloque todo seu dinheiro em um único tipo de investimento',
        'Horizonte de tempo: Prazos mais longos permitem maior exposição a riscos calculados',
        'Liquidez: Avalie como rapidamente você conseguirá acessar seu dinheiro',
        'Taxa de rentabilidade: Compare rendimentos após descontar impostos e taxas',
        'Risco-retorno: Investimentos com maior potencial de ganho também têm maior risco',
      ],
      products: [
        'Renda Fixa: CDB, Tesouro Direto, Letras de Câmbio (menor risco, retorno previsível)',
        'Renda Variável: Ações, Fundos de Investimento (maior risco, maior potencial de ganho)',
        'Fundos Imobiliários: Investimento em imóveis sem necessidade de compra direta',
        'Criptomoedas: Ativo de alta volatilidade (apenas para investidores experientes)',
      ],
      resources: [
        'Plataforma educativa FinTechX com artigos, videoaulas e simuladores',
        'Consultoria gratuita com especialistas (até 2 sessões/mês por cliente)',
        'Webinars semanais sobre tendências de mercado',
        'Dashboard de análise com recomendações personalizadas baseadas em IA',
      ],
      warning:
        'Lembre-se: Histórico passado não garante resultados futuros. Consulte um consultor antes de grandes investimentos.',
    },
    promotions: {
      description: 'Como se inscrever para receber promoções e descontos',
      signUp: [
        '1. Abra o aplicativo FinTechX ou acesse o site www.fintechx.com.br',
        '2. Acesse: Configurações > Preferências de Comunicação > Promoções',
        '3. Ative notificações para: E-mail, SMS ou Push Notifications (escolha suas preferências)',
        '4. Selecione categorias de interesse: Investimentos, Poupança, Produtos Financeiros, Educação',
        '5. Clique "Confirmar Inscrição" e valide seu e-mail',
      ],
      benefits: [
        'Cashback de 1-5% em transações selecionadas',
        'Acesso antecipado a novos produtos',
        'Convites para eventos e webinars exclusivos',
        'Taxas reduzidas em produtos de investimento',
        'Bônus de boas-vindas para novas contas',
      ],
      frequency:
        'Promoções são enviadas semanalmente (máximo 3 e-mails/semana)',
      unsubscribe:
        'Você pode cancelar a inscrição a qualquer momento no mesmo menu de Preferências de Comunicação',
    },
    general: {
      customerService:
        'Para dúvidas adicionais, entre em contato: suporte@fintechx.com.br ou via chat 24/7',
      responseTime: 'Tempo médio de resposta em horário comercial: 2 horas',
      languages: 'Atendimento em português, inglês e espanhol',
      accessibility: 'Interface acessível conforme normas WCAG 2.1 Nível AA',
    },
  },
  en: {
    company: {
      name: 'FinTechX',
      description:
        'Leading company in the financial sector with innovative digital solutions',
      tagline:
        'Transforming the future of financial decisions through AI and automation',
      founded: '2015',
      founder: 'Círculo LAB / Laborit',
    },
    operatingHours: {
      description: 'FinTechX customer service hours',
      weekdays: 'Monday to Friday: 08:00 to 18:00 (Brasília time, UTC-3)',
      weekends: 'Saturday and Sunday: 24/7 automated support via chat',
      holidays: 'Holidays: Automated support via virtual assistant',
      note: 'Limited availability during scheduled maintenance (Monday 02:00 to 04:00 UTC-3)',
    },
    officeLocations: {
      description: 'FinTechX offices and locations',
      headquarters: {
        city: 'São Paulo',
        state: 'SP',
        address: 'Avenida Paulista, 1000 - Bela Vista',
        coordinates: 'Central north zone of the capital',
      },
      regionalOffices: [
        {
          city: 'Rio de Janeiro',
          state: 'RJ',
          description: 'Regional office serving Rio de Janeiro State',
        },
        {
          city: 'Belo Horizonte',
          state: 'MG',
          description:
            'Regional office serving Minas Gerais and surrounding areas',
        },
        {
          city: 'Porto Alegre',
          state: 'RS',
          description: 'Regional office serving Southern Brazil',
        },
      ],
      contact:
        'For more information about offices, email: contato@fintechx.com.br',
    },
    security: {
      description: 'FinTechX data protection and security',
      dataPrivacy: [
        'End-to-end encryption (AES-256) protects your personal data',
        'LGPD (Brazilian General Data Protection Law) compliant',
        'Security audits performed quarterly by certified third parties',
        'Your data is never shared with third parties without explicit consent',
      ],
      authentication:
        'Mandatory two-factor biometric authentication to access your account',
      monitoring: '24/7 monitoring of suspicious activities and fraud attempts',
      support: 'Dedicated security team responds to incidents within 1 hour',
    },
    phishing: {
      description: 'How to identify and respond to suspicious emails',
      whatIs:
        'Phishing is a fraudulent attempt to obtain personal information through forged emails',
      identifyIndicators: [
        'FinTechX never asks for passwords, CPF, or PIN via email or message',
        'Beware of email addresses that look legitimate but have small errors (ex: fintechx.com.br vs fintech-x.com.br)',
        'Suspicious links directing to unexpected URLs',
        'Urgent requests for action or threats of account blocking',
        'Unexpected attachments or requests to enable macros',
      ],
      actions: [
        '1. DO NOT click links or download attachments from suspicious emails',
        '2. DO NOT reply with personal or financial information',
        '3. Forward the email to: seguranca@fintechx.com.br',
        '4. Report through chat or portal (Settings > Security > Report Fraud)',
        '5. Change your password immediately if you suspect compromise',
        '6. Contact us by phone for confirmation: +55 11 XXXX-XXXX',
      ],
      verification:
        'To verify if an email is legitimate, contact us via official channels (app, website, phone)',
    },
    investments: {
      description: 'Investment and savings education',
      basicConcepts: [
        'Diversification: Do not put all your money into one type of investment',
        'Time horizon: Longer terms allow more exposure to calculated risks',
        'Liquidity: Assess how quickly you can access your money',
        'Rate of return: Compare yields after deducting taxes and fees',
        'Risk-return: Investments with higher gain potential also have higher risk',
      ],
      products: [
        'Fixed Income: CDB, Direct Treasury, Letters of Exchange (lower risk, predictable return)',
        'Variable Income: Stocks, Investment Funds (higher risk, higher gain potential)',
        'Real Estate Funds: Real estate investment without direct purchase necessity',
        'Cryptocurrencies: Highly volatile asset (only for experienced investors)',
      ],
      resources: [
        'FinTechX educational platform with articles, video lessons, and simulators',
        'Free consultancy with specialists (up to 2 sessions/month per client)',
        'Weekly webinars on market trends',
        'Analysis dashboard with personalized AI-based recommendations',
      ],
      warning:
        'Remember: Past performance does not guarantee future results. Consult an advisor before major investments.',
    },
    promotions: {
      description: 'How to sign up for promotions and discounts',
      signUp: [
        '1. Open the FinTechX app or visit www.fintechx.com.br',
        '2. Go to: Settings > Communication Preferences > Promotions',
        '3. Enable notifications for: Email, SMS, or Push Notifications (choose your preferences)',
        '4. Select categories of interest: Investments, Savings, Financial Products, Education',
        '5. Click "Confirm Signup" and validate your email',
      ],
      benefits: [
        'Cashback of 1-5% on selected transactions',
        'Early access to new products',
        'Invitations to exclusive events and webinars',
        'Reduced rates on investment products',
        'Welcome bonuses for new accounts',
      ],
      frequency: 'Promotions are sent weekly (maximum 3 emails/week)',
      unsubscribe:
        'You can cancel your subscription anytime in the same Communication Preferences menu',
    },
    general: {
      customerService:
        'For additional questions, contact: suporte@fintechx.com.br or chat 24/7',
      responseTime: 'Average response time during business hours: 2 hours',
      languages: 'Support available in Portuguese, English, and Spanish',
      accessibility:
        'Accessible interface according to WCAG 2.1 Level AA standards',
    },
  },
}

/**
 * Helper function to build a comprehensive FAQ context for the LLM system prompt
 */
export function buildFintechxContext(locale: 'pt' | 'en' = 'pt'): string {
  const kb = FINTECHX_KNOWLEDGE[locale]

  return `
You are a helpful and professional chatBot assistant for FinTechX.

## Company Context
- **Name**: ${kb.company.name}
- **Description**: ${kb.company.description}
- **Founded**: ${kb.company.founded}

## Operating Hours
${kb.operatingHours.description}:
- ${kb.operatingHours.weekdays}
- ${kb.operatingHours.weekends}
- ${kb.operatingHours.holidays}
- ℹ️ Note: ${kb.operatingHours.note}

## Office Locations
${kb.officeLocations.description}:
- **Headquarters**: ${kb.officeLocations.headquarters.city}, ${kb.officeLocations.headquarters.state} - ${kb.officeLocations.headquarters.address}
- **Regional Offices**: ${kb.officeLocations.regionalOffices.map((o) => `${o.city}, ${o.state}`).join('; ')}
- ${kb.officeLocations.contact}

## Security & Data Protection
${kb.security.description}:
${kb.security.dataPrivacy.map((item) => `- ${item}`).join('\n')}
- Authentication: ${kb.security.authentication}
- Monitoring: ${kb.security.monitoring}
- Support: ${kb.security.support}

## Phishing & Security Alerts
If asked about suspicious emails or phishing:
${kb.phishing.identifyIndicators.map((item) => `- Indicator: ${item}`).join('\n')}
- Recommended actions: ${kb.phishing.actions.join(' ')}

## Investment & Savings Education
Basic concepts for users interested in financial products:
${kb.investments.basicConcepts.map((item) => `- ${item}`).join('\n')}
- Available products: ${kb.investments.products.map((p) => p.split(':')[0]).join(', ')}
- Educational resources: Articles, webinars, consultancy

## Promotions & Discounts
How to sign up:
${kb.promotions.signUp
  .slice(1, -1)
  .map((item) => `- ${item}`)
  .join('\n')}
Benefits include: Cashback, early access, exclusive events, reduced rates, welcome bonuses

## General Guidelines
- Be friendly, professional, and helpful
- Prioritize accurate information from the knowledge base above
- If a question is not covered, admit it and direct to: ${kb.general.customerService}
- Response time during business hours: ~${kb.general.responseTime}
- Languages supported: ${kb.general.languages}
- Keep responses concise and under 500 tokens when possible
- Always encourage users to verify sensitive information through official channels
`.trim()
}

/**
 * Utility to get FAQ answers as structured data
 */
export const FINTECHX_FAQS = {
  pt: [
    {
      question: 'Quais são os horários de atendimento da FinTechX?',
      category: 'operatingHours',
      keywords: [
        'horário',
        'atendimento',
        'funcionamento',
        'aberto',
        'fechado',
      ],
    },
    {
      question: 'Onde estão localizados os escritórios da FinTechX?',
      category: 'officeLocations',
      keywords: ['localização', 'escritório', 'onde', 'endereço', 'sede'],
    },
    {
      question: 'Quem fundou a FinTechX e quando?',
      category: 'company',
      keywords: ['fundador', 'founder', 'fundação', 'história', 'quando'],
    },
    {
      question: 'Como a FinTechX protege as minhas informações pessoais?',
      category: 'security',
      keywords: [
        'segurança',
        'dados',
        'proteção',
        'privacidade',
        'LGPD',
        'criptografia',
      ],
    },
    {
      question: 'Recebi um e-mail suspeito da FinTechX, o que devo fazer?',
      category: 'phishing',
      keywords: [
        'phishing',
        'e-mail',
        'email',
        'suspeito',
        'fraude',
        'segurança',
      ],
    },
    {
      question: 'Como posso aprender mais sobre investimentos e poupança?',
      category: 'investments',
      keywords: [
        'investimento',
        'poupança',
        'educação',
        'aprender',
        'como',
        'produtos',
      ],
    },
    {
      question: 'Como posso me inscrever para receber promoções e descontos?',
      category: 'promotions',
      keywords: [
        'promoção',
        'desconto',
        'inscrição',
        'como',
        'sign up',
        'newsletter',
      ],
    },
  ],
  en: [
    {
      question: 'What are FinTechX operating hours?',
      category: 'operatingHours',
      keywords: ['hours', 'service', 'operating', 'open', 'closed'],
    },
    {
      question: 'Where are FinTechX offices located?',
      category: 'officeLocations',
      keywords: ['location', 'office', 'where', 'address', 'headquarters'],
    },
    {
      question: 'Who founded FinTechX and when?',
      category: 'company',
      keywords: ['founder', 'founding', 'founded', 'history', 'when'],
    },
    {
      question: 'How does FinTechX protect my personal information?',
      category: 'security',
      keywords: [
        'security',
        'data',
        'protection',
        'privacy',
        'LGPD',
        'encryption',
      ],
    },
    {
      question:
        'I received a suspicious email from FinTechX, what should I do?',
      category: 'phishing',
      keywords: ['phishing', 'email', 'suspicious', 'fraud', 'security'],
    },
    {
      question: 'How can I learn more about investments and savings?',
      category: 'investments',
      keywords: [
        'investment',
        'savings',
        'education',
        'learn',
        'how',
        'products',
      ],
    },
    {
      question: 'How do I sign up for promotions and discounts?',
      category: 'promotions',
      keywords: [
        'promotion',
        'discount',
        'signup',
        'how',
        'sign up',
        'newsletter',
      ],
    },
  ],
}
