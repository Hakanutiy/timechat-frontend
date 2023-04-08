import React, { useState } from 'react'

import styles from './styles.module.scss'
interface DropdownProps {
  trigger?: React.FC<{ open: () => void; close: () => void }>
  children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children, trigger }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {trigger({ open: () => setOpen(true), close: () => setOpen(false) })}
      <div className={styles.dropdown}>
        {open ? <div className={styles.menu}>{children}</div> : null}
      </div>
    </>
  )
}
