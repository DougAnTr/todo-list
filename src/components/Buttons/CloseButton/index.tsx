import React from 'react'
import { XIcon } from '../../../assets'

import { Container } from './styles'

interface CloseButtonProps {
  onClick: () => void
  className?: string
}

const CloseButton: React.FC<CloseButtonProps> = ({onClick, className}) => {
  return (
    <Container data-testid="close-button" className={className} onClick={onClick}>
      <XIcon />
    </Container>
  )
}

export default CloseButton
