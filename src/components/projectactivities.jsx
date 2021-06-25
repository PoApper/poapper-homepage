import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from "styled-components"

class Projectactivities extends Component {
  render() {
    return (
      <div>
        <Project>
          <h3>Project</h3>
          <Box id="project1">
            <Logoimage></Logoimage>
            <Nameandcategory>
              <Name>Project one</Name>
              <Category>web app</Category>
            </Nameandcategory>
            <ContentandButton>
              <Content>
                피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서
                열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA
                클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지
                않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.
                하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점
                9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양
                팀 선수 중 가
              </Content>
              <Buttons>
                <Link to="/">
                  <Button>Open</Button>
                </Link>
              </Buttons>
            </ContentandButton>
          </Box>
          <Box id="project2">
            <Logoimage></Logoimage>
            <Nameandcategory>
              <Name>Project two</Name>
              <Category>web</Category>
            </Nameandcategory>
            <ContentandButton>
              <Content>
                피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서
                열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA
                클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지
                않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.
                하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점
                9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양
                팀 선수 중 가
              </Content>
              <Buttons>
                <Link to="/">
                  <Button>Open</Button>
                </Link>
              </Buttons>
            </ContentandButton>
          </Box>
        </Project>

        <Activity>
          <h3>Activity</h3>
          <Box id="activity1">
            <Logoimage></Logoimage>
            <Nameandcategory>
              <Name>Activity one</Name>
              <Category>web app</Category>
            </Nameandcategory>
            <ContentandButton>
              <Content>
                피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서
                열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA
                클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지
                않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.
                하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점
                9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양
                팀 선수 중 가
              </Content>
              <Buttons>
                <Link to="/">
                  <Button>Open</Button>
                </Link>
                <Link to="/seminar">
                  <Button>Github</Button>
                </Link>
              </Buttons>
            </ContentandButton>
          </Box>
          <Box id="activity2">
            <Logoimage></Logoimage>
            <Nameandcategory>
              <Name>Activity two</Name>
              <Category>web</Category>
            </Nameandcategory>
            <ContentandButton>
              <Content>
                피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서
                열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA
                클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지
                않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.
                하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점
                9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양
                팀 선수 중 가
              </Content>
              <Buttons>
                <Link to="/">
                  <Button>Open</Button>
                </Link>
                <Link to="/seminar">
                  <Button>Github</Button>
                </Link>
              </Buttons>
            </ContentandButton>
          </Box>
          <Box id="activity3">
            <Logoimage></Logoimage>
            <Nameandcategory>
              <Name>Activity three</Name>
              <Category>web</Category>
            </Nameandcategory>
            <ContentandButton>
              <Content>
                피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서
                열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA
                클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지
                않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.
                하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점
                9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양
                팀 선수 중 가
              </Content>
              <Button>Open</Button>
            </ContentandButton>
          </Box>
        </Activity>
      </div>
    )
  }
}
export default Projectactivities

const Project = styled.div`
  display: grid;
  margin: 0 auto;
`
const Activity = styled.div`
  display: grid;
  margin: 0 auto;
`
const Box = styled.div`
  display: grid;
  grid-template-columns: 70px 130px auto;
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
const ContentandButton = styled.div`
  display: grid;
  grid-row-gap: 0px;
  grid-template-rows: auto auto;
`
const Content = styled.p`
  display: flex;
  max-width: 700px;
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
