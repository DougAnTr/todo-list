import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
`

export const Backdrop = styled.div`
  background-color: var(--grey-6);
  opacity: .8;

  width: 100%;
  height: 100%;
  position: absolute;
`

export const Body = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  padding: 60px var(--padding);
  border-radius: var(--border-radius);

  background-color: var(--grey-6);

  z-index: 2;

  .close-button {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`