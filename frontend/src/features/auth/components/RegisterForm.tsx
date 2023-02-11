import { z } from 'zod'

import { Button } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'
import { useAuth } from '@/lib/auth'

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
  const { register } = useAuth()
  const onSubmit = async (data) => {
    await register(data)
    onSuccess()
  }
  return (
    <Form<RegisterValues, typeof schema> schema={schema} onSubmit={onSubmit}>
      {({ register, formState }) => (
        <div className="flex flex-col gap-4">
          <InputField
            registration={register('username')}
            label={'Username'}
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
