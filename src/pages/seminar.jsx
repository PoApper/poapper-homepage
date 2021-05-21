// ES6 import syntax
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import "semantic-ui-css/semantic.min.css"
import { Divider } from "semantic-ui-react"

import SeminarTimeline from "../components/seminar-timeline"
import SeminarCardGrid from "../components/seminar-cardGrid"

// Uses React functional components
const SeminarPage = () => (
  <>
    {/* <head> management by react-helmet */}
    <Helmet lang="en" title="seminar" />
    <Title>Seminar</Title>
    <p>
      포애퍼는 정기 세미나와 정모 세미나를 통해 최신 기술을 공유하고 있습니다
    </p>

    <h2>정기 세미나</h2>

    <SeminarCardGrid />

    <Divider />

    <h2>정모 세미나</h2>

    <div>태그 넣을 자리</div>

    <div style={{ margin: "20px 0" }}>
      <SeminarTimeline />
    </div>
  </>
)

// Example of CSS-in-JS by styled-components
const Title = styled.h1`
  margin: 0;
`

export default SeminarPage
