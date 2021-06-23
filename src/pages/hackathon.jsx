import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const HackathonPage = () => (
  <>
    {/* <head> management by react-helmet  */}
    <Helmet lang="en" title="hackathon" />
    <Title>Hackathon</Title>
    <p>
      포애퍼는 내부 해커톤과 외부 해커톤을 통해 각자의 아이디어를 실현해보고
      동료들과 피드백을 나누며 개발자로서의 역량을 키우고 있습니다
    </p>

    <p>(외부 해커톤 사진)</p>

    <h2>해커톤 일정</h2>
    <p>
      봄: 내부 해커톤 / 내부 해커톤은 포애퍼 내부 구성원들이 팀을 이루어
      진행하는 해커톤입니다. 아직 포애퍼 부원이 아니시라구요? -> [포애퍼
      지원하기]
    </p>

    <p>
      가을: 외부 해커톤 / 포스텍 구성원이면 누구나 팀 혹은 개인으로 참여할 수
      있는 해커톤입니다.
    </p>

    <h2>해커톤 참가신청</h2>

    <h2>역대 해커톤</h2>
    <p>
      내부 해커톤의 경우에는 아이디어를 작성하기보다는 해커톤 주제와 개발이
      완성된 프로젝트 소개정도?(개발자들의 허락을 구해야)
    </p>
    <p>외부 해커톤은 주제가 자유주제인데 그러면 후원사나 수상작?(약간애매)</p>
  </>
)

const Title = styled.h1`
  margin: 0;
`

export default HackathonPage
