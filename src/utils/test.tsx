import { render, RenderOptions, RenderResult } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { GlobalStyle } from '../styles'

const Providers: React.FC = ({children}) => (
  <>
    <GlobalStyle/>
    {children}
  </>
)

const CustomRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult => render(ui, {wrapper: Providers, ...options})

export * from '@testing-library/react'
export { CustomRender as render }