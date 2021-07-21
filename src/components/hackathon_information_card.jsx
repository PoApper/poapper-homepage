import React from "react"
import styled from "styled-components"

import { ExternalLinkButton } from "./links"

const HackathonCardGrid = () => (
  <HackathonInformation>
    <HackathonCard>
      <HackathonCardTitle>봄: 내부 해커톤</HackathonCardTitle>
      <HackathonCardBody>
        내부 해커톤은 포애퍼 내부에서 진행하는 해커톤입니다. 아직 포애퍼 부원이
        아니시라구요?
      </HackathonCardBody>
      <div style={{ margin: "5px 0px 10px 0px", textAlign: "center" }}>
        <StyledExternalLinkButton href="/">
          >> 포애퍼 지원하기 &lt;&lt;
        </StyledExternalLinkButton>
      </div>
    </HackathonCard>

    <HackathonCard>
      <HackathonCardTitle>가을: 외부 해커톤</HackathonCardTitle>
      <HackathonCardBody>
        포스텍 구성원이면 누구나 참여할 수 있는 해커톤입니다. 일정은 추후 공지될
        예정이니 많은 관심 부탁드려요!
      </HackathonCardBody>
    </HackathonCard>
  </HackathonInformation>
)

const HackathonCard = styled.div`
  padding: 5px 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 2px 2px lightgray;
`

const HackathonInformation = styled.div`
  display: grid;
  grid-auto-columns: minmax(200px, auto);
  grid-gap: 13px;
  grid-template-columns: repeat(2, 1fr);
`

const HackathonCardTitle = styled.h3`
  padding: 0px;
`

const HackathonCardBody = styled.p`
  padding: 0px;
`

const StyledExternalLinkButton = styled(ExternalLinkButton)`
  margin: 0 0.25rem 0px 0px;
  background-color: #fcb6eb;
`

export default HackathonCardGrid
