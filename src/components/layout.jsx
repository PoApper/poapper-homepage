import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { IconContext } from "react-icons"
import { Helmet } from "react-helmet"

import "/src/styles/fonts.scss"
import theme from "../styles/theme"
import ogImage from "../images/logo-large.png"

import GlobalStyle from "./global-styles"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta property="og:title" content="PoApper" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
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
  padding: 0 1rem;
`

export default Layout
