import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './logo'

const meta = {
  title: 'Base Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

// Default logo
export const Default: Story = {
  args: {
    className: '',
  },
}

// Small logo
export const Small: Story = {
  args: {
    className: 'h-6',
  },
}

// Medium logo
export const Medium: Story = {
  args: {
    className: 'h-10',
  },
}

// Large logo
export const Large: Story = {
  args: {
    className: 'h-16',
  },
}

// Extra large logo
export const ExtraLarge: Story = {
  args: {
    className: 'h-24',
  },
}

// In header context (light background - dark theme)
export const InHeaderDark: Story = {
  args: {
    className: 'h-10',
  },
  decorators: [
    (Story) => (
      <div className="w-full bg-gray-900 p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

// In header context (dark background - light theme)
export const InHeaderLight: Story = {
  args: {
    className: 'h-10',
  },
  decorators: [
    (Story) => (
      <div className="w-full bg-white p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
}

// With custom width constraint
export const WithMaxWidth: Story = {
  args: {
    className: 'h-12 max-w-xs',
  },
}

// Centered in container
export const Centered: Story = {
  args: {
    className: 'h-12 mx-auto',
  },
  render: (args) => (
    <div className="flex h-32 w-64 items-center justify-center rounded border border-gray-300">
      <Logo {...args} />
    </div>
  ),
}
