import React from 'react'

import Icon  from './Icon'
import { Title } from './Title'

import { Container } from './styles'
import Button from '../Button'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <Icon />
        <Title>tsks.</Title>
      </div>

      <Button onClick={() => console.log('new task')} >New Task</Button>
    </Container>
  )
}

export default Header
