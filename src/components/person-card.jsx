import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub } from "react-icons/fa"

const PersonCard = ({
  image,
  name,
  position,
  text,
  mail,
  github,
  ...props
}) => (
  <Container {...props}>
    <Image src={image} />
    <Name>{name}</Name>
    <Position>{position}</Position>
    <Text>{text}</Text>
    <Links>
      <Link href={`mailto:${mail}`}>
        <FaEnvelope />
      </Link>
      <Link href={github}>
        <FaGithub />
      </Link>
    </Links>
  </Container>
)

const Container = styled.div``

const Image = styled.img``

const Name = styled.h4``

const Position = styled.span``

const Text = styled.p``

const Links = styled.div``

const Link = styled.a``

export default PersonCard
