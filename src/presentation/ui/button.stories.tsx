import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Spinner } from '@ui/spinner'

const meta = {
  title: 'Base Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Size of the button',
    },
    effect: {
      control: 'select',
      options: [
        'none',
        'gooey',
        'ring',
        'ringHover',
        'shine',
        'shineHover',
        'expand',
      ],
      description: 'Animation effect on button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost button',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Link button',
    variant: 'link',
  },
}

// Sizes
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔔',
  },
}

// Effects
export const EffectShine: Story = {
  args: {
    children: 'Shine effect',
    effect: 'shine',
  },
}

export const EffectRing: Story = {
  args: {
    children: 'Ring effect',
    effect: 'ring',
  },
}

export const EffectGooey: Story = {
  args: {
    children: 'Gooey effect',
    effect: 'gooey',
  },
}

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled button',
    disabled: true,
  },
}

export const WithLoading: Story = {
  args: {
    children: (
      <div className="flex items-center gap-2">
        <Spinner size={16} color="white" />
        <span>Loading...</span>
      </div>
    ),
  },
}

// Interactive
export const Interactive: Story = {
  args: {
    children: 'Click me',
  },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
}

// All variants grid
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🔔</Button>
    </div>
  ),
}
