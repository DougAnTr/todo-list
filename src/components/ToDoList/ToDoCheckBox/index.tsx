import React, { useState } from 'react'

import { animateTime, Container } from './styles'

interface ToDoCheckBoxProps {
  id: string
  toDoCompleted: () => void
  isClosed?: boolean
}

const ToDoCheckBox: React.FC<ToDoCheckBoxProps> = ({id, toDoCompleted, isClosed = false}) => {
  const [checked, setChecked] = useState(isClosed)

  const handleOnClick = () => {
    setChecked((isChecked) => {
      if(!isChecked) {
        setTimeout(() => toDoCompleted(), animateTime)
      }

      return !isChecked
    })
  }

  return (
    <Container>
      <input id={id} type="checkbox" disabled={isClosed} checked={checked} onChange={handleOnClick} />
      <label data-testid="label" htmlFor={id}/>
    </Container>
  )
}

export default ToDoCheckBox
