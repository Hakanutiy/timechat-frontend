import { Tokens } from '@/features/auth'

const storagePrefix = 'time-chat_'

const storage = {
  getTokens: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}tokens`)) as Tokens
  },
  setTokens: (tokens: Tokens) => {
    window.localStorage.setItem(`${storagePrefix}tokens`, JSON.stringify(tokens))
  },
  clearTokens: () => {
    window.localStorage.removeItem(`${storagePrefix}tokens`)
  },
}

export default storage
