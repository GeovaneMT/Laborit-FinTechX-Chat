import { defineConfig } from 'orval'

export default defineConfig({
  neutral: {
    input: './openapi/openapi.json',
    output: {
      mode: 'single',
      target: './src/http/generated/api.ts',
      client: 'fetch',
      override: {
        mutator: {
          path: './src/http/mutators/custom.ts',
          name: 'defaultMutator',
        },
      },
    },
  },
})
