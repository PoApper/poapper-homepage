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

import Hero from "../components/hero"
import Overview from "../components/overview"

// Uses React functional components
const IndexPage = () => (
  <>
    <Hero />
    <Overview />
  </>
)

export default IndexPage
