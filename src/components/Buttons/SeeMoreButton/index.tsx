import React from 'react'
import { SeeMoreIcon } from '../../../assets'

import { Container } from './styles'

interface SeeMoreButtonProps {
  onClick: () => void
  className?: string
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({onClick, className}) => {
  return (
    <Container data-testid="see-more-button" className={className} onClick={onClick}>
      <SeeMoreIcon />
    </Container>
  )
}

export default SeeMoreButton
