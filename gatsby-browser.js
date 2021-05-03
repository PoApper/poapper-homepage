/**
 * This file is needed for the sitewide layout element, together with gatsby-ssr.js.
 * See https://www.gatsbyjs.com/docs/how-to/routing/layout-components/
 */

import React from "react"

import Layout from "./src/components/layout"

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export { wrapPageElement }
