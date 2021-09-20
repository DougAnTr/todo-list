import React, { ReactNode } from 'react'

import { ColorType, Container } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  color?: ColorType
  testId?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({children, onClick, color = 'purple', testId, className}) => {
  return (
    <Container 
      className={className} 
      data-testid={testId} 
      onClick={onClick} 
      color={color}
    >
      {children}
    </Container>
  )
}

export default Button