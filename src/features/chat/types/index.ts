export interface User {
  _id: string
  username: string
  isOnline: boolean
  description?: string
  firstName: string
  lastName: string
  avatar: Image
  createdAt: string
  updatedAt: string
}

export interface Image {
  _id: string
  url: string
}

export interface Chat {
  _id: string
  name: string

  preview: Image

  senders: User[]

  messages: Message[]
}

export interface Message {
  _id: number
  text: string

  images: Image

  sender: User

  createdAt: Date
}

export interface ChatEntity {
  _id: number
  isSenderOnline: boolean
  name: string
  preview: Image
  unreadMessageCount: number
  lastMessage: string
  lastMessageAt: Date
  senderIds: string[]
}
