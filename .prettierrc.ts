import { type Config } from 'prettier'

const config: Config = {
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

  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
