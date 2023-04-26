import { useEffect, useRef } from 'react'

export const AlwaysScrollToBottom = () => {
  const $messagesEnd = useRef(null)
  useEffect(() => {
    $messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
  })
  return <div ref={$messagesEnd}></div>
}
