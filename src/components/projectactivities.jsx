import React, { useState } from "react"
import styled from "styled-components"

import Boxes from "./boxes"

const Projectactivities = () => {
  const [project_contents, _setProject] = useState([
    {
      name: "project one",
      category: "web app",
      text: "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
      button: "1",
      link1: "/",
    },
    {
      name: "project two",
      category: "web",
      text: "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
      button: "1",
      link1: "/",
    },
  ])

  const [activity_contents, _setActivitiy] = useState([
    {
      name: "activity one",
      category: "web app",
      text: "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
      button: "2",
      link1: "/",
      link2: "/seminar",
    },
    {
      name: "activity two",
      category: "web",
      text: "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
      button: "2",
      link1: "/",
      link2: "/seminar",
    },
    {
      name: "activity three",
      category: "web",
      text: "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
      button: "1",
      link1: "/",
    },
  ])

  return (
    <div>
      <Project>
        <Head>Project</Head>
        <Boxes content={project_contents}></Boxes>
      </Project>

      <Project>
        <Head>Activity</Head>
        <Boxes content={activity_contents}></Boxes>
      </Project>
    </div>
  )
}
export default Projectactivities

const Head = styled.div`
  font-weight: 600;
  font-size: 22px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    text-align: center;
  }
`
const Project = styled.div`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
`
