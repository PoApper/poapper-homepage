import React from "react"
import styled from "styled-components"

import Bubbles from "./bubbles"

const Hero = () => (
  <Container>
    <Information>
      <Title>PoApper</Title>
      <Subtitle>POSTECH 개발자 네트워크</Subtitle>
    </Information>
    <StyledBubbles />
  </Container>
)

const Container = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.contentWidth};
  min-height: calc(100vh - 3rem);
  margin: auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column-reverse;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 3.5em;
  letter-spacing: -0.15rem;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(97.75deg, #1602ff 0%, #ff00a8 90%);
  background-clip: text;
`

const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`

const Information = styled.div`
  display: flex;
  flex: 1 0 40%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 80%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex: 0 1;
  }
`

const StyledBubbles = styled(Bubbles)`
  flex: 1 0 60%;
  width: 100%;
  height: 30rem;
  min-height: calc(100vh - 3rem);

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex: 1 0 100vw;
    width: 100vw;
    height: 100vw;
    min-height: auto;
    margin: 0 -1rem;
  }
`

export default Hero