import React from "react"
import styled from "styled-components"

import hackathon_spring from "../images/hackathon/HackathonSpring.png"
import hackathon_fall from "../images/hackathon/HackathonFall.png"

import { ExternalLinkButton } from "./links"

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
        <div style={{ margin: "0px 0px 10px 0px", textAlign: "center" }}>
          <StyledExternalLinkButton href="/">
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
          있나요? 포스텍 해카톤을 통해 완성해 보세요.
        </HackathonCardBody>
      </HackathonTextCard>
    </HackathonCard>
  </HackathonInformation>
)

const HackathonSpringImageCard = styled.div`
  height: 300px;
  background-image: url("${hackathon_spring}");
  background-size: cover;
  border: 1px solid lightgray;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 2px 0px 0px 0px lightgray;
`

const HackathonFallImageCard = styled.div`
  height: 300px;
  background-image: url("${hackathon_fall}");
  background-size: cover;
  border: 1px solid lightgray;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 2px 0px 0px 0px lightgray;
`

const HackathonTextCard = styled.div`
  padding: 5px 20px;
  border: 1px solid lightgray;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 2px 2px lightgray;
`

const HackathonCard = styled.div`
  display: inline-block;
`

const HackathonInformation = styled.div`
  display: grid;
  grid-auto-columns: minmax(200px, auto);
  grid-gap: 13px;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const HackathonCardTitle = styled.h3`
  padding: 0;
`

const HackathonCardBody = styled.p`
  padding: 0;
`

const StyledExternalLinkButton = styled(ExternalLinkButton)`
  margin: 0 0.25rem 0 0;
  background-color: #fcb6eb;
`

export default HackathonCardGrid
