import React from 'react'
import Modal from '../../components/Modal'
import { render } from '../../utils/test'
import { RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Modal />', () => {
  let component: RenderResult
  let closeModal: () => void

  beforeEach(() => {
    closeModal = jest.fn().mockName('closeModal')
    component = render(<Modal closeModal={closeModal}>Modal body</Modal>)
  })

  it('renders the right children', () => {
    expect(component.getByText('Modal body')).toBeInTheDocument()
  })

  describe('when clicking the close button', () => {
    it('calls closeModal', () => {
      userEvent.click(component.getByTestId('close-button'))

      expect(closeModal).toHaveBeenCalled()
    })
  })
  
})
