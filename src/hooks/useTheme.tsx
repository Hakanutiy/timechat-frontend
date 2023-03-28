import { useLayoutEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')
  const [themeMessage, setThemeMessage] = useState(
    localStorage.getItem('theme-message') || 'blue',
  )
  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  useLayoutEffect(() => {
    document.body.setAttribute('data-color', themeMessage)
    localStorage.setItem('theme-message', themeMessage)
  }, [themeMessage])
  return { theme, setTheme, themeMessage, setThemeMessage }
}
