import React from "react"
import styled from "styled-components"

import { ExternalLinkButton } from "../links"

const ContentCard = ({ name, category, img, description, links }) => (
  <ContentCardContainer>
    <Header>
      <LogoImage src={img} />
      <CoreInfo>
        <Name>{name}</Name>
        <Category>{category}</Category>
      </CoreInfo>
    </Header>
    <DescriptionDiv>
      <Description>{description}</Description>
      <Links>
        {links.map(link => (
          <StyledExternalLinkButton href={link.to} target="_blank">
            {link.text}
          </StyledExternalLinkButton>
        ))}
      </Links>
    </DescriptionDiv>
  </ContentCardContainer>
)

const ContentCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 0 3rem 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column;
  }
`

const LogoImage = styled.img`
  flex: 0 0 50px;
  width: 80px;
  height: 80px;
  border: 1px solid lightgrey;
  border-radius: 30%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
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

const Name = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: 1em;
`

const Category = styled.span``

const DescriptionDiv = styled.div`
  flex: 1 1;
`

const Description = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledExternalLinkButton = styled(ExternalLinkButton)`
  margin: 0 0.25rem 0 0;
`

export default ContentCard
