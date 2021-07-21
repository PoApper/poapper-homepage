import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import hackathon_image from "../images/hackathon/2019_hackathon.png"
import HackathonCardGrid from "../components/hackathon_information_card"
import HackathonQuestionAndAnswer from "../components/hackathon_question_and_answer"

const HackathonPage = () => (
  <Container>
    {/* <head> management by react-helmet  */}
    <Helmet lang="en" title="hackathon" />
    <Introduction>
      <Title>Hackathon</Title>
      <p>
        포애퍼는 내부 해커톤과 외부 해커톤을 통해 각자의 아이디어를 실현해보고
        동료들과 피드백을 나누며 개발자로서의 역량을 키우고 있습니다
      </p>
    </Introduction>
    {/*<div>*/}
    {/*  <img src={hackathon_image} width="800" height="450" />*/}
    {/*</div>*/}

    <div style={{ margin: "3rem 0" }}>
      <h2>해커톤 일정</h2>
      <HackathonCardGrid />
    </div>

    <div style={{ margin: "3rem 0" }}>
      <h2>해커톤 참가신청</h2>
      <p>해커톤 참가신청 기간이 아닙니다.</p>
    </div>

    <div style={{ margin: "3rem 0" }}>
      <h2>해커톤 Q&A</h2>
      <HackathonQuestionAndAnswer />
    </div>
  </Container>
)

const Introduction = styled.div`
  margin: 3rem 0;
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
`

export default HackathonPage
