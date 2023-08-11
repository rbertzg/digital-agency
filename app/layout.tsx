// types
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// components
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Providers from '@/components/providers/providers'

// utils
import { cn } from '@/lib/utils'

// fonts
import { Rubik } from 'next/font/google'

// styles
import 'styles/globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency',
  description:
    'A modern interactive agency specializing in web design and development services.',
}

const BackgroundPattern = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 flex justify-center">
      {/* small screen size */}
      <div className="mx-4 basis-full border-x border-x-black/10 dark:border-x-white/10 lg:hidden" />
      {/* large screen size */}
      <div className="mx-4 hidden max-w-[1280px] basis-full grid-cols-3 gap-4 lg:grid">
        <div className="border-x border-x-black/10 dark:border-x-white/10" />
        <div className="border-x border-x-black/10 dark:border-x-white/10" />
        <div className="border-x border-x-black/10 dark:border-x-white/10" />
      </div>
    </div>
  )
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          rubik.className,
          'flex min-h-screen flex-col justify-between antialiased'
        )}
      >
        <Providers>
          <BackgroundPattern />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
