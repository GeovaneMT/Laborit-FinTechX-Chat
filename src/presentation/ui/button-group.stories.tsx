import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@ui/button'
import { ButtonGroup } from '@ui/button-group'

const meta = {
  title: 'Base Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical', 'responsive'],
      description: 'Layout orientation of grouped buttons',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// Horizontal button group
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="sm">
        Previous
      </Button>
      <Button variant="outline" size="sm">
        Next
      </Button>
    </ButtonGroup>
  ),
}

// Vertical button group
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="sm">
        Save
      </Button>
      <Button variant="outline" size="sm">
        Delete
      </Button>
    </ButtonGroup>
  ),
}

// Responsive button group
export const Responsive: Story = {
  args: {
    orientation: 'responsive',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="sm">
        Mobile View
      </Button>
      <Button variant="outline" size="sm">
        Desktop View
      </Button>
    </ButtonGroup>
  ),
}

// Multiple buttons
export const MultipleButtons: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="sm">
        Button 1
      </Button>
      <Button variant="outline" size="sm">
        Button 2
      </Button>
      <Button variant="outline" size="sm">
        Button 3
      </Button>
      <Button variant="outline" size="sm">
        Button 4
      </Button>
    </ButtonGroup>
  ),
}

// Pagination style
export const Pagination: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="sm">
        ← Previous
      </Button>
      <Button variant="default" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="outline" size="sm">
        Next →
      </Button>
    </ButtonGroup>
  ),
}
