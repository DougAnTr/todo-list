import React from 'react'
import Header from '../../components/Header'
import { render } from '../../utils/test'

describe('<Header />', () => {
  it('renders correctly', () => {
    const {getByText, getByTestId, getByRole} = render(<Header />)

    expect(getByTestId('header-icon')).toBeInTheDocument()
    expect(getByText('tsks.')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })
})
