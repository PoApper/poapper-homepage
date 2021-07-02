import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"

const PersonCard = ({
  image,
  name,
  position,
  text,
  mail,
  githubUsername,
  ...props
}) => (
  <Container {...props}>
    <Image image={image} alt={name}></Image>
    <Name>{name}</Name>
    <Position>{position}</Position>
    <Text>{text}</Text>
    <Links>
      <Link href={`mailto:${mail}`}>
        <FaEnvelope />
      </Link>
      <Link href={`https://github.com/${githubUsername}`}>
        <FaGithub />
      </Link>
    </Links>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.background.sub};
  border-radius: 1rem;
`

const Image = styled(GatsbyImage)`
  width: 6rem;
  border-radius: 50%;
`

const Name = styled.h4``

const Position = styled.span``

const Text = styled.p``

const Links = styled.div``

const Link = styled.a``

export default PersonCard
