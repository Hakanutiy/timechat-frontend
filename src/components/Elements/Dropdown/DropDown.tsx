import React, { useEffect, useRef, useState } from 'react'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'

import styles from './styles.module.scss'
interface DropdownProps {
  trigger?: React.FC<{ open: () => void; close: () => void }>
  children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const $dropdown = useRef()

  useOnClickOutside($dropdown, () => setIsOpen(false))

  return (
    <>
      {trigger({ open: () => setIsOpen(true), close: () => setIsOpen(false) })}
      <div className={styles.dropdown} ref={$dropdown}>
        {isOpen ? <div className={styles.menu}>{children}</div> : null}
      </div>
    </>
  )
}
