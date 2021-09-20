import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  margin-top: 45px;
  margin-bottom: 31px;
  padding: 0px var(--padding);

  display: flex;

  .wrapper {
    display: flex;
    flex: 1;

    align-items: center;
  }

  .button {
      max-width: var(--button);
  }
`
