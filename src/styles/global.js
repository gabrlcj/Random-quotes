import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    margin: 0 auto;
    background: whitesmoke;
  
    div#root {
      height: 100%;
      min-height: 100vh;
    }
  }
`
