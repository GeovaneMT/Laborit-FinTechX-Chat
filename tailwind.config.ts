import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/http/**/*.{js,ts,jsx,tsx,mdx}',
  ],  
  plugins: [tailwindcssAnimate],
} satisfies Config
