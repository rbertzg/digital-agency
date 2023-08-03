import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type ContainerWithHorizontalBordersProps = {
  className?: string
  children: ReactNode
}

const ContainerWithHorizontalBorders = ({
  className,
  children,
}: ContainerWithHorizontalBordersProps) => {
  return (
    <div className={cn('relative py-6 lg:py-10', className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 border-y border-y-black/10 dark:border-y-white/10" />
      {children}
    </div>
  )
}

export default ContainerWithHorizontalBorders
