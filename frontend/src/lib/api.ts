import { API_URL } from '@/config'
import { mapSearchParams } from '@/lib/map-search-params'
import { request } from '@/lib/request'

export const api = request.create(API_URL)

export async function fetcher<T, P extends Record<string, unknown>>(
  url: string,
  params?: P,
): Promise<T> {
  const { data } = await api.get<T>(
    url + ((params && `?${mapSearchParams(params)}`) ?? ''),
  )
  return data
}
export async function mutation<T>(url: string, _data: string | object) {
  const { data } = await api.post<T>(url, _data)
  return data
}
