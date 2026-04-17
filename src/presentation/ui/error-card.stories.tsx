import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircleIcon, RefreshCcwIcon, ZapOffIcon } from 'lucide-react'

import { ErrorCard } from './error-card'

const meta = {
  title: 'Base Components/ErrorCard',
  component: ErrorCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Error title/heading',
    },
    message: {
      control: 'text',
      description: 'Error message description',
    },
    actionTitle: {
      control: 'text',
      description: 'Action button text',
    },
    noTips: {
      control: 'boolean',
      description: 'Hide default tips',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    title: 'Erro desconhecido',
    message: 'Por favor, tente novamente mais tarde.',
    actionTitle: 'Recarregar',
    noTips: false,
  },
} satisfies Meta<typeof ErrorCard>

export default meta
type Story = StoryObj<typeof meta>

// Default error
export const Default: Story = {}

// Network error
export const NetworkError: Story = {
  args: {
    title: 'Erro de Conexão',
    message:
      'Não foi possível conectar ao servidor. Verifique sua conexão com a internet.',
    actionTitle: 'Tentar Novamente',
    tips: [
      'Verifique sua conexão com a internet',
      'Tente recarregar a página',
      'Contate o suporte se o problema persistir',
    ],
  },
}

// 404 Error
export const NotFound: Story = {
  args: {
    title: 'Página Não Encontrada',
    message: 'A página que você está procurando não existe ou foi removida.',
    actionTitle: 'Voltar Inicio',
    tips: [
      'Verifique o URL digitado',
      'Volte à página inicial',
      'Use o menu de navegação',
    ],
    actionIcon: <AlertCircleIcon />,
  },
}

// Permission error
export const PermissionError: Story = {
  args: {
    title: 'Permissão Negada',
    message: 'Você não tem permissão para acessar este recurso.',
    actionTitle: 'Voltar',
    tips: [
      'Verifique suas credenciais',
      'Solicite acesso ao administrador',
      'Contate o suporte',
    ],
  },
}

// Server error (500)
export const ServerError: Story = {
  args: {
    title: 'Erro do Servidor',
    message: 'Ocorreu um erro no servidor. Nosso time foi notificado.',
    actionTitle: 'Recarregar',
    tips: [
      'Tente recarregar a página',
      'O problema deve ser resolvido em breve',
      'Contate o suporte se persistir',
    ],
  },
}

// Timeout error
export const TimeoutError: Story = {
  args: {
    title: 'Requisição Expirada',
    message: 'A operação demorou muito tempo. Por favor, tente novamente.',
    actionTitle: 'Tentar Novamente',
    tips: [
      'Tente uma operação menor',
      'Verifique sua conexão com a internet',
      'Tente novamente mais tarde',
    ],
  },
}

// Custom action
export const CustomAction: Story = {
  args: {
    title: 'Erro Crítico',
    message:
      'Um erro inesperado ocorreu. Seus dados foram salvos automaticamente.',
    actionTitle: 'Contatar Suporte',
    actionIcon: <ZapOffIcon />,
    tips: [
      'Seus dados foram salvos automaticamente',
      'Abra um ticket com nosso suporte',
    ],
  },
  render: (args) => (
    <ErrorCard
      {...args}
      action={() => {
        console.log('Contacting support...')
        // In a real app, this would navigate to support or open a form
        alert('Suporte será acionado em breve!')
      }}
    />
  ),
}

// Without tips
export const WithoutTips: Story = {
  args: {
    title: 'Erro',
    message: 'Algo deu errado. Por favor, tente novamente.',
    actionTitle: 'OK',
    noTips: true,
  },
}

// In a modal-like container
export const InContainer: Story = {
  render: (args) => (
    <div className="mx-auto mt-8 max-w-md">
      <ErrorCard {...args} />
    </div>
  ),
}

// Full width
export const FullWidth: Story = {
  args: {
    title: 'Erro de Validação',
    message: 'Por favor, verifique os campos destacados abaixo.',
    tips: [
      'Todos os campos obrigatórios devem ser preenchidos',
      'Verifique o formato dos dados',
    ],
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
}
