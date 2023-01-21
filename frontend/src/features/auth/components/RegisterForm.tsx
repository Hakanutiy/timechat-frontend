import { Button, Link } from '@/components/Elements'
import { InputField } from '@/components/Form'

export const RegisterForm = () => {
  return (
    <>
      <InputField label={'Email'} type="email" className="w-full" />
      <InputField label={'Password'} type="password" className="w-full" />
      <InputField label={'Repeat password'} type="password" className="w-full" />
      <Button className="w-full">Register</Button>
    </>
  )
}
