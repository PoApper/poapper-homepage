import React from "react"
import styled from "styled-components"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

import { ExternalLink } from "./links"

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          facebook
          github
          mail
        }
      }
    }
  `)

  return (
    <FooterElement>
      <Container>
        <div>
          <Addr>포항시 남구 청암로 77 학생회관 211호</Addr>
          <ExternalLink href={`mailto:${siteMetadata.mail}`}>
            {siteMetadata.mail}
          </ExternalLink>
        </div>
        <IconLinks>
          <IconLink href={siteMetadata.github}>
            <FaGithub size="2rem" />
          </IconLink>
          <IconLink href={siteMetadata.facebook}>
            <FaFacebook size="2rem" />
          </IconLink>
        </IconLinks>
      </Container>
      <span>© 2021 PoApper</span>
    </FooterElement>
  )
}

const IconLink = styled.a`
  margin: 0 0.25rem 0 0;
  color: ${({ theme }) => theme.foreground.sub};
`

const FooterElement = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.foreground.sub};
  border-bottom: 1px solid #eeeeee;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 1rem auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column-reverse;
  }
`

const Addr = styled.address`
  font-style: normal;
`

const IconLinks = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 1rem 0;
  }
`

export default Footer
