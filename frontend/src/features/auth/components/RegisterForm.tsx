import { z } from 'zod'

import { Button, Link } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'
import { useRegister } from '@/features/auth/api/register'

const schema = z
  .object({
    username: z.string().min(6, 'Required field'),
    password: z.string().min(8, 'Required field'),
    confirmPassword: z.string().min(8, 'Required field'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  })

type RegisterValues = {
  username: string
  password: string
  confirmPassword: string
}

interface RegisterFormProps {
  onSuccess: () => void
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const register = useRegister()
  const onSubmit = async (data, event) => {
    await register.mutate(data)
    onSuccess()
  }
  return (
    <Form<RegisterValues, typeof schema> schema={schema} onSubmit={onSubmit}>
      {({ register, formState }) => (
        <div>
          <InputField
            registration={register('username')}
            label={'username'}
            className="w-full"
            error={formState?.errors['username']}
          />
          <InputField
            registration={register('password')}
            label={'Password'}
            type="password"
            className="w-full"
            error={formState?.errors['password']}
          />
          <InputField
            registration={register('confirmPassword')}
            label={'Repeat password'}
            type="password"
            className="w-full"
            error={formState?.errors['password']}
          />
          <Button className="w-full">Register</Button>
        </div>
      )}
    </Form>
  )
}
