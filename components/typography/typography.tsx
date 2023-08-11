import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type H1Props = {
  className?: string
  children: ReactNode
}

export const H1 = ({ className, children }: H1Props) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  )
}

type H2Props = {
  className?: string
  children: ReactNode
}

export const H2 = ({ className, children }: H2Props) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        className
      )}
    >
      {children}
    </h2>
  )
}

type H3Props = {
  className?: string
  children: ReactNode
}

export const H3 = ({ className, children }: H3Props) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  )
}

type H4Props = {
  className?: string
  children: ReactNode
}

export const H4 = ({ className, children }: H4Props) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h4>
  )
}

type ParagraphProps = {
  className?: string
  children: ReactNode
}

export const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  )
}

type SmallProps = {
  className?: string
  children: ReactNode
}

export const Small = ({ className, children }: SmallProps) => {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  )
}

type BlockquoteProps = {
  className?: string
  children: ReactNode
}

export const Blockquote = ({ className, children }: BlockquoteProps) => {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  )
}

type ListProps = {
  className?: string
  children: ReactNode
}

export const List = ({ className, children }: ListProps) => {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {children}
    </ul>
  )
}
