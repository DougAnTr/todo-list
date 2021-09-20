import React from 'react'
import { render } from '../../../utils/test'
import { RenderResult } from '@testing-library/react'
import Button from '../../../components/Buttons/Button'
import userEvent from '@testing-library/user-event'

describe('<Button />', () => {
  let component: RenderResult
  let onClick: () => void

  beforeEach(() => {
    onClick = jest.fn().mockName('onClick')
    component = render(<Button onClick={onClick} >button text</Button>)
  })

  it('renders the right children', () => {
    expect(component.getByText('button text')).toBeInTheDocument()
  })

  describe('when clicking it', () => {
    beforeEach(() => {
      userEvent.click(component.getByText('button text'))
    })

    it('calls onClick', () => {
      expect(onClick).toHaveBeenCalled()
    })
  })
  
})
