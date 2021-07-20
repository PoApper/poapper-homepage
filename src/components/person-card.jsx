import React from "react"
import styled from "styled-components"
import { FaHome, FaGithub } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"

const PersonCard = ({
  image,
  name,
  tags,
  text,
  website,
  githubUsername,
  ...props
}) => (
  <Container {...props}>
    <Image image={image} alt={name}></Image>
    <Name>{name}</Name>
    <Tags>
      {tags.map(tag => (
        <Tag>#{tag}</Tag>
      ))}
    </Tags>
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

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
`

const Tag = styled.span`
  margin: 0 0.15rem;
  color: ${({ theme }) => theme.foreground.sub};
  font-size: 0.9em;
`

const Text = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.9em;
  text-align: center;
`

const Links = styled.div`
  margin: auto 0 0 0;
`

const Link = styled.a`
  margin: 0 0.25rem;
  color: ${({ theme }) => theme.foreground.sub};

  &:hover {
    color: ${({ theme }) => theme.foreground.default};
  }
`

export default PersonCard
