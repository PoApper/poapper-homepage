import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from "styled-components"
class Projectactivities extends Component {
  render() {
    return (
      <Project>
        Project
        <Box id="project1">
          <Logoimage></Logoimage>
          <Nameandcategory>
            <Name>Project one</Name>
            <Category>web app</Category>
          </Nameandcategory>
          <Content>
            피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린
            2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를
            104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은
            코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다. 하지만 폴 대신 주전
            포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로
            맹활약했다. 득점과 어시스트 모두 양 팀 선수 중 가
          </Content>
        </Box>
        <Box id="project2">
          <Logoimage></Logoimage>
          <Nameandcategory>
            <Name>Project two</Name>
            <Category>web</Category>
          </Nameandcategory>
          <Content>
            피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린
            2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를
            104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은
            코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다. 하지만 폴 대신 주전
            포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로
            맹활약했다. 득점과 어시스트 모두 양 팀 선수 중 가
          </Content>
        </Box>
      </Project>
    )
  }
}
export default Projectactivities

const Project = styled.div`
  display: grid;
  width: 960px;
  margin: 0 auto;
`
const Box = styled.div`
  display: grid;
  grid-template-columns: 70px auto auto;
  height: 150px;
  margin-top: 20px;
  margin-left: 10px;
`

const Logoimage = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background: blue;
  border-radius: 30%;
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

const Content = styled.div`
  display: flex;
  width: 700px;
  height: 250px;
`
