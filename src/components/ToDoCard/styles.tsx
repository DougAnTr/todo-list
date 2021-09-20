import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--grey-5);

  margin-bottom: 20px;
  border-radius: var(--border-radius);
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 42px;

  padding: 0px var(--padding);

  .wrapper {
    display: flex;
    align-items: center;
    flex: 1;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
`

export const Body = styled.section`
  flex: 1;
  padding: 20px 8px;

  background-color: var(--grey-6);
`

export const Footer = styled.footer`
  width: 100%;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;
`