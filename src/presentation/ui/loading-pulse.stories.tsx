import type { Meta, StoryObj } from '@storybook/react'

import { LoadingPulse } from './loading-pulse'

const meta = {
  title: 'Base Components/LoadingPulse',
  component: LoadingPulse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingPulse>

export default meta
type Story = StoryObj<typeof meta>

// Default loading pulse
export const Default: Story = {}

// In a sentence context
export const InText: Story = {
  render: () => (
    <div className="text-center">
      <p className="text-body">
        Loading <LoadingPulse />
      </p>
    </div>
  ),
}

// Multiple pulses
export const Multiple: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4">
      <LoadingPulse />
      <LoadingPulse />
      <LoadingPulse />
    </div>
  ),
}

// With dark background
export const OnDarkBackground: Story = {
  render: () => (
    <div className="flex items-center justify-center rounded-lg bg-gray-900 p-8">
      <LoadingPulse />
    </div>
  ),
}

// Status indicator context
export const StatusIndicator: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <LoadingPulse />
        <span className="text-sm text-gray-600">Connecting...</span>
      </div>
      <div className="flex items-center gap-2">
        <LoadingPulse />
        <span className="text-sm text-gray-600">Processing request...</span>
      </div>
      <div className="flex items-center gap-2">
        <LoadingPulse />
        <span className="text-sm text-gray-600">Syncing data...</span>
      </div>
    </div>
  ),
}

// List item with loading pulse
export const InListItem: Story = {
  render: () => (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Item 1</span>
        <LoadingPulse />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Item 2</span>
        <LoadingPulse />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Item 3</span>
        <LoadingPulse />
      </div>
    </div>
  ),
}

// Inline within content
export const InlineContent: Story = {
  render: () => (
    <div className="max-w-md">
      <h3 className="mb-2 font-semibold">Real-time Updates</h3>
      <p className="text-sm text-gray-600">
        Your data is being updated <LoadingPulse /> in real-time
      </p>
    </div>
  ),
}
