import React from 'react'
import { RenderResult } from '@testing-library/react'
import { render } from '../../../utils/test'
import Input from '../../../components/Forms/Input'
import userEvent from '@testing-library/user-event'

describe('<Input />', () => {
  let component: RenderResult
  let onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  let value = ''

  beforeEach(() => {
    onChange = jest.fn((event) => {
      value += event.target.value
    }).mockName('onChange')

    component = render(<Input placeholder="input" value={value} onChange={onChange} />)
  })

  it('renders the right placeholder', () => {
    expect(component.getByPlaceholderText('input')).toBeInTheDocument()
  })

  describe('when typing', () => {
    beforeEach(() => {
      userEvent.type(component.getByPlaceholderText('input'), 'some text')
    })

    it('calls onChange', () => {
      expect(onChange).toHaveBeenCalled()
    })

    it('changes its value', () => {
      expect(component.getByPlaceholderText('input')).toHaveValue('some text')
    })
  })
  
})
