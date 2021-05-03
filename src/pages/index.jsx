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

import { ExternalLink } from "../components/links"

// Uses React functional components
const IndexPage = () => (
  <>
    {/* <head> management by react-helmet */}
    <Helmet lang="en" title="gatsby-starter-sane" />
    <Title>gatsby-starter-sane</Title>
    <p>
      A <ExternalLink href="https://gatsbyjs.org">Gatsby</ExternalLink> starter
      to keep your sanity. View the code{" "}
      <ExternalLink href="https://github.com/rocketll/gatsby-starter-sane">
        here
      </ExternalLink>
      .
    </p>
  </>
)

// Example of CSS-in-JS by styled-components
const Title = styled.h1`
  margin: 0;
`

export default IndexPage
