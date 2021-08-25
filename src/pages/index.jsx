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

import Hero from "../components/index/hero"
import Overview from "../components/index/overview"
import ProjectsAndActivities from "../components/index/projects-and-activities"
import PoApperIncBanner from "../components/index/poapper-inc-banner"

// Uses React functional components
const IndexPage = () => (
  <>
    <Helmet lang="en" title="PoApper" />
    <Hero />
    <Overview />
    <ProjectsAndActivities />
    <PoApperIncBanner />
  </>
)

export default IndexPage
