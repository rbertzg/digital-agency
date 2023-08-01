// next types
import type { Metadata } from 'next'

// react types
import type { ReactNode } from 'react'

// next fonts
import { Rubik } from 'next/font/google'

// utils
import { cn } from '@/lib/utils'

// global styles
import 'styles/globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency',
  description:
    'A modern interactive agency specializing in web design and development services.',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          rubik.className,
          'bg-slate-900 text-slate-100 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
