/**
 * This is the 404 error page.
 */

import React from "react"
import Helmet from "react-helmet"

import { InternalLink } from "../components/links"

const ErrorPage = () => (
  <>
    <Helmet lang="en" title="404 Error" />
    <h1>HTTP 404.</h1>
    <InternalLink to="/">Return Home</InternalLink>
  </>
)

export default ErrorPage
