import React, { createContext, useCallback, useEffect, useState } from 'react'
import { setTimeout } from 'timers'
import Footer from '../../components/Footer'
import NewTaskForm from '../../components/Forms/NewTaskForm'
import Header from '../../components/Header'
import ToDoList from '../../components/ToDoList'
import { ToDo } from '../../interfaces/todo.interface'
import api from '../../services/api'
import { Container, Title } from './styles'

type Tabs = 'to-do' | 'closed'
interface IDashboardContext {
  toggleModal: () => void
  toDos: ToDo[]
  getToDos: () => void
  selectedTab: Tabs
  setSelectedTab: React.Dispatch<React.SetStateAction<Tabs>>
  isLoadingToDos: boolean
}
export const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext)

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [selectedTab, setSelectedTab] = useState<Tabs>('to-do')
  const [isLoadingToDos, setIsLoadingToDos] = useState(false)

  const toggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  const getToDos = useCallback(async () => {
    try {
      setIsLoadingToDos(true)
      const isClosed = selectedTab === 'closed'
      const {data} = await api.get(`/todos?isClosed=${isClosed}&_sort=createdAt&_order=desc`)

      setToDos(data)
    } catch {
      alert('Error loading to-dos')
    } finally {
      setTimeout(() => {
        setIsLoadingToDos(false)
      }, 1000)
    }
  }, [selectedTab])

  useEffect(() => {
    getToDos()
  }, [getToDos])


  return (
    <DashboardContext.Provider value={{toggleModal, toDos, getToDos, selectedTab, setSelectedTab, isLoadingToDos}}>
      <Container>
        <Header />

        <Title>Hi there.</Title>

        <ToDoList />
        {showModal && <NewTaskForm />}

        <Footer />
      </Container>
    </DashboardContext.Provider>
  )
}

export default Dashboard
