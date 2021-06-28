import React from "react"
import styled from "styled-components"

import ProjectsAndActivities from "../components/projects-and-activities"

const Pa = () => (
  <Wrapper>
    <ProjectsAndActivities />
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 60rem;
  margin: auto;
`

export default Pa
