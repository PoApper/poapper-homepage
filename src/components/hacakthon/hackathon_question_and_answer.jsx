import React from "react"
import styled from "styled-components"

const HackathonQuestionAndAnswer = () => (
  <BubbleGroup>
    <LeftBubbleGroup>
      <LeftBubbleEnd>
        안녕하세요, 해커톤에 대해 궁금한 점이 있다면 편하게 질문해주세요!
        <span role="img" aria-label="smile">
          {" "}
          😆
        </span>
      </LeftBubbleEnd>
    </LeftBubbleGroup>
    <RightBubbleGroup>
      <RightBubbleEnd>안녕하세요! 해커톤은 어떻게 진행되나요?</RightBubbleEnd>
    </RightBubbleGroup>
    <LeftBubbleGroup>
      <LeftBubble>
        봄에는 포애퍼 내부에서 진행되며, 비대면 상황에서는 주어진 주제에 맞춰{" "}
        <b>일주일</b>동안 개발을 진행해, 그 결과를 발표하는 시간을 가집니다.
      </LeftBubble>
      <LeftBubbleEnd>
        가을 해커톤은 외부 해커톤으로 포스텍 학우 전체를 대상으로,{" "}
        <b>이틀동안</b> 아이디어를 구상하고 직접 구현해 발표하는 방식으로
        진행됩니다.
      </LeftBubbleEnd>
    </LeftBubbleGroup>
    <RightBubbleGroup>
      <RightBubbleEnd>
        해커톤에 참여는 하고싶은데, 같이 할 사람을 못구하면 어떻게 하면
        좋을까요?
      </RightBubbleEnd>
    </RightBubbleGroup>
    <LeftBubbleGroup>
      <LeftBubble>
        걱정하실 필요 없습니다! 해커톤 신청을 하시면 <b>개발 분야에 맞게</b>{" "}
        팀을 구성해 드립니다. 또한, 개인팀으로도 해커톤 참여가 가능합니다!
      </LeftBubble>
      <LeftBubbleEnd>
        맨투맨과 스티커 등 다양한 참가 사은품과 푸짐한 상품이 준비되어 있으니
        많은 관심 부탁드려요~!{" "}
        <span role="img" aria-label="smile">
          {" "}
          😊
        </span>
      </LeftBubbleEnd>
    </LeftBubbleGroup>
  </BubbleGroup>
)

const BubbleGroup = styled.div`
  display: grid;
  grid-gap: 5px;
  clear: both;
`

const LeftBubbleGroup = styled.div`
  display: grid;
  grid-auto-columns: 400px;
  grid-gap: 5px;
  justify-content: left;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-auto-columns: 250px;
  }
`

const LeftBubble = styled.div`
  padding: 12px;
  background-color: #e7e7e7;
  border-radius: 15px 15px 15px 15px;
`

const LeftBubbleEnd = styled.div`
  padding: 12px;
  background-color: #e7e7e7;
  border-radius: 15px 15px 15px 0;
`

const RightBubbleGroup = styled.div`
  display: grid;
  grid-auto-columns: 400px;
  grid-gap: 5px;
  justify-content: right;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-auto-columns: 250px;
  }
`

const RightBubble = styled.div`
  padding: 12px;
  color: white;
  background-color: #147efb;
  border-radius: 15px 15px 15px 15px;
`

const RightBubbleEnd = styled.div`
  padding: 12px;
  color: white;
  background-color: #147efb;
  border-radius: 15px 15px 0px 15px;
`

export default HackathonQuestionAndAnswer
