import { isObject } from '@/utils/objects'

export type Method = 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
export type Options = {
  baseURL?: string
  headers?: Record<string, string>
  responseType?: 'text' | 'json'
}

type ResponseFields = {
  status: number
  statusText: string
  config: Options
  headers: Headers
  redirect: boolean
  url: string
  type: ResponseType
  body: ReadableStream<Uint8Array> | null
  bodyUsed: boolean
}

type Response<T> = { data: T } & ResponseFields

class RequestError<T> extends Error {
  res: Response<T>

  constructor(message: string, res: Response<T>) {
    super(message)
    this.res = res
  }
}

export const request = (function create(baseURL = '') {
  function request<T>(
    uri: string,
    options: Options | undefined,
    method?: Method,
    data?: string | object,
  ): Promise<Response<T>> {
    const headers: Record<string, string> = { ...options?.headers }
    const responseType = options?.responseType || 'json'
    let body = data as BodyInit
    if (isObject(data)) {
      body = JSON.stringify(data)
      headers['Content-Type'] = 'application/json'
    }
    const url = `${options?.baseURL || baseURL}${uri}`
    const init = { method, headers, body }
    return fetch(url, init).then((res) => {
      const response = {} as Response<T>

      for (const i in res) {
        const value = res[i as keyof typeof res]

        if (typeof value !== 'function') {
          Object.assign(response, { [i]: value })
        }
      }

      return res[responseType]()
        .then((_data) => {
          response.data = _data
        })
        .then(() => {
          if (import.meta.env.MODE === 'development' && res.status < 400) {
            // eslint-disable-next-line no-console
            console.info(
              `%c%s %c%s %s`,
              'font-weight: bold',
              res.status,
              'font-weight: normal',
              init.method || 'GET',
              url,
              typeof window === 'undefined' ? '' : data,
            )
          }

          if (!res.ok) {
            throw new RequestError(
              `Request error occured while ${method} request to ${url}`,
              response,
            )
          }

          return response
        })
    })
  }

  request.create = create
  request.cancel = typeof AbortController == 'function' ? AbortController : Object

  return request
})()
