import React from 'react'
import { RenderResult } from '@testing-library/react'
import ToDoCheckBox from '../../../components/ToDoList/ToDoCheckBox'
import { render } from '../../../utils/test'
import userEvent from '@testing-library/user-event'
import { animateTime } from '../../../components/ToDoList/ToDoCheckBox/styles'

describe('<ToDoCheckBox />', () => {
  let component: RenderResult
  let toDoCompleted: () => void

  beforeEach(() => {
    toDoCompleted = jest.fn().mockName('toDoCompleted')
    component = render(<ToDoCheckBox id="1" toDoCompleted={toDoCompleted} />)
  })

  describe('when clicking', () => {
    beforeEach(() => {
      userEvent.click(component.getByTestId('label'))
    })

    it('call onChange', () => {
      setTimeout(() => {
        expect(toDoCompleted).toHaveBeenCalled()
      }, animateTime)
    })
  })
  
})
