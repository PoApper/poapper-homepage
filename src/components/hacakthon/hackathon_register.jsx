import React from "react"
import styled from "styled-components"

import HackathonPoster from "../../images/hackathon/HackathonPoster.jpg"

const HackathonRegister = () => (
  <HackathonRegisterBody>
    <ImageWrapper>
      <HackathonRegisterImage src={HackathonPoster} />
    </ImageWrapper>
    <div>
      <h3>2019 POSTECH Hackathon return;</h3>
      <HackathonRegisterSentence>
        <span role="img" aria-label="check">
          ✔️{" "}
        </span>
        참여 신청 기간: 2021.11.01 ~ 2021.11.14
      </HackathonRegisterSentence>
      <HackathonRegisterSentence>
        <span role="img" aria-label="check">
          ✔️{" "}
        </span>
        진행 기간: 2021.11.20 ~ 2021.11.21
      </HackathonRegisterSentence>
      <HackathonRegisterSentence>
        <span role="img" aria-label="check">
          ✔️{" "}
        </span>
        참가 대상: 포스텍 학부생, 대학원생, 당일 참여가 가능한 휴학생
      </HackathonRegisterSentence>
      <HackathonRegisterSentence>
        <span role="img" aria-label="check">
          ✔️{" "}
        </span>
        해커톤 참가신청: link
      </HackathonRegisterSentence>
    </div>
  </HackathonRegisterBody>
)

const HackathonRegisterBody = styled.div`
  display: flex;
  flex-direction: row;
  max-width: ${({ theme }) => theme.contentWidth};
  padding: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-right: 1rem;
`

const HackathonRegisterImage = styled.img`
  float: left;
  height: 350px;
`

const HackathonRegisterSentence = styled.p`
  padding: 5px;
  line-height: 20px;
`

export default HackathonRegister
