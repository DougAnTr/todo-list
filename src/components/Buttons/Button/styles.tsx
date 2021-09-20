import styled, { css } from 'styled-components'

export type ColorType = 'purple' | 'grey' | 'black';

export const Container = styled.button<{
  color: ColorType
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  border-radius: var(--border-radius);

  font-weight: 600;
  font-size: 16px;

  ${({color}) => color === 'grey' ? css`
    background-color: var(--grey-3);
  ` : color === 'black' ? css`
    background-color: var(--black);
    border: 1px solid var(--grey-3);
  ` : css`
    background-color: var(--purple);
  `}
`
