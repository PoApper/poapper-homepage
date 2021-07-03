import React from "react"
import styled from "styled-components"
import { FaHome, FaGithub } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"

const PersonCard = ({
  image,
  name,
  position,
  text,
  website,
  githubUsername,
  ...props
}) => (
  <Container {...props}>
    <Image image={image} alt={name}></Image>
    <Name>{name}</Name>
    <Position>{position}</Position>
    <Text>{text}</Text>
    <Links>
      <Link href={website}>
        <FaHome size="1.75rem" />
      </Link>
      <Link href={`https://github.com/${githubUsername}`}>
        <FaGithub size="1.75rem" />
      </Link>
    </Links>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem;
  background: ${({ theme }) => theme.background.sub};
  border-radius: 1rem;
`

const Image = styled(GatsbyImage)`
  width: 6rem;
  border-radius: 50%;
`

const Name = styled.h4`
  margin: 1rem 0 0 0;
  font-weight: 700;
  font-size: 1.125em;
`

const Position = styled.span`
  color: ${({ theme }) => theme.foreground.sub};
  font-size: 0.9em;
`

const Text = styled.p`
  margin: 1.75rem 0;
  font-size: 0.9em;
  text-align: center;
`

const Links = styled.div``

const Link = styled.a`
  margin: 0 0.25rem;
  color: ${({ theme }) => theme.foreground.sub};

  &:hover {
    color: ${({ theme }) => theme.foreground.default};
  }
`

export default PersonCard
