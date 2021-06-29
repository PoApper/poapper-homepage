import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import { HiMenuAlt4 } from "react-icons/hi"

import { InternalLink } from "./links"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Container>
      <Nav>
        <Items mobileOpen={mobileOpen}>
          <Logo to="/">PoApper</Logo>
          <Links mobileOpen={mobileOpen}>
            <StyledInternalLink to="/seminar">Seminar</StyledInternalLink>
            <StyledInternalLink to="/people">People</StyledInternalLink>
            <StyledInternalLink to="/hackathon">Hackathon</StyledInternalLink>
          </Links>
        </Items>
        <MobileButton onClick={() => setMobileOpen(!mobileOpen)}>
          <HiMenuAlt4 size="1.1em" />
        </MobileButton>
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #eeeeee;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: auto;
`

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    ${({ mobileOpen }) =>
      mobileOpen &&
      css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
  }
`

const Logo = styled(Link)`
  color: ${({ theme }) => theme.foreground.default};
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`

const Links = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
    margin: 1rem 0 0 0;

    ${({ mobileOpen }) =>
      mobileOpen &&
      css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
  }
`

const MobileButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }
`

const StyledInternalLink = styled(InternalLink)`
  margin: 0 0 0 1rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 0.5rem 0;
  }
`

export default Navbar
