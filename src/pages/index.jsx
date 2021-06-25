/**
 * This is the main index page.
 * It uses styled-components for styling,
 * which is the preferred method for styling.
 *
 * However, styling with css/scss is possible too.
 */

// ES6 import syntax
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Bubbles from "../components/bubbles"
import Overview from "../components/overview"

// Uses React functional components
const IndexPage = () => (
  <>
    <Wrapper>
      {/* <head> management by react-helmet */}
      <Helmet lang="en" title="poapper-homepage" />
      <Information>
        <Title>Hello.</Title>
        <p>
          Look, a cool bubble component. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt reiciendis eaque numquam cupiditate,
          incidunt labore delectus aperiam nam repellat consectetur perferendis
          saepe ratione debitis atque voluptatibus totam aliquam necessitatibus.
          Et.
        </p>
      </Information>
      <StyledBubbles width="100%" height="auto" />
    </Wrapper>
    <Overview />
  </>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 100rem;
  height: 100vh;
  margin: auto;
  padding: 0 4rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 0;
  }
`

// Example of CSS-in-JS by styled-components
const Title = styled.h1`
  margin: 0;
  font-size: 4em;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 3em;
  }
`

const Information = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  margin: 0 7rem 0 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    flex-basis: auto;
    max-width: 50rem;
    margin: 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 100%;
    margin: 0;
  }
`

const StyledBubbles = styled(Bubbles)`
  display: flex;
  flex: 1 0 auto;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    max-width: 35rem;
    margin: 0 0 0 -2rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    box-sizing: border-box;
    width: 100vw;
    margin: -1rem;
    padding: 0.5rem;
  }
`

export default IndexPage
