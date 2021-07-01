import React from "react"
import styled from "styled-components"

const Overview = () => (
  <Container>
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
    <GitView>{gitData}</GitView>
  </Container>
)

const numberStackData = [
  { pre: "창립년도", n: 2015, post: "년" },
  { pre: "동아리실", n: 211, post: "호" },
  { pre: "회원수", n: 33, post: "명" },
  { pre: "작년 커밋수", n: 102, post: "회" },
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

const gitViewBreakpoint = "50rem"

const OverviewWrapper = styled.div`
  width: 50%;
  margin: 2rem 0;

  @media only screen and (max-width: ${gitViewBreakpoint}) {
    width: auto;
  }
`

const OverviewText = styled.p`
  font-weight: 700;
  font-size: 1.5rem;

  @media only screen and (max-width: ${gitViewBreakpoint}) {
    width: auto;
  }
`

const OverviewTextSub = styled.span`
  color: ${({ theme }) => theme.foreground.sub};
`

const GitView = styled.pre`
  flex: 1 0;
  margin: 0 0 0 1rem;
  padding: 2rem 1rem 2rem 2rem;
  color: #dddddd;
  font-size: 0.8em;
  background: #000000;
  border-radius: 1rem;

  @media only screen and (max-width: ${gitViewBreakpoint}) {
    display: none;
  }
`

const gitData = `poapper@postech ~ $ git log HEAD~3..HEAD

commit 1a05a223540d3b5cea6f13e5cd3ae7420754e832
Author: Lucas Yunkyu Lee <me@luc.li>
Date:   Sun Jun 20 03:57:39 2021 +0900

        fix: update build results

commit 82f789b25fce77dcb7611f8de1600ac0a989349c
Author: Lucas Yunkyu Lee <me@luc.li>
Date:   Sun Jun 20 03:55:39 2021 +0900

        feat: add header and form design

commit 414c25ffd4a6762a968280b5fd752789b59c2c6b
Author: Lucas Yunkyu Lee <me@luc.li>
Date:   Sun Jun 20 03:18:56 2021 +0900

        feat: implement basic form`

export default Overview
