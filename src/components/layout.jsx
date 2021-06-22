import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { IconContext } from "react-icons"

import "/src/styles/fonts.scss"
import theme from "../styles/theme"

import GlobalStyle from "./global-styles"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <GlobalStyle />
        <Navbar />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </IconContext.Provider>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 1rem;
`

export default Layout
