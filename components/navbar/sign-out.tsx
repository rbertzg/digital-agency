'use client'

import { signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

const SignOut = () => {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'

  return (
    isAuthenticated && (
      <Button
        variant="destructive"
        onClick={() => signOut()}
      >
        Sign out
      </Button>
    )
  )
}

export default SignOut
