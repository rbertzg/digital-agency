'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import LoginForm from './_components/login-form'

const Login = () => {
  return (
    <div className="container">
      <LoginForm />
      <Button onClick={() => signIn('google')}>Login with Google</Button>
      <Button
        asChild
        variant="link"
        className="ml-2"
      >
        <Link href="/dashboard/register">Create an new account</Link>
      </Button>
    </div>
  )
}

export default Login
