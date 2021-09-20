import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    /* colors */
    --purple: #AC6DDE;
    --grey: #F5F5F6;
    --grey-2: #777777;
    --grey-3: #414052;
    --grey-4: #272733;
    --grey-5: #272733;
    --grey-6: #21212B;
    --black: #181820;

    /* sizes */
    --border-radius: 20px;
    --padding: 16px
    --button: 163px;
    

    @media (min-width: 608px) {
      --button: 195px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;

    font-family: 'Inter', sans-serif;
    color: var(--grey);

    background-color: var(--black);
  }

  #root {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    overflow: hidden;
  }

  button {
    border: none;
    color: var(--grey);
  }

  input, textarea {
    font-family: 'Inter', sans-serif;
    padding-left: var(--padding);
    border: none;
    color: var(--grey);

    :focus-visible {
      outline: none;
    }
  }
`