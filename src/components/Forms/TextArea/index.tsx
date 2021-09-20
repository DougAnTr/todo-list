import React from 'react'

import { Container } from './styles'

interface TextAreaProps {
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

const TextArea: React.FC<TextAreaProps> = ({placeholder, value = '', onChange, className}) => {
  return <Container 
    className={className}
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
  />
}

export default TextArea
