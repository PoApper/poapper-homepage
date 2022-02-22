import React from "react"
import styled from "styled-components"

import hackathon_spring from "../../images/hackathon/HackathonSpring.png"
import hackathon_fall from "../../images/hackathon/HackathonFall.png"
import { ExternalLinkButton } from "../links"

const HackathonCardGrid = () => (
  <HackathonInformation>
    <HackathonCard>
      <HackathonSpringImageCard />
      <HackathonTextCard>
        <HackathonCardTitle>
          <span role="img" aria-label="flower">
            🌸{" "}
          </span>
          봄: 내부 해커톤
          <span role="img" aria-label="flower">
            {" "}
            🌸
          </span>
        </HackathonCardTitle>
        <HackathonCardBody>
          포애퍼 내부에서 진행하는 해커톤입니다. 아직 포애퍼 부원이
          아니시라구요?
        </HackathonCardBody>
        <div style={{ margin: "20px 0px 15px 0px", textAlign: "center" }}>
          <StyledExternalLinkButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVJa68iuOpdAOuU03LHeYMH8Nk8FgocS9uaDYNQ1dHxUA7Fw/viewform?usp=sf_link"
            target="_blank"
          >
            &gt;&gt; 포애퍼 지원하기 &lt;&lt;
          </StyledExternalLinkButton>
        </div>
      </HackathonTextCard>
    </HackathonCard>

    <HackathonCard>
      <HackathonFallImageCard />
      <HackathonTextCard>
        <HackathonCardTitle>
          <span role="img" aria-label="leaf">
            🍁{" "}
          </span>
          가을: 외부 해커톤
          <span role="img" aria-label="leaf">
            {" "}
            🍁
          </span>
        </HackathonCardTitle>
        <HackathonCardBody>
          포스텍 구성원이면 누구나 참여할 수 있는 해커톤입니다. 평소에
          생각했지만 구현하지 못한 아이디어가 있나요? 수업에 진행하는 프로젝트가
          있나요? 포스텍 해커톤을 통해 완성해 보세요.
        </HackathonCardBody>
      </HackathonTextCard>
    </HackathonCard>
  </HackathonInformation>
)

const HackathonSpringImageCard = styled.div`
  height: 300px;
  background-image: url("${hackathon_spring}");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    height: 200px;
  }
`

const HackathonFallImageCard = styled.div`
  height: 300px;
  background-image: url("${hackathon_fall}");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    height: 200px;
  }
`

const HackathonTextCard = styled.div`
  height: auto;
  height: 180px;
  padding: 5px 20px;
  border: 1px solid lightgray;
  border-radius: 0px 0px 10px 10px;
`

const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`

const HackathonInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: stretch;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-wrap: wrap;
  }
`

const HackathonCardTitle = styled.h3`
  padding: 0;
`

const HackathonCardBody = styled.p`
  padding: 0;
`

const StyledExternalLinkButton = styled(ExternalLinkButton)`
  margin: 0 0.5rem 0 0;
  color: black;
  background: white;
  box-shadow: 2px 2px 2px 2px lightgray;
`

export default HackathonCardGrid
