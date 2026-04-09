'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme()

  return (
    <div className={className}>
      {theme === 'dark' ? (
        <Image
          className="h-8"
          width={160}
          height={160}
          alt="GMT Logo"
          src="/logos/Icon-Text-White.svg"
          blurDataURL="/images/hero2.jpg"
        />
      ) : (
        <Image
          width={160}
          height={160}
          alt="GMT Logo"
          src="/logos/Icon-Text-Black.svg"
          blurDataURL="/images/hero2.jpg"
        />
      )}
    </div>
  )
}
