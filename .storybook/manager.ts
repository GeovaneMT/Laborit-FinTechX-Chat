import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Brain Box Storybook',
    brandUrl: 'https://brain-box.dev',
    brandImage: '/images/logo.svg',
    appBg: '#f8fafc',
    appContentBg: '#ffffff',
    appBorderColor: '#e2e8f0',
    appBorderRadius: 16,
    textColor: '#111827',
    barBg: '#111827',
    barTextColor: '#f8fafc',
    barSelectedColor: '#38bdf8',
    inputBg: '#f8fafc',
    inputBorder: '#cbd5e1',
    inputTextColor: '#111827',
    inputBorderRadius: 12,
  }),
})
