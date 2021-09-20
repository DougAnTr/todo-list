import React from 'react'
import { RenderResult } from '@testing-library/react'
import ToDoCheckBox from '../../../components/ToDoList/ToDoCheckBox'
import { render } from '../../../utils/test'
import userEvent from '@testing-library/user-event'

describe('<ToDoCheckBox />', () => {
  let component: RenderResult
  let toDoCompleted: () => void

  beforeEach(() => {
    toDoCompleted = jest.fn().mockName('toDoCompleted')
    component = render(<ToDoCheckBox toDoCompleted={toDoCompleted} />)
  })

  describe('when clicking', () => {
    beforeEach(() => {
      userEvent.click(component.getByRole('checkbox'))
    })

    it('changes the checked state', () => {
      expect(component.getByRole('checkbox')).toBeChecked()
    })

    it('call onChange', () => {
      setTimeout(() => {
        expect(toDoCompleted).toHaveBeenCalled()
      }, 1000)
    })
  })
  
})
