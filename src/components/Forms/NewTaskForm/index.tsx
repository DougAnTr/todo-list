import React, { useContext, useState } from 'react'
import { DashboardContext } from '../../../pages/Dashboard'
import api from '../../../services/api'
import Button from '../../Buttons/Button'
import Modal from '../../Modal'
import Input from '../Input'
import TextArea from '../TextArea'

import { Container, Title } from './styles'
type NewToDoForm = {
  title: string
  description: string
} & {
  [key: string]: string;
}

const NewTaskForm: React.FC = () => {
  const { toggleModal, getToDos } = useContext(DashboardContext)
  const [form, setForm] = useState<NewToDoForm>({
    title: '',
    description: ''
  })

  const handleOnChange = (field: keyof NewToDoForm, value: string) => {
    const newForm = {...form}
    newForm[field] = value

    setForm(newForm)
  }

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await api.post('/todos', {
      id: Math.random(),
      title: form.title,
      description: form.description,
      createdAt: new Date(),
      isClosed: false
    })

    getToDos()
    toggleModal()
  }

  return (
    <Modal closeModal={toggleModal} >
      <Container onSubmit={handleSave} data-testid="newTaskForm">
        <Title>New Task</Title>

        <Input 
          className="margin-bottom" 
          placeholder="Title"
          max={60}
          value={form.title} 
          onChange={(event) => handleOnChange('title', event.target.value)}
        />

        <TextArea 
          className="margin-bottom" 
          placeholder="Description"
          value={form.description} 
          onChange={(event) => handleOnChange('description', event.target.value)}
        />

        <Button testId="saveTaskButton">Save</Button>
      </Container>
    </Modal>
  )
}

export default NewTaskForm
