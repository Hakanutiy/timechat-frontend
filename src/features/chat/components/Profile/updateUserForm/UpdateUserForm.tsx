import { z } from 'zod'

import { Button } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'
import { useGetMe } from '@/features/chat/api/getMe'
import { useUpdateUser } from '@/features/chat/api/updateUser'
const userNameSchema = z.object({
  username: z.string().min(6, 'Required'),
})
const nameSchema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
})

const descriptionSchema = z.object({
  description: z.string().min(1, 'Required'),
})

type UpdateUserValues = {
  username: string
  firstName: string
  lastName: string
  description: string
}

export const UpdateUserForm = ({ content, setContent }) => {
  const me = useGetMe({
    config: {},
  })
  const updateUser = useUpdateUser({ config: {} })
  const onSubmit = (data) => {
    updateUser.mutate({ ...data, userId: me.data._id })
    setContent(1)
  }

  const renderContent = () => {
    switch (content) {
      case 3:
        return (
          <Form<UpdateUserValues, typeof userNameSchema>
            schema={userNameSchema}
            onSubmit={onSubmit}>
            {({ register, formState }) => (
              <div className="">
                <InputField
                  registration={register('username')}
                  label={'username'}
                  type="text"
                  error={formState?.errors['username']}
                />
                <Button type={'submit'}>Изменить</Button>
              </div>
            )}
          </Form>
        )
      case 4:
        return (
          <Form<UpdateUserValues, typeof nameSchema>
            schema={nameSchema}
            onSubmit={onSubmit}>
            {({ register, formState }) => (
              <div className="">
                <InputField
                  registration={register('firstName')}
                  label={'firstName'}
                  type="text"
                  error={formState?.errors['firstName']}
                />
                <InputField
                  registration={register('lastName')}
                  label={'lastName'}
                  type="text"
                  error={formState?.errors['lastName']}
                />
                <Button type={'submit'}>Изменить</Button>
              </div>
            )}
          </Form>
        )
      case 5:
        return (
          <Form<UpdateUserValues, typeof descriptionSchema>
            schema={descriptionSchema}
            onSubmit={onSubmit}>
            {({ register, formState }) => (
              <div className="">
                <InputField
                  registration={register('description')}
                  label={'description'}
                  type="text"
                  error={formState?.errors['description']}
                />
                <Button type={'submit'}>Изменить</Button>
              </div>
            )}
          </Form>
        )

      default:
        return null
    }
  }

  return <>{renderContent()}</>
}
