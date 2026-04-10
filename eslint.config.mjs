import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import boundaries from 'eslint-plugin-boundaries'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

/** Presentation sub-zones (template: ui / pattern / features + shared folders). */
const P = {
  ui: 'presentation-ui',
  pattern: 'presentation-pattern',
  features: 'presentation-features',
  layouts: 'presentation-layouts',
  schemas: 'presentation-schemas',
  models: 'presentation-models',
  styles: 'presentation-styles',
  providers: 'presentation-providers',
}

const presentationTypes = Object.values(P)

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...nextTs,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      boundaries,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'boundaries/elements': [
        { type: 'core', pattern: 'src/core/**/*' },
        { type: 'infra', pattern: 'src/infra/**/*' },
        { type: 'http', pattern: 'src/http/**/*' },
        { type: P.ui, pattern: 'src/presentation/ui/**/*' },
        { type: P.pattern, pattern: 'src/presentation/pattern/**/*' },
        { type: P.features, pattern: 'src/presentation/features/**/*' },
        { type: P.layouts, pattern: 'src/presentation/layouts/**/*' },
        { type: P.schemas, pattern: 'src/presentation/schemas/**/*' },
        { type: P.models, pattern: 'src/presentation/models/**/*' },
        { type: P.styles, pattern: 'src/presentation/styles/**/*' },
        { type: P.providers, pattern: 'src/presentation/providers/**/*' },
        { type: 'app', pattern: 'src/app/**/*' },
        { type: 'mocks', pattern: 'src/mocks/**/*' },
      ],
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'boundaries/element-types': [
        'warn',
        {
          default: 'disallow',
          rules: [
            {
              from: 'core',
              allow: ['core'],
            },
            {
              from: 'infra',
              allow: ['core', 'infra', 'http', ...presentationTypes],
            },
            {
              from: 'http',
              allow: ['core', 'infra', 'http', ...presentationTypes],
            },
            {
              from: P.ui,
              allow: ['core', P.ui, P.pattern],
            },
            {
              from: P.pattern,
              allow: ['core', 'infra', 'http', P.ui, P.pattern],
            },
            {
              from: P.features,
              allow: [
                'core',
                'infra',
                'http',
                P.ui,
                P.pattern,
                P.features,
                P.layouts,
                P.schemas,
                P.models,
                P.providers,
              ],
            },
            {
              from: P.layouts,
              allow: ['core', P.ui, P.pattern, P.layouts, P.features],
            },
            {
              from: P.schemas,
              allow: ['core', 'http', P.schemas],
            },
            {
              from: P.models,
              allow: ['core', 'http', P.models],
            },
            {
              from: P.styles,
              allow: [P.styles],
            },
            {
              from: P.providers,
              allow: ['core', P.ui, P.providers],
            },
            {
              from: 'app',
              allow: [
                'core',
                'infra',
                'http',
                ...presentationTypes,
                'app',
                'mocks',
              ],
            },
            {
              from: 'mocks',
              allow: ['core', 'infra', 'http', 'mocks'],
            },
          ],
        },
      ],
      'boundaries/no-unknown': 'off',
      'boundaries/no-unknown-files': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\u0000'],
            ['^node:'],
            ['^@?\w'],
            ['^@/'],
            ['^(@core|@infra|@http|@presentation|@mocks)'],
            ['^\.\./'],
            ['^\./'],
            ['^.+\.(css|scss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: [
      'src/presentation/ui/shadcn/dot-pattern.tsx',
      'src/presentation/ui/shadcn/file-upload.tsx',
    ],
    rules: {
      'react-hooks/purity': 'off',
      'react-hooks/immutability': 'off',
    },
  },
])

export default eslintConfig
