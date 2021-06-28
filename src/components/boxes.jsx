import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Box = ({ name, category, img, description, links }) => (
  <BoxContainer>
    <ImageandName>
      <Logoimage></Logoimage>
      <Nameandcategory>
        <Name>{name}</Name>
        <Category>{category}</Category>
      </Nameandcategory>
    </ImageandName>
    <ContentandButton>
      <Content>{description}</Content>
      <Buttons>
        {links.map(link => (
          <Link to={link.to}>
            <Button>{link.text}</Button>
          </Link>
        ))}
      </Buttons>
    </ContentandButton>
  </BoxContainer>
)

export default Box

const BoxContainer = styled.div`
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
