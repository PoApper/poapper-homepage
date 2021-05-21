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
  height: 100vh;
  padding: 0 1rem;
`

export default Layout
