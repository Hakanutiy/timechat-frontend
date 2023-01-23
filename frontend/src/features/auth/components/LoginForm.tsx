import { z } from 'zod'

import { Button } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'

const schema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
})

type LoginValues = {
  username: string
  password: string
}

interface LoginFormProps {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  return (
    <Form<LoginValues, typeof schema>
      onSubmit={(data, event) => {
        console.log(data)
      }}>
      {({ register, formState }) => (
        <div className="flex flex-col gap-4">
          <InputField
            registration={register('username')}
            label={'Username'}
            type="text"
            className="w-full"
          />
          <InputField
            registration={register('password')}
            label={'Password'}
            type="password"
            className="w-full"
          />
          <Button className="w-full" type={'submit'}>
            Login
          </Button>
        </div>
      )}
    </Form>
  )
}
