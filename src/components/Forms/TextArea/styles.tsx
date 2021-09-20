import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  min-height: 234px;
  border-radius: var(--border-radius);
  padding: var(--padding);

  background-color: var(--grey-4);

  font-size: 16px;

  :placeholder {
    font-weight: 400;
    color: var(--grey-2);
  }
`
