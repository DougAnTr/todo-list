import React from 'react'
import { ListIcon } from '../../../assets'

import { Container } from './styles'

const Icon: React.FC = () => {
  return (
    <Container data-testid="header-icon" >
      <ListIcon/>
    </Container>
  )
}

export default Icon
