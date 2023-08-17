import { Button } from '@/components/ui/button'
import Link from 'next/link'
import RegisterForm from './_components/register-form'

const Register = () => {
  return (
    <div className="container">
      <RegisterForm />
      <Button
        asChild
        variant="link"
        className="ml-2"
      >
        <Link href="/dashboard/login">Login with an existing account</Link>
      </Button>
    </div>
  )
}

export default Register
