import type { Preview } from '@storybook/nextjs-vite'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

import '@styles/globals.css'

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      expanded: true,
      sort: 'alpha',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#f8fafc' },
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
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
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for the preview canvas',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200/80 bg-white/95 p-8 shadow-[0_32px_120px_-40px_rgba(15,23,42,0.2)] backdrop-blur sm:p-10 dark:border-slate-700/60 dark:bg-slate-900/95">
          <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-950 dark:ring-slate-800/80">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
}

export default preview
