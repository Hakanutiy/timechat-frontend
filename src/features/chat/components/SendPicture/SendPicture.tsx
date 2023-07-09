import { useState } from 'react'

import { Button } from '@/components/Elements'
import { Form } from '@/components/Form'
import { InputFileField } from '@/components/InputFilFiend/InputFileField'
import { useSendMessage } from '@/features/chat/api/sendMessage'
import { useImageCreate } from '@/features/chat/api/useImageCreate'

import styles from './styles.module.scss'

type CreatePictureValues = {
  pictures: File[]
}

export const SendPicture = ({ onSendMessage }) => {
  const createImage = useImageCreate({ config: {} })
  const [value, setValue] = useState('')
  const onSubmit = async (data: CreatePictureValues) => {
    await createImage.mutate({ files: Array.from(data.pictures) })
    const imageIds = createImage.data.map((image) => image._id)

    onSendMessage({ imageIds, text: value })
    console.log(data.pictures)
  }

  return (
    <Form<CreatePictureValues> onSubmit={onSubmit}>
      {({ register, formState }) => (
        <div className="">
          <input
            value={value}
            placeholder={'Введите описание текста'}
            className={styles.input}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputFileField
            registration={register('pictures')}
            label={'file'}
            type="file"
            error={formState?.errors['file']}>
            {(imagesUrl) =>
              imagesUrl.map((imageUrl) => (
                <img
                  key={imageUrl}
                  className={styles.createImage}
                  src={imageUrl}
                  alt={'pictureCreate'}
                />
              ))
            }
          </InputFileField>

          <Button type={'submit'}>Отправить</Button>
        </div>
      )}
    </Form>
  )
}
