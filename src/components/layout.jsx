import React from "react"
import styled, { ThemeProvider } from "styled-components"

import "/src/styles/fonts.scss"
import theme from "../styles/theme"

import GlobalStyle from "./global-styles"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Theme support */}
      <Wrapper>
        <GlobalStyle /> {/* Global style injection */}
        {children}
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60rem;
  height: 100vh;
  margin: auto;
  padding: 0 1rem;
`

export default Layout
