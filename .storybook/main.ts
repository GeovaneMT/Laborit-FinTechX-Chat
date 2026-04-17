import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  // TypeScript configuration
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypesCompilerOptions: {
      allowSyntheticDefaultImports: false,
      esModuleInterop: false,
    },
  },

  // Static files
  staticDirs: [
    {
      from: '../public',
      to: '/',
    },
  ],

  // Webpack configuration for path aliases
  webpackFinal: async (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, '../src/'),
        '@ui': require('path').resolve(__dirname, '../src/presentation/ui/'),
        '@shadcn': require('path').resolve(
          __dirname,
          '../src/presentation/ui/shadcn/',
        ),
        '@utils': require('path').resolve(__dirname, '../src/core/utils/'),
        '@pattern': require('path').resolve(__dirname, '../src/core/patterns/'),
      }
    }
    return config
  },
}

export default config
