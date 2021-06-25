import React from "react"
import styled from "styled-components"
import { FaFacebook, FaGithub } from "react-icons/fa"

import { ExternalLink } from "./links"

const Overview = () => (
  <Container>
    <OverviewText>
      PoApper는 함께 최신 개발 기술을 익히고 공유하며 성장하는 개발
      동아리입니다.{" "}
      <OverviewTextSub>
        데이터 플랫폼을 개발해 POSTECH의 데이터를 수집하며, 개발 세미나와 해커톤
        등을 개최하여 POSTECH의 개발 문화를 이끌고 있습니다.
      </OverviewTextSub>
    </OverviewText>
  </Container>
)

const Container = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: auto;
`

const OverviewText = styled.p`
  width: 50%;
  margin: 2rem 0;
  font-weight: 700;
  font-size: 1.3rem;
`

const OverviewTextSub = styled.span`
  color: ${({ theme }) => theme.foreground.sub};
`

export default Overview
