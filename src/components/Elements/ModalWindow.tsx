import { useState } from 'react'

import { CloseIcon } from '@/assets/icons'

export const ModalWindow = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={'modal'}>
      <button className="add" onClick={() => setOpen(true)}></button>
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
  )
}
