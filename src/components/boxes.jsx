import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from "styled-components"

class Boxes extends Component {
  render() {
    var list = []
    var contents = this.props.content
    var i = 0
    while (i < contents.length) {
      console.log(contents[i].button)
      if (contents[i].button === "1") {
        list.push(
          <Box>
            <ImageandName>
              <Logoimage></Logoimage>
              <Nameandcategory>
                <Name>{contents[i].name}</Name>
                <Category>{contents[i].category}</Category>
              </Nameandcategory>
            </ImageandName>
            <ContentandButton>
              <Content>{contents[i].text}</Content>
              <Buttons>
                <Link to={contents[i].link1}>
                  <Button>Open</Button>
                </Link>
              </Buttons>
            </ContentandButton>
          </Box>
        )
      } else if (contents[i].button === "2") {
        list.push(
          <Box>
            <ImageandName>
              <Logoimage></Logoimage>
              <Nameandcategory>
                <Name>{contents[i].name}</Name>
                <Category>{contents[i].category}</Category>
              </Nameandcategory>
            </ImageandName>
            <ContentandButton>
              <Content>{contents[i].text}</Content>
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
        )
      }

      i = i + 1
    }

    return <div>{list}</div>
  }
}
export default Boxes

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
