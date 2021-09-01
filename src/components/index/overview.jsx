import React from "react"
import styled from "styled-components"

import GitLog from "./git-log"

const Overview = () => (
  <Container style={{ alignItems: "flex-start" }}>
    <OverviewWrapper>
      <OverviewText>
        PoApper는 함께 최신 개발 기술을 익히고 공유하며 성장하는 개발
        동아리입니다.{" "}
        <OverviewTextSub>
          데이터 플랫폼을 개발해 POSTECH의 데이터를 수집하며, 개발 세미나와
          해커톤 등을 개최하여 POSTECH의 개발 문화를 이끌고 있습니다.
        </OverviewTextSub>
      </OverviewText>
      <NumberStackGrid data={numberStackData} />
    </OverviewWrapper>
    <GitLog />
  </Container>
)

const numberStackData = [
  { pre: "창립년도", n: 2010, post: "년" },
  { pre: "학생회관", n: 211, post: "호" },
  { pre: "회원수", n: 33, post: "명" },
  { pre: "올해 커밋수", n: 102, post: "회" },
]

const NumberStackGrid = ({ data }) => (
  <NumberStackGridContainer>
    {data.map(d => (
      <NumberStack n={d.n} pre={d.pre} post={d.post} />
    ))}
  </NumberStackGridContainer>
)

const NumberStack = ({ n, pre, post }) => (
  <NumberStackContainer>
    <NumberStackSubtext>{pre}</NumberStackSubtext>
    <div>
      <GradientNumber>{n}</GradientNumber>
      <NumberStackSubtext>{post}</NumberStackSubtext>
    </div>
  </NumberStackContainer>
)

const NumberStackGridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
`

const NumberStackSubtext = styled.span`
  margin: 0 0 0 0.1rem;
  color: ${({ theme }) => theme.foreground.sub};
  font-size: 0.8em;
`

const NumberStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`

const GradientNumber = styled.span`
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 1;
  letter-spacing: -0.1rem;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(274.68deg, #ff008a -3.5%, #fc6815 84%);
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  background-clip: text;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 5rem auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 10rem auto 5rem auto;
  }
`

const OverviewWrapper = styled.div`
  width: 50%;
  margin: 0;

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoint.gitLog}) {
    width: auto;
  }
`

const OverviewText = styled.p`
  font-weight: 700;
  font-size: 1.5rem;

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoint.gitLog}) {
    width: auto;
  }
`

const OverviewTextSub = styled.span`
  color: ${({ theme }) => theme.foreground.sub};
`

export default Overview
