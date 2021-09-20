import React from 'react'
import { RenderResult } from '@testing-library/react'
import { render } from '../../utils/test'
import ListToDo from '../../components/ToDoList'

describe('<ListToDo />', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(<ListToDo />)
  })

  it('should render two buttons', () => {
    expect(component.getAllByRole('button')).toHaveLength(2)
  })
})
