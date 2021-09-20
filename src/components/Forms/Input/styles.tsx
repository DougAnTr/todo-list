import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  height: 64px;
  border-radius: var(--border-radius);

  background-color: var(--grey-4);

  font-size: 16px;

  :placeholder {
    font-weight: 400;
    color: var(--grey-2);
  }
`
