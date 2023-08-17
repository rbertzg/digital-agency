'use client'

// types
import { ReactNode } from 'react'

// providers
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
