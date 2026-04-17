import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// Mock Next.js theme provider
if (typeof window !== 'undefined') {
  // Initialize theme on client side
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (prefersDark) {
    document.documentElement.classList.add('dark')
  }
}

const preview: Preview = {
  parameters: {
    // Viewport sizes for responsive testing
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },

    // Layout configuration
    layout: 'centered',

    // Interaction testing
    interactions: {
      instrument: true,
    },

    // A11y testing configuration
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },

    // Backgrounds for testing
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },

    // Controls configuration
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Default argTypes
    argTypes: {
      className: {
        control: { type: 'text' },
        description: 'Additional CSS classes for custom styling',
      },
      children: {
        control: { type: 'text' },
        description: 'Component children content',
      },
    },
  },

  // Global decorators
  decorators: [
    // Dark mode support decorator
    (Story, context) => {
      const isDark = context.parameters.isDark ?? false

      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      return Story()
    },

    // CSS padding decorator for centering
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],

  // Tags for organizing and filtering stories
  tags: ['autodocs'],
}

export default preview
