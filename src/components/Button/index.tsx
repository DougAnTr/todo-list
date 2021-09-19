import React, { ReactNode } from 'react'

import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <Container onClick={onClick} >{children}</Container>
}

export default Button