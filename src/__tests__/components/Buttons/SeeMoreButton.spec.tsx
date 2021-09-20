import React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '../../../utils/test'
import SeeMoreButton from '../../../components/Buttons/SeeMoreButton'

describe('<CloseButton />', () => {
  describe('when clicking it', () => {
    const onClick = jest.fn().mockName('onClick')

    const {getByRole} = render(<SeeMoreButton onClick={onClick} />)

    beforeEach(() => {
      userEvent.click(getByRole('button'))
    })

    it('calls onClick', () => {
      expect(onClick).toHaveBeenCalled()
    })
  })
})
