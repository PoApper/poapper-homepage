import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    background: ${({ theme }) => theme.background.default};
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.foreground.default};
    font-family: Inter, "Spoqa Han Sans Neo", sans-serif;

    *::selection {
      background: ${({ theme }) => theme.background.selection};
    }
  }
`

export default GlobalStyle
