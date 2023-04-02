import { FC } from 'react'

import { Portal } from '@/components/Elements'
import { useUiStore } from '@/stores/ui'

import { Modal, ModalProps } from './Modal'

export const MainModal: FC<ModalProps> = ({ onClose, modalId, ...props }) => {
  const { currentModalId, clearCurrentModal } = useUiStore()

  const _onClose = () => {
    clearCurrentModal()
    onClose && onClose()
  }

  return (
    <Portal selector={'body'}>
      {modalId === currentModalId && (
        <Modal modalId={modalId} onClose={_onClose} {...props} />
      )}
    </Portal>
  )
}
