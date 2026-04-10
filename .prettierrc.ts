import { type Config } from 'prettier'

const config: Config = {
  // === Formatting ===
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'auto',
  proseWrap: 'always',

  // === TailwindCSS support ===
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
