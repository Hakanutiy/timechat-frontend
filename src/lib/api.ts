import { API_URL } from '@/config'
import { resetTokens } from '@/lib/auth'
import { mapSearchParams } from '@/lib/map-search-params'
import { Method, Options, request } from '@/lib/request'
import storage from '@/utils/storage'

export const api = request.create(API_URL)

interface Config<P> {
  method: Method
  params?: P
  data?: string | object
  options?: Options
}

export async function fetcher<T, P extends object = object>(
  url: string,
  config: Config<P>,
): Promise<T> {
  try {
    const _url = url + (config?.params ? `?${mapSearchParams(config.params)}` : '')
    const options = requestInterceptorsOptionsOverride(config?.options ?? {})
    const { data } = await api<T>(_url, options, config?.method, config?.data)
    return data
  } catch (error) {
    if (error?.res?.status === 401) {
      const isTokensReset = await resetTokens()
      if (isTokensReset) fetcher(url, config)
    }
    throw error
  }
}

function requestInterceptorsOptionsOverride(options) {
  const tokens = storage.getTokens()
  const accessToken = tokens?.accessToken
  options.headers = {}
  if (accessToken) {
    options.headers.Authorization = `Bearer ${accessToken}`
  } else {
    delete options?.headers?.Authorization
  }
  return options
}
