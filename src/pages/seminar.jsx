// ES6 import syntax
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import SeminarCardGrid from "../components/seminar-cardGrid"
import SeminarTimeline from "../components/seminar-timeline"

// Uses React functional components
const SeminarPage = () => (
  <Wrapper>
    {/* <head> management by react-helmet */}
    <Helmet lang="en" title="seminar" />
    <Introduction>
      <h1>Seminar.</h1>
      <Description>
        포애퍼는 <b>정기 세미나</b>와 <b>정모 세미나</b>를 통해 기술을 공유하고
        교류하며 성장합니다. 누구나 세미나 열 수 있고, 자유롭게 참가할 수
        있습니다. 모든 세미나는 <b>PoApper Archive</b>로 관리되며 누구나 열람할
        수 있습니다!
      </Description>
    </Introduction>

    <div style={{ margin: "3rem 0" }}>
      <h2>정기 세미나.</h2>
      <Description>
        포애퍼는 매학기 실력이 검증된 포애퍼 정회원이 정기 세미나를 열어 개발
        입문자에게 로드맵과 노하우를 제공합니다. 정기 세미나는 3개월 동안
        진행되며, 세미나를 통해 개발에 대한 기본기를 익힐 수 있습니다.
        프론트엔드, 백엔드, 모바일 세미나를 꾸준히 운영하고 있으며, 수요가 있을
        때는 고급 세미나를 열어 심화된 내용을 다루기도 합니다.
      </Description>
      <SeminarCardGrid />
    </div>

    <div style={{ margin: "3rem 0" }}>
      <h2>정모 세미나.</h2>
      <Description>
        매주 진행되는 정기 모임에서 개발 관련 이슈와 노하우 등을 공유하는 세미나
        입니다. 누구나 참여할 수 있으며, 자발적인 참여로 진행됩니다. 포애퍼
        신규회원을 위한 개발 입문 세미나와 코딩 테스트, 인턴십, 개발툴 등 다양한
        주제를 다루고 있습니다.
      </Description>
      <SeminarTimeline />
    </div>
  </Wrapper>
)

const Introduction = styled.div`
  margin: 3rem 0;
`

const Description = styled.p`
  font-size: 18px;
`

const Wrapper = styled.div`
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 100rem;
  height: 100vh;
  margin: auto;
  padding: 0 4rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 0;
  }
`

const Divider = styled.hr`
  margin: 5px;
  border-top: 1.8px solid black;
`

export default SeminarPage
