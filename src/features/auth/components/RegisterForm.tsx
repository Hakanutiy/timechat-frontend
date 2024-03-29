import { z } from 'zod'

import { Button } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'
import { useAuth } from '@/lib/auth'

const schema = z
  .object({
    username: z.string().min(6, 'Required field'),
    password: z.string().min(8, 'Required field'),
    confirmPassword: z.string().min(8, 'Required field'),
    firstName: z.string().min(2, 'Required field'),
    lastName: z.string().min(2, 'Required field'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  })

type RegisterValues = {
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}

interface RegisterFormProps {
  onSuccess: () => void
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register } = useAuth()
  const onSubmit = async (data) => {
    await register(data)
    console.log(data)
    onSuccess()
  }
  return (
    <Form<RegisterValues, typeof schema> schema={schema} onSubmit={onSubmit}>
      {({ register, formState }) => (
        <div>
          <InputField
            registration={register('username')}
            label={'Username'}
            error={formState?.errors['username']}
          />
          <InputField
            registration={register('firstName')}
            label={'firstName'}
            error={formState?.errors['firstName']}
          />
          <InputField
            registration={register('lastName')}
            label={'lastName'}
            error={formState?.errors['lastName']}
          />
          <InputField
            registration={register('password')}
            label={'Password'}
            type="password"
            error={formState?.errors['password']}
          />
          <InputField
            registration={register('confirmPassword')}
            label={'Repeat password'}
            type="password"
            error={formState?.errors['password']}
          />

          <Button className="w-full">Register</Button>
        </div>
      )}
    </Form>
  )
}
