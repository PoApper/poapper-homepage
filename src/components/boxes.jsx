import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Box = ({ name, category, img, description, links }) => (
  <BoxContainer>
    <Header>
      <LogoImage></LogoImage>
      <CoreInfo>
        <Name>{name}</Name>
        <Category>{category}</Category>
      </CoreInfo>
    </Header>
    <DescriptionDiv>
      <Description>{description}</Description>
      <Links>
        {links.map(link => (
          <Link to={link.to}>
            <ButtonLink>{link.text}</ButtonLink>
          </Link>
        ))}
      </Links>
    </DescriptionDiv>
  </BoxContainer>
)

export default Box

const BoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 0 3rem 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column;
  }
`
const LogoImage = styled.div`
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  background: blue;
  border-radius: 30%;
`

const Header = styled.div`
  display: flex;
  flex-basis: 15rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-basis: auto;
    margin: 0.5rem 0;
  }
`

const CoreInfo = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 0.75rem;
`
const Name = styled.div`
  color: #666666;
  font-weight: 800;
`
const Category = styled.div`
  color: #666666;
`
const DescriptionDiv = styled.div`
  flex: 1 1;
`
const Description = styled.p`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 12px;
  }
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
`
const ButtonLink = styled.button`
  width: 70px;
  height: 30px;
  margin: 0 0.1rem;
  color: white;
  font-weight: 600;
  background: black;

  border: none;
  border-radius: 20px;
`
