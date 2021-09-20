import React, { createContext, useCallback, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import NewTaskForm from '../../components/Forms/NewTaskForm'
import Header from '../../components/Header'
import ToDoList from '../../components/ToDoList'
import { ToDo } from '../../interfaces/todo.interface'
import api from '../../services/api'
import { Title } from './styles'

type Tabs = 'to-do' | 'closed'
interface IDashboardContext {
  toggleModal: () => void
  toDos: ToDo[]
  getToDos: () => void
  selectedTab: Tabs
  setSelectedTab: React.Dispatch<React.SetStateAction<Tabs>>
}
export const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext)

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [selectedTab, setSelectedTab] = useState<Tabs>('to-do')

  const toggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  const getToDos = useCallback(async () => {

    const isClosed = selectedTab === 'closed'
    const {data} = await api.get(`/todos?isClosed=${isClosed}`)

    setToDos(data)
  }, [selectedTab])

  useEffect(() => {
    getToDos()
  }, [getToDos])


  return (
    <DashboardContext.Provider value={{toggleModal, toDos, getToDos, selectedTab, setSelectedTab}}>
      <Header />

      <Title>Hi there.</Title>

      <ToDoList />
      {showModal && <NewTaskForm />}

      <Footer />
    </DashboardContext.Provider>
  )
}

export default Dashboard
