import React from "react"
import styled from "styled-components"

import HackathonPoster from "../images/hackathon/HackathonPoster.jpg"

const HackathonRegister = () => (
  <HackathonRegisterBody>
    <HackathonRegisterImage src={HackathonPoster} />
    <HackathonRegisterSentence>
      <b>2021 POSTECH Hackathon vol.8</b>
    </HackathonRegisterSentence>
    <br />
    <HackathonRegisterSentence>
      해커톤 참여 신청 기간: 2021.11.01 ~ 2021.11.14
    </HackathonRegisterSentence>
    <HackathonRegisterSentence>
      해커톤 진행 기간: 2021.11.20 ~ 2021.11.21
    </HackathonRegisterSentence>
    <HackathonRegisterSentence>
      참가 대상: 포스텍 학부생, 대학원생, 당일 참여가 가능한 휴학생
    </HackathonRegisterSentence>
    <HackathonRegisterSentence>해커톤 참가신청: link</HackathonRegisterSentence>
  </HackathonRegisterBody>
)

const HackathonRegisterBody = styled.div`
  padding: 0px;
`

const HackathonRegisterImage = styled.img`
  float: left;
  height: 350px;
  margin-right: 15px;
  margin-bottom: 3rem;
`

const HackathonRegisterSentence = styled.div`
  padding: 5px;
`

export default HackathonRegister
