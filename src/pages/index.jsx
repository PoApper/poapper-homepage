/**
 * This is the main index page.
 * It uses styled-components for styling,
 * which is the preferred method for styling.
 *
 * However, styling with css/scss is possible too.
 */

// ES6 import syntax
import React from "react"

import Hero from "../components/hero"
import Overview from "../components/overview"
import ProjectsAndActivities from "../components/projects-and-activities"
import PoApperIncBanner from "../components/poapper-inc-banner"

// Uses React functional components
const IndexPage = () => (
  <>
    <Hero />
    <Overview />
    <PoApperIncBanner />
    <ProjectsAndActivities />
  </>
)

export default IndexPage
