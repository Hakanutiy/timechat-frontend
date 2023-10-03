import { useState } from 'react'

import { Button } from '@/components/Elements'
import { Form, InputField } from '@/components/Form'
import { UpdateFile } from '@/components/Form/UpdateFile'
import { InputFileField } from '@/components/InputFilFiend/InputFileField'
import { useGetMe } from '@/features/chat/api/getMe'
import { useUpdateUser } from '@/features/chat/api/updateUser'

import styles from './styles.module.scss'
type UpdateUserValues = {
  avatar: File
}

export const UpdateImage = ({ setContent }) => {
  const me = useGetMe({
    config: {},
  })
  const updateUser = useUpdateUser({ config: {} })
  const onSubmit = (data) => {
    updateUser.mutate({ ...data, userId: me.data._id, avatar: data.avatar[0] })
    setContent(1)
  }
  return (
    <Form<UpdateUserValues> onSubmit={onSubmit}>
      {({ register, formState }) => (
        <div className="">
          <InputFileField
            registration={register('avatar')}
            label={'avatar'}
            type="file"
            error={formState?.errors['avatar']}>
            {(imagesUrl) => (
              <img className={styles.userImage} src={imagesUrl[0]} alt={'avatar'} />
            )}
          </InputFileField>
          <Button type={'submit'}>Изменить</Button>
        </div>
      )}
    </Form>
  )
}
