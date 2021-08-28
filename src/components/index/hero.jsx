import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { ExternalLinkButton } from "../links"

import Bubbles from "./bubbles"

const Hero = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
        }
      }
    }
  `)

  return (
    <Container>
      <Information>
        <Title>PoApper</Title>
        <Subtitle>POSTECH 개발자 네트워크</Subtitle>
        <ExternalLinkButton href={siteMetadata.github}>
          Github
        </ExternalLinkButton>
      </Information>
      <StyledBubbles />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.contentWidth};
  height: calc(100vh - 3rem);
  min-height: 30rem;
  max-height: 60rem;
  margin: auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column-reverse;
    min-height: 30rem;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.75em;
  letter-spacing: -0.05em;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(97.75deg, #1602ff 0%, #ff00a8 90%);
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  background-clip: text;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 2.5em;
  }
`

const Subtitle = styled.h2`
  margin: 0 0 1.5rem 0;
  font-size: 1.5em;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 1.25em;
  }
`

const Information = styled.div`
  display: flex;
  flex: 1 0 40%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex: 0 1;
  }
`

const StyledBubbles = styled(Bubbles)`
  flex: 1 0 60%;
  width: 100%;
  height: calc(100vh - 3rem);
  min-height: 30rem;
  max-height: 60rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex: 1 1 100vw;
    width: calc(100vw - 1rem);
    height: 100vw;
    min-height: initial;
    margin: 0 -1rem;
  }
`

export default Hero
