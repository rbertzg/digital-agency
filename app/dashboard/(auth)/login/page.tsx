'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LoginForm from './_components/login-form'

const Login = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return (
      <div className="container mx-auto max-w-[360px] space-y-6">
        <Skeleton className="h-[68px] w-full" />
        <Skeleton className="h-[68px] w-full" />
        <Skeleton className="h-[36px] w-full" />
        <Separator className="my-4" />
        <Skeleton className="h-[36px] w-full" />
        <Skeleton className="h-[24px] w-full" />
      </div>
    )
  }

  if (session.status === 'authenticated') {
    router.push('/dashboard')
  }

  if (session.status === 'unauthenticated') {
    return (
      <div className="container mx-auto max-w-[360px]">
        <LoginForm />
        <Separator className="my-6" />
        <div>
          <Button
            onClick={() => signIn('google')}
            className="w-full"
          >
            Login with Google
          </Button>
          <Button
            asChild
            variant="link"
            className="mt-2 w-full"
          >
            <Link href="/dashboard/register">Create an new account</Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Login
