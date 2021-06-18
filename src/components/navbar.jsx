import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import { HiMenuAlt4 } from "react-icons/hi"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <Container>
        <Items mobileOpen={mobileOpen}>
          <Logo to="/">PoApper</Logo>
          <Links mobileOpen={mobileOpen}>
            <StyledLink to="/seminar">Seminar</StyledLink>
            <StyledLink to="/people">People</StyledLink>
            <StyledLink to="/hackathon">Hackathon</StyledLink>
          </Links>
        </Items>
        <MobileButton onClick={() => setMobileOpen(!mobileOpen)}>
          <HiMenuAlt4 size="1.1em" />
        </MobileButton>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: auto;
  padding: 1rem;
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
      `}
  }
`

const Logo = styled(Link)`
  color: ${({ theme }) => theme.foreground.default};
  font-weight: 700;
  font-size: 1.1em;
  line-height: 1;

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

const StyledLink = styled(Link)`
  margin: 0 0 0 1rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 0.5rem 0;
  }
`

export default Navbar
