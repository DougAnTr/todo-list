import React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '../../../utils/test'
import CloseButton from '../../../components/Buttons/CloseButton'

describe('<CloseButton />', () => {
  describe('when clicking it', () => {
    const onClick = jest.fn().mockName('onClick')

    const {getByRole} = render(<CloseButton onClick={onClick} />)

    beforeEach(() => {
      userEvent.click(getByRole('button'))
    })

    it('calls onClick', () => {
      expect(onClick).toHaveBeenCalled()
    })
  })
})
