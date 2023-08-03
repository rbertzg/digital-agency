import { ReactNode } from 'react'

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  )
}

export const H3 = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export const H4 = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

export const Small = ({ children }: { children: ReactNode }) => {
  return <small className="text-sm font-medium leading-none">{children}</small>
}

export const Blockquote = ({ children }: { children: ReactNode }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  )
}
