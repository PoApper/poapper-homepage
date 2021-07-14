// ES6 import syntax
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import SeminarCardGrid from "../components/seminar-cardGrid"
import SeminarTimeline from "../components/seminar-timeline"

// Uses React functional components
const SeminarPage = () => (
  <Container>
    {/* <head> management by react-helmet */}
    <Helmet lang="en" title="seminar" />
    <Introduction>
      <Title>Seminar.</Title>
      <Description>
        <b>정기 세미나</b>와 <b>정모 세미나</b>를 통해 기술을 공유하고 교류하며
        성장합니다. 누구나 세미나 열 수 있고, 자유롭게 참가할 수 있습니다. 모든
        세미나는 <b>PoApper Archive</b>로 관리되며 누구나 열람할 수 있습니다!
      </Description>
    </Introduction>

    <div style={{ margin: "5rem 0" }}>
      <GradientNumber>정기 세미나.</GradientNumber>
      <Description>
        포애퍼는 매학기 정기 세미나를 열어 입문자에게 로드맵과 노하우를
        제공합니다. 정기 세미나는 3개월 동안 진행되며, 세미나를 통해 개발에 대한
        기본기를 익힐 수 있습니다. 프론트엔드, 백엔드, 모바일 세미나를 꾸준히
        운영하고 있으며, 수요가 있을 때는 고급 세미나를 열어 심화된 내용을
        다루기도 합니다.
      </Description>
      <SeminarCardGrid />
    </div>

    <div style={{ margin: "5rem 0" }}>
      <GradientNumber>정모 세미나.</GradientNumber>
      <Description>
        포애퍼 정기 모임에서 개발 관련 이슈와 노하우 등을 공유하는 세미나
        입니다. 누구나 자발적으로 세미나를 진행할 수 있으며, 포애퍼 신규회원을
        위한 개발 입문 세미나와 코딩 테스트, 인턴십, 개발툴 등 다양한 주제를
        다루고 있습니다.
      </Description>
      <SeminarTimeline />
    </div>
  </Container>
)

const Introduction = styled.div`
  margin: 3rem 0;
`

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 0.6px;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: auto;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.75em;
  letter-spacing: -0.05em;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(97.75deg, #1602ff 0%, #ff00a8 90%);
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  background-clip: text;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 2.5em;
  }
`

const GradientNumber = styled.h2`
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.1rem;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(274.68deg, #ff008a -3.5%, #fc6815 84%);
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  background-clip: text;
`

export default SeminarPage
