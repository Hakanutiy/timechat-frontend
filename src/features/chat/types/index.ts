export interface User {
  _id: string
  username: string
  isOnline: boolean
  description?: string
  firstName: string
  lastName: string
  avatar: Avatar
  createdAt: string
  updatedAt: string
}

interface Avatar {
  _id: string
  url: string
}
