import { Poppins, Urbanist } from 'next/font/google'

export const fontPrimary = Poppins({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const fontSecondary = Urbanist({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
