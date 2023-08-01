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

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center">
      {/* small screen size */}
      <div className="mx-4 basis-full border-x border-x-white/10 lg:hidden" />
      {/* large screen size */}
      <div className="mx-4 hidden max-w-[1280px] basis-full grid-cols-3 gap-4 lg:grid">
        <div className="border-x border-x-white/10" />
        <div className="border-x border-x-white/10" />
        <div className="border-x border-x-white/10" />
      </div>
    </div>
  )
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
        <BackgroundPattern />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
