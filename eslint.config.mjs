// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import boundaries from 'eslint-plugin-boundaries'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

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
  reactHooks.configs.flat.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      boundaries,
      'unused-imports': unusedImports,
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
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Node.js built-ins
            ['^node:'],
            // 2. React and Next.js frameworks
            ['^react', '^next'],
            // 3. External third-party packages
            ['^@?\\w'],
            // 4-13. Internal aliases grouped by source (each source = separate group with blank lines)
            // Presentation layer (top to bottom by dependency order)
            ['^@features|^@features'],
            ['^@/presentation/layouts|^@layouts'],
            ['^@patterns|^@pattern|^@pattern'],
            ['^@/presentation/ui|^@ui'],
            ['^@/presentation/schemas|^@schemas'],
            ['^@/presentation/models|^@models'],
            ['^@/presentation/providers|^@providers'],
            // Domain & Infrastructure layers
            ['^@/core/entities|^@/core/value-objects'],
            ['^@/core|^@core'],
            ['^@/infra|^@infra'],
            ['^@/http|^@http'],
            // 14. Other internal imports
            ['^@/'],
            // 15. Side effects
            ['^\\u0000'],
            // 16. Parent directory imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 17. Relative same folder imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // 18. CSS/SCSS styles
            ['^.+\\.(css|scss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // ============================================================================
      // TypeScript Import Rules - Enforce type import positioning
      // ============================================================================

      // Enforce consistent use of type imports (non-default exports)
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: false,
        },
      ],

      'unused-imports/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'boundaries/element-types': [
        'warn',
        {
          default: 'disallow',
          rules: [
            // ============================================
            // Domain Layer (absolute lowest level)
            // ============================================
            {
              from: 'core',
              // Core (Domain) can only depend on itself
              allow: ['core'],
            },

            // ============================================
            // Infrastructure & HTTP Layer
            // ============================================
            {
              from: 'infra',
              // Infrastructure can depend on: core + itself
              allow: ['core', 'infra', 'http'],
            },
            {
              from: 'http',
              // HTTP layer can depend on: core + infra + itself
              allow: ['core', 'infra', 'http'],
            },

            // ============================================
            // Presentation Layer
            // ============================================

            // UI Components (base, primitive level)
            {
              from: P.ui,
              // UI can depend on: core + ui itself + patterns
              // Should NOT depend on: features, layouts
              allow: ['core', P.ui, P.pattern],
            },

            // Patterns & Structural Components
            {
              from: P.pattern,
              // Patterns can depend on: core + infra + http + ui + patterns
              // Should NOT depend on: features or other higher-level components
              allow: ['core', 'infra', 'http', P.ui, P.pattern],
            },

            // Models & DTOs (Presentation data shaping)
            {
              from: P.models,
              // Models can depend on: core + http + models
              allow: ['core', 'http', P.models],
            },

            // Schemas (Validation schemas for presentation)
            {
              from: P.schemas,
              // Schemas can depend on: core + http + schemas
              allow: ['core', 'http', P.schemas],
            },

            // Providers & Context (Configuration)
            {
              from: P.providers,
              // Providers can depend on: core + ui + providers
              allow: ['core', P.ui, P.providers],
            },

            // Layouts (Page structure and containers)
            {
              from: P.layouts,
              // Layouts can depend on: core + ui + patterns + layouts + features
              allow: ['core', P.ui, P.pattern, P.layouts, P.features],
            },

            // Features (Domain-driven features)
            {
              from: P.features,
              // Features can depend on everything except app-level routing
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

            // Styles (Isolated to styles)
            {
              from: P.styles,
              allow: [P.styles],
            },

            // ============================================
            // App Layer (Routing, entry points)
            // ============================================
            {
              from: 'app',
              // App can depend on everything
              allow: [
                'core',
                'infra',
                'http',
                ...presentationTypes,
                'app',
                'mocks',
              ],
            },

            // ============================================
            // Mocks (Testing utilities)
            // ============================================
            {
              from: 'mocks',
              // Mocks can depend on: core + infra + http + other mocks
              allow: ['core', 'infra', 'http', 'mocks'],
            },
          ],
        },
      ],
      'boundaries/no-unknown': 'off',
      'boundaries/no-unknown-files': 'off',
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
  ...storybook.configs["flat/recommended"]
])

export default eslintConfig
