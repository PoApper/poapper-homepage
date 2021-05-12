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
import styled, { css } from "styled-components"

import Bubbles from "../components/bubbles"
import { ExternalLink } from "../components/links"

// Uses React functional components
const IndexPage = () => (
  <Wrapper>
    {/* <head> management by react-helmet */}
    <Helmet lang="en" title="poapper-homepage" />
    <Row>
      <Col>
        <Information>
          <Title>Hello.</Title>
          <p>
            Look, a cool bubble component. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt reiciendis eaque numquam
            cupiditate, incidunt labore delectus aperiam nam repellat
            consectetur perferendis saepe ratione debitis atque voluptatibus
            totam aliquam necessitatibus. Et.
          </p>
        </Information>
      </Col>
      <Col bubble>
        <Bubbles width="100%" height="auto" />
      </Col>
    </Row>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 100rem;
  height: 100vh;
  margin: auto;
  padding: 0 4rem;

  @media only screen and (max-width: 70rem) {
    padding: 1rem 1rem;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 70rem) {
    flex-wrap: wrap-reverse;
  }
`

const Col = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  ${props =>
    props.bubble &&
    `
      @media only screen and (max-width: 70rem) {
        margin: -2rem;
        max-width: 35rem;
      }
      
      @media only screen and (max-width: 40rem) {
        max-width: unset;
      }
    `}
`

// Example of CSS-in-JS by styled-components
const Title = styled.h1`
  margin: 0;
  font-size: 4em;

  @media only screen and (max-width: 70rem) {
    font-size: 3em;
  }
`

const Information = styled.div`
  width: 70%;

  @media only screen and (max-width: 70rem) {
    margin: 6rem 0 0 2rem;
  }

  @media only screen and (max-width: 40rem) {
    width: 100%;
    margin: 6rem 0 0 0;
  }
`

export default IndexPage
