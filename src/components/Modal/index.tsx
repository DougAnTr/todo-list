import React, { ReactNode } from 'react'
import CloseButton from '../Buttons/CloseButton'

import { Backdrop, Body, Container } from './styles'

interface ModalProps {
  children: ReactNode
  closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({children, closeModal}) => {
  return (
    <Container>
      <Backdrop/>

      <Body>
        <CloseButton 
          className="close-button" 
          onClick={closeModal} 
        />
        {children}
      </Body>
    </Container>
  )
}

export default Modal
