import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/Dashboard'
import Button from '../Buttons/Button'
import ToDoCard from '../ToDoCard'

import { Body, Container, Header, NoTasksLabel } from './styles'

const ToDoList: React.FC = () => {
  const { toDos, selectedTab, setSelectedTab } = useContext(DashboardContext)

  return (
    <Container>
      <Header>
        <Button 
          className="button" 
          color={selectedTab === 'to-do' ? 'grey' : 'black'} 
          onClick={() => setSelectedTab('to-do')}
        >
          To do
        </Button>
        <Button 
          className="button" 
          color={selectedTab === 'closed' ? 'grey' : 'black'} 
          onClick={() => setSelectedTab('closed')}
        >
          Closed
        </Button>
      </Header>

      {
        toDos.length > 0 ? (
          <Body>
            {toDos.map((toDo) => (
              <ToDoCard 
                key={toDo.id}
                id={toDo.id}
                title={toDo.title} 
                description={toDo.description} 
                createdAt={toDo.createdAt} 
                isClosed={toDo.isClosed} 
              />
            ))}
          </Body>
        ) : (
          <NoTasksLabel>No tasks</NoTasksLabel>
        )
      }
    </Container>
  )
}

export default ToDoList
