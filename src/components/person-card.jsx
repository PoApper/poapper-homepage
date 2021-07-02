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
    <GatsbyImage image={image} alt={name}></GatsbyImage>
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
  background: ${({ theme }) => theme.background.sub};
  border-radius: 1rem;
`

const Image = styled.img``

const Name = styled.h4``

const Position = styled.span``

const Text = styled.p``

const Links = styled.div``

const Link = styled.a``

export default PersonCard
