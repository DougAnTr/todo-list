import React, { useContext } from 'react'
import { ToDo } from '../../interfaces/todo.interface'
import { DashboardContext } from '../../pages/Dashboard'
import api from '../../services/api'
import SeeMoreButton from '../Buttons/SeeMoreButton'
import ToDoCheckBox from '../ToDoList/ToDoCheckBox'
import { format } from 'date-fns'

import { Body, Container, Footer, Header, Title } from './styles'

type ToDoCardProps = ToDo

const ToDoCard: React.FC<ToDoCardProps> = ({id, title, description, isClosed, createdAt}) => {
  const { getToDos } = useContext(DashboardContext)

  const handleCloseToDo = async () => {
    await api.put(`/todos/${id}`, {id, title, description, createdAt, isClosed: true})
    getToDos()
  }

  return (
    <Container data-testid="toDoCard" >
      <Header>
        <div className="wrapper">
          <ToDoCheckBox id={'checkbox-' + id} isClosed={isClosed} toDoCompleted={() => handleCloseToDo()} />
          <Title>{title}</Title>
        </div>

        <SeeMoreButton onClick={() => console.log('show menu')}/>
      </Header>

      <Body>
        {description}
      </Body>

      <Footer>
        Created {format(new Date(createdAt), 'LLLL dd, yyyy h:mmaa')}
      </Footer>
    </Container>
  )
}

export default ToDoCard
