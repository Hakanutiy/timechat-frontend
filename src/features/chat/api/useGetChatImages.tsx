import { useQuery } from 'react-query'

import { Image } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

const getChatImages = (chatId): Promise<Image[]> => {
  return fetcher(`/chats/${chatId}/images`, { method: 'GET' })
}

interface useGetChatImagesOption {
  config: QueryConfig<QueryFnType>
  chatId: string
}
type QueryFnType = typeof getChatImages

export const getChatImagesQueryKey = 'chatImage'

export const useGetChatImages = ({ config, chatId }: useGetChatImagesOption) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: [getChatImagesQueryKey, chatId],
    queryFn: () => getChatImages(chatId),
  })
}
