import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Projectactivities from "../components/projectactivities"

const Pa = () => (
  <Wrapper>
    <Projectactivities />
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 60rem;
  margin: auto;
`

export default Pa
