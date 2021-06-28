import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Boxes = props => {
  var list = []
  var contents = props.content
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
export default Boxes

const Box = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column;
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
  display: flex;
  margin: 0.5rem 0;
`

const Nameandcategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.75rem;
`
const Name = styled.div`
  color: #666666;
  font-weight: 800;
`
const Category = styled.div`
  color: #666666;
`
const ContentandButton = styled.div``
const Content = styled.p`
  display: flex;
  max-width: 700px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 12px;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`
const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 0 0.1rem;
  color: white;
  font-weight: 600;
  background: black;

  border: none;
  border-radius: 20px;
`
