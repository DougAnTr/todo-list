import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: 608px) {
    width: 80%;
    margin: 0px auto;
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 42px;
  margin-left: 16px;
  margin-bottom: 27px;
`
