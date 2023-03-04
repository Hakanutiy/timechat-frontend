import { z } from 'zod'

import { Button } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'
import { Snackbar } from '@/components/Form/Snackbar'
import { useLogin } from '@/features/auth/api/login'
import { useAuth } from '@/lib/auth'

const schema = z.object({
  username: z.string().min(6, 'Required'),
  password: z.string().min(6, 'Required'),
})

type LoginValues = {
  username: string
  password: string
}

interface LoginFormProps {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { login } = useAuth()
  const onSubmit = (data) => {
    login(data)
  }
  return (
    <Form<LoginValues, typeof schema> schema={schema} onSubmit={onSubmit}>
      {({ register, formState }) => (
        <div className="">
          <InputField
            registration={register('username')}
            label={'Username'}
            type="text"
            error={formState?.errors['username']}
          />
          <InputField
            registration={register('password')}
            label={'Password'}
            type="password"
            error={formState?.errors['password']}
          />
          <Button className="login__button" type={'submit'}>
            Login
          </Button>
        </div>
      )}
    </Form>
  )
}
