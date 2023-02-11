import { useAuth } from '@/lib/auth'

export const Test = () => {
  const { signout } = useAuth()
  return (
    <div>
      <div>
        <p>Test</p>
        <button onClick={signout}>Sign-out</button>
      </div>
    </div>
  )
}
