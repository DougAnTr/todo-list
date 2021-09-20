import React from 'react'
import { RenderResult } from '@testing-library/react'
import { render } from '../../../utils/test'
import userEvent from '@testing-library/user-event'
import TextArea from '../../../components/Forms/TextArea'

describe('<TextArea />', () => {
  let component: RenderResult
  let onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  let value = ''

  beforeEach(() => {
    onChange = jest.fn((event) => {
      value += event.target.value
    }).mockName('onChange')

    component = render(<TextArea placeholder="textArea" value={value} onChange={onChange} />)
  })

  it('renders the right placeholder', () => {
    expect(component.getByPlaceholderText('textArea')).toBeInTheDocument()
  })

  describe('when typing', () => {
    beforeEach(() => {
      userEvent.type(component.getByPlaceholderText('textArea'), 'some text')
    })

    it('calls onChange', () => {
      expect(onChange).toHaveBeenCalled()
    })

    it('changes its value', () => {
      expect(component.getByPlaceholderText('textArea')).toHaveValue('some text')
    })
  })
  
})
