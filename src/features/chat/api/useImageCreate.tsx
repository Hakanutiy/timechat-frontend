import { useMutation } from 'react-query'

import { Image } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { MutationConfig } from '@/lib/react-query'
import { toFormData } from '@/utils/toFormData'

export interface CreateImageDTO {
  files: File[]
}

const createImage = (data: CreateImageDTO): Promise<Image[]> => {
  const formData = toFormData(data)
  return fetcher(`/images/multiple`, {
    data: formData,
    method: 'POST',
  })
}

export interface useImageCreateOptions {
  config: MutationConfig<typeof createImage>
}
export const useImageCreate = ({ config }: useImageCreateOptions) => {
  return useMutation({
    ...config,
    mutationFn: createImage,
  })
}
