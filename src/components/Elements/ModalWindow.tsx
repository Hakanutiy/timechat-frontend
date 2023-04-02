import React, { useState } from 'react'

import { CloseIcon } from '@/assets/icons'

interface ModalWindowProps {
  trigger?: React.FC<{ open: () => void }>
  children: React.ReactNode
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ children, trigger }) => {
  const [open, setOpen] = useState(false)
  const Trigger = trigger
  return (
    <>
      <Trigger open={() => setOpen(true)} />
      <div className={'modal'}>
        <div className={open ? 'overlay active' : 'overlay'}>
          <div className="modal">
            <div className={open ? 'modal__win active' : 'modal__win'}>
              <div className="modal__content">
                <div>
                  <div className={'modal__header'}>
                    <button className="close" onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </button>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
