import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { HiMenuAlt4 } from "react-icons/hi"

const Footer = () => {
  return (
    <Container>
      <FooterElement>PoApper</FooterElement>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #eeeeee;
`

const FooterElement = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: auto;
`

export default Footer
