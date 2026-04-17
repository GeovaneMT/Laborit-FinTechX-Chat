import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from './separator'

const meta = {
  title: 'Base Components/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the separator',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative or semantic',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

// Basic horizontal separator
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className="w-full">
      <p className="text-body mb-4">Content above</p>
      <Separator {...args} />
      <p className="text-body mt-4">Content below</p>
    </div>
  ),
}

// Vertical separator
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    decorative: true,
  },
  render: (args) => (
    <div className="flex gap-4">
      <div className="flex-1">
        <p className="text-body">Left panel</p>
      </div>
      <Separator {...args} />
      <div className="flex-1">
        <p className="text-body">Right panel</p>
      </div>
    </div>
  ),
}

// In a list/menu context
export const InList: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className="w-full">
      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
        Menu Item 1
      </button>
      <Separator {...args} />
      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
        Menu Item 2
      </button>
      <Separator {...args} />
      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
        Menu Item 3
      </button>
    </div>
  ),
}

// Semantic separator (not decorative)
export const Semantic: Story = {
  args: {
    orientation: 'horizontal',
    decorative: false,
  },
  render: (args) => (
    <div className="w-full">
      <section>
        <h2 className="mb-2 font-semibold">Section 1</h2>
        <p className="text-body">Some content here</p>
      </section>
      <Separator {...args} />
      <section className="mt-4">
        <h2 className="mb-2 font-semibold">Section 2</h2>
        <p className="text-body">More content here</p>
      </section>
    </div>
  ),
}

// Multiple separators
export const Grid: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p className="text-body mb-2">Column 1</p>
      </div>
      <div className="flex gap-4">
        <Separator orientation="vertical" {...args} />
      </div>
      <div>
        <p className="text-body mb-2">Column 2</p>
      </div>
      <div className="col-span-3">
        <Separator {...args} />
      </div>
      <div className="col-span-3">
        <p className="text-body">Content spans all columns</p>
      </div>
    </div>
  ),
}
