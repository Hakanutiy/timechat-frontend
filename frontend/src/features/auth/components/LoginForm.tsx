import { Button, Link } from '@/components/Elements'
import { InputField } from '@/components/Form'

export const LoginForm = () => {
  return (
    <>
      <InputField label={'Email'} type="email" className="w-full" />
      <div>
        <InputField label={'Password'} type="password" className="w-full" />
        <Link to={'/'} className="text-xs mt-2">
          Forgot Password?
        </Link>
      </div>
      <Button className="w-full">Login</Button>
    </>
  )
}
