import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import HackathonCardGrid from "../components/hackathon_information_card"
import HackathonQuestionAndAnswer from "../components/hackathon_question_and_answer"
import HackathonRegister from "../components/hackathon_register"

const HackathonPage = () => (
  <Container>
    {/* <head> management by react-helmet  */}
    <Helmet lang="en" title="hackathon" />
    <Introduction>
      <Title>Hackathon</Title>
      <h2>해커톤이란?</h2>
      <div>
        Hacking과 Marathon의 합성어로, 여기서의 해킹은 우리가 흔히 생각하는
        해킹이 아닌, extreme coding으로서의 해킹입니다. 일반적인 개발이 오랜
        시간에 걸쳐서 이루어지는 반면{" "}
        <b>
          해카톤은 특정 짧은 시간 내에 기획, 디자인, 개발까지 진행함으로서
          생산률을 높이고 다양한 아이디어를 창출
        </b>
        해내는 행사입니다.
      </div>
      <br />
      <div>
        포애퍼는 매년 봄과 가을에 교내 해커톤을 개최하고 있습니다. 자유롭게
        아이디어를 제시하고 개발 및 검증하며 마음껏 창의성을 발휘하는 포애퍼의
        Develop Festival 입니다. 좋은 아이디어는 포애퍼 법인의 도움을 받아{" "}
        사업화 하거나, 포애퍼의 후속 프로젝트로 발전시킵니다.
      </div>
    </Introduction>

    <div style={{ margin: "3rem 0" }}>
      <h2>해커톤 일정</h2>
      <HackathonCardGrid />
    </div>

    <div style={{ margin: "3rem 0" }}>
      <h2>해커톤 참가신청</h2>
      {/*<p>해커톤 참가신청 기간이 아닙니다.</p>*/}
      <HackathonRegister />
    </div>

    <div style={{ margin: "3rem 0", clear: "both" }}>
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
  -webkit-background-clip: text;
`

export default HackathonPage
