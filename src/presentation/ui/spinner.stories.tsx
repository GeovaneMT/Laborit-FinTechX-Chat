import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@ui/spinner'

const meta = {
  title: 'Base Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'Size of spinner in pixels',
      table: {
        defaultValue: { summary: '16' },
      },
    },
    color: {
      control: 'select',
      options: ['white', 'black', 'blue-500', 'green-500', 'red-500'],
      description: 'Color of spinner bars',
      table: {
        defaultValue: { summary: 'white' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

// Basic sizes
export const Small: Story = {
  args: {
    size: 16,
    color: 'black',
  },
}

export const Medium: Story = {
  args: {
    size: 24,
    color: 'black',
  },
}

export const Large: Story = {
  args: {
    size: 32,
    color: 'black',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 48,
    color: 'black',
  },
}

// Colors
export const ColorWhite: Story = {
  args: {
    size: 32,
    color: 'white',
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-gray-800 p-8">
        <Story />
      </div>
    ),
  ],
}

export const ColorBlue: Story = {
  args: {
    size: 32,
    color: 'blue-500',
  },
}

export const ColorGreen: Story = {
  args: {
    size: 32,
    color: 'green-500',
  },
}

export const ColorRed: Story = {
  args: {
    size: 32,
    color: 'red-500',
  },
}

// In button context
export const InButton: Story = {
  render: () => (
    <button className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
      <Spinner size={16} color="white" />
      <span>Loading...</span>
    </button>
  ),
}

// Overlay loading
export const WithOverlay: Story = {
  render: () => (
    <div className="relative flex h-40 w-64 items-center justify-center rounded-lg border-2 border-gray-300">
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30">
        <Spinner size={40} color="white" />
      </div>
      <div className="text-center">
        <p className="text-gray-600">Content loading...</p>
      </div>
    </div>
  ),
}

// Multiple spinners
export const MultipleSpinners: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Spinner size={20} color="blue-500" />
        <span>Uploading file...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size={20} color="green-500" />
        <span>Processing data...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size={20} color="red-500" />
        <span>Retrying connection...</span>
      </div>
    </div>
  ),
}

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-4">
      <div className="text-center">
        <Spinner size={16} color="black" />
        <p className="mt-2 text-xs">16px</p>
      </div>
      <div className="text-center">
        <Spinner size={24} color="black" />
        <p className="mt-2 text-xs">24px</p>
      </div>
      <div className="text-center">
        <Spinner size={32} color="black" />
        <p className="mt-2 text-xs">32px</p>
      </div>
      <div className="text-center">
        <Spinner size={48} color="black" />
        <p className="mt-2 text-xs">48px</p>
      </div>
    </div>
  ),
}

// Accessible loading state
export const AccessibleLoading: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Spinner
          size={24}
          color="blue-500"
          role="status"
          aria-label="Loading data"
        />
        <span aria-live="polite">Fetching user profile...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner
          size={24}
          color="green-500"
          role="status"
          aria-label="Processing"
        />
        <span aria-live="polite">Processing your request...</span>
      </div>
    </div>
  ),
}
