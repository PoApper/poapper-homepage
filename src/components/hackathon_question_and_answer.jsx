import React from "react"
import styled from "styled-components"

const HackathonQuestionAndAnswer = () => (
  <BubbleGroup>
    <RightBubbleGroup>
      <RightBubbleEnd>해커톤은 어떻게 진행되나요?</RightBubbleEnd>
    </RightBubbleGroup>
    <LeftBubbleGroup>
      <LeftBubble>
        봄에는 포애퍼 내부에서 진행하며, 비대면 상황에서는{" "}
        <b>주어진 주제에 맞춰 일주일</b>동안 개발을 진행하여 그 결과를 발표하는
        시간을 가집니다.
      </LeftBubble>
      <LeftBubbleEnd>
        가을 해커톤은 외부 해커톤으로 포스텍 학우 전체를 대상으로,{" "}
        <b>이틀동안</b> 아이디어를 구상하고 구현하여 발표하는 일정으로
        진행됩니다.
      </LeftBubbleEnd>
    </LeftBubbleGroup>
    <RightBubbleGroup>
      <RightBubbleEnd>
        해커톤에 참여는 하고싶은데 같이 할 사람을 못구하면 어떻게 하면 좋을까요?
      </RightBubbleEnd>
    </RightBubbleGroup>
    <LeftBubbleGroup>
      <LeftBubbleEnd>
        걱정하실 필요 없습니다! 해커톤 신청을 하시면 <b>개발 분야에 맞게</b>{" "}
        팀을 구성해 드립니다. 또한, 개인팀으로도 해커톤 참여가 가능합니다!
      </LeftBubbleEnd>
    </LeftBubbleGroup>
  </BubbleGroup>
)

const BubbleGroup = styled.div`
  display: grid;
  grid-gap: 5px;
`

const LeftBubbleGroup = styled.div`
  display: grid;
  grid-auto-columns: 400px;
  grid-gap: 5px;
  justify-content: left;
`

const LeftBubble = styled.div`
  padding: 12px;
  background-color: #e7e7e7;
  border-radius: 15px 15px 15px 15px;
`

const LeftBubbleEnd = styled.div`
  padding: 12px;
  background-color: #e7e7e7;
  border-radius: 15px 15px 15px 0px;
`

const RightBubbleGroup = styled.div`
  display: grid;
  grid-auto-columns: 400px;
  grid-gap: 5px;
  justify-content: right;
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
