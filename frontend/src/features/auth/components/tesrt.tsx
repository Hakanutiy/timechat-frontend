import { useAuth } from '@/lib/auth'

export const Tests = () => {
  const { signout } = useAuth()
  return (
    <div>
      <div>
        <p>Вот это прикол</p>
        <button onClick={signout}>Sign-out</button>
      </div>
    </div>
  )
}
