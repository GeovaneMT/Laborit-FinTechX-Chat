import { Geist, Geist_Mono } from 'next/font/google'

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
