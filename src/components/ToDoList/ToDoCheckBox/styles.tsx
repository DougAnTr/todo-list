import styled from 'styled-components'

const size = 20
export const animateTime = 300
export const Container = styled.div`
  width: ${size}px;
  height: ${size}px;  
  margin-right: 9px;

  position: relative;

  input[type="checkbox"] {
    visibility: hidden;
  }

  label {
    width: ${size}px;
    height: ${size}px;
    border: 3px solid var(--purple);
    border-radius: 50%;

    position: absolute;
    left: 0;
    top: 0;
  }

  label:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;

    position: absolute;
    left: 3px;
    top: 3px;

    background-color: var(--purple);
    opacity: 0;
    transition: ease-in-out ${animateTime}ms;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`
