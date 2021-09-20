import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0px var(--padding);
  overflow: auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 31px;

  .button {
    max-width: var(--button);
  }

  @media (min-width: 608px) {
    max-width: 410px;
  }
`

export const Body = styled.div`
  flex: 1;
`

export const NoTasksLabel = styled.p`
  font-weight: 600;
  font-size: 26px;

  color: var(--purple);
`