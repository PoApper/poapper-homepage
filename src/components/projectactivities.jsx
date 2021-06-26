import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from "styled-components"

import Boxes from "./boxes"

class Projectactivities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project_contents: [
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
      ],

      activity_contents: [
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
      ],
    }
  }
  render() {
    return (
      <div>
        <Project>
          <Head>Project</Head>
          <Boxes content={this.state.project_contents}></Boxes>
        </Project>

        <Project>
          <Head>Activity</Head>
          <Boxes content={this.state.activity_contents}></Boxes>
        </Project>
      </div>
    )
  }
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
const Activity = styled.div`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
`
const Box = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  margin-top: 20px;
  margin-left: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-rows: 70px;
    grid-template-columns: auto;
  }
`
const Logoimage = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background: blue;
  border-radius: 30%;
`
const ImageandName = styled.div`
  display: grid;
  grid-template-columns: 70px 130px;
`
const Nameandcategory = styled.div`
  display: grid;
  grid-template-rows: 23px;
  font-size: 16px;
`
const Name = styled.div`
  display: flex;
  height: 10px;
  color: #666666;
  font-weight: 800;
`
const Category = styled.div`
  display: flex;
  height: 10px;
  color: #666666;
`
const ContentandButton = styled.div`
  display: grid;
  grid-row-gap: 0px;
  grid-template-rows: auto auto;
`
const Content = styled.p`
  display: flex;
  max-width: 700px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 12px;
  }
`
const Buttons = styled.div`
  display: grid;
  grid-column-gap: 7px;
  grid-template-columns: 70px 70px;
  height: 30px;
`
const Button = styled.button`
  width: 70px;
  height: 30px;
  color: white;
  font-weight: 600;
  background: black;

  border: none;
  border-radius: 20px;
`
