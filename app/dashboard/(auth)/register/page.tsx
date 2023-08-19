import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import RegisterForm from './_components/register-form'

const Register = () => {
  return (
    <div className="container mx-auto max-w-[360px]">
      <RegisterForm />
      <Separator className="my-6" />
      <Button
        asChild
        variant="link"
      >
        <Link href="/dashboard/login">Login with an existing account</Link>
      </Button>
    </div>
  )
}

export default Register
