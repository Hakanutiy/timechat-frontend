import { useEffect, useState } from 'react'

export const Snackbar = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 5000)
    return () => clearTimeout(timer)
  })
  return (
    <>
      <button onClick={() => setOpen(true)}>on Succes!</button>

      <button
        className={open ? 'snackbar active' : 'snackbar'}
        onClick={() => setOpen(false)}>
        <p className="snackbar__text">On Succes!</p>
      </button>
    </>
  )
}
