'use client'

// types
import { ReactNode } from 'react'

// providers
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
