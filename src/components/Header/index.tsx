import React, { useContext } from 'react'

import Icon  from './Icon'
import { Title } from './Title'

import { Container } from './styles'
import Button from '../Buttons/Button'
import { DashboardContext } from '../../pages/Dashboard'

const Header: React.FC = () => {
  const { toggleModal } = useContext(DashboardContext)

  return (
    <Container>
      <div className="wrapper">
        <Icon />
        <Title>tsks.</Title>
      </div>

      <Button 
        className="button" 
        testId="newTaskButton" 
        onClick={toggleModal} 
      >
        New Task
      </Button>
    </Container>
  )
}

export default Header
