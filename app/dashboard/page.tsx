'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return (
      <div className="container flex justify-between gap-4">
        <Skeleton className="w-24 rounded-l-full" />
        <div className="flex w-full flex-col justify-between gap-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
        <Skeleton className="w-24 rounded-r-full" />
      </div>
    )
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  if (session.status === 'authenticated') {
    return <div className="container">Dashboard</div>
  }
}

export default Dashboard
