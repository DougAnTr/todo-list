import React from 'react'

import { Container } from './styles'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  max?: number
}

const Input: React.FC<InputProps> = ({placeholder, value = '', onChange, className, max}) => {
  return <Container 
    className={className} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange}
    maxLength={max}
  />
}

export default Input
