import React from "react"
import styled, { keyframes } from "styled-components"
import { FaGithub, FaHome } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const PersonCard = ({
  image,
  name,
  tags,
  text,
  website,
  githubUsername,
  badges,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "badge" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
          name
        }
      }
    }
  `)

  return (
    <Container {...props}>
      <Image src={image} alt={name} />
      <Badges>
        {badges.map(badge => (
          <Badge_wrapper>
            <Badge
              image={getImage(
                data.allFile.nodes.find(node => node.name === badge)
              )}
            ></Badge>
            {badge == "Dart_gold" ? (
              <Hover_Text>모바일 세미나 멘토</Hover_Text>
            ) : badge == "Dart" ? (
              <Hover_Text>모바일 세미나 수강자</Hover_Text>
            ) : badge == "Nest_gold" ? (
              <Hover_Text>NestJS 세미나 멘토</Hover_Text>
            ) : badge == "Nest" ? (
              <Hover_Text>NestJS 세미나 수강자</Hover_Text>
            ) : badge == "Nodejs_gold" ? (
              <Hover_Text>백엔드 세미나 멘토</Hover_Text>
            ) : badge == "Nodejs" ? (
              <Hover_Text>백엔드 세미나 수강자</Hover_Text>
            ) : badge == "Photoshop_gold" ? (
              <Hover_Text>디자인 세미나 멘토</Hover_Text>
            ) : badge == "Photoshop" ? (
              <Hover_Text>디자인 세미나 수강자</Hover_Text>
            ) : badge == "PoApper_pre" ? (
              <Hover_Text>PoApper 회장</Hover_Text>
            ) : badge == "PoApper_vice" ? (
              <Hover_Text>PoApper 부회장</Hover_Text>
            ) : badge == "React_gold" ? (
              <Hover_Text>프런트 세미나 멘토</Hover_Text>
            ) : badge == "React" ? (
              <Hover_Text>프런트 세미나 수강자</Hover_Text>
            ) : null}
          </Badge_wrapper>
        ))}
      </Badges>
      <Name>{name}</Name>
      <Tags>{tags.map(tag => (tag ? <Tag>#{tag}</Tag> : null))}</Tags>
      <Text>{text}</Text>
      <Links>
        {website ? (
          <Link href={website}>
            <FaHome size="1.75rem" />
          </Link>
        ) : null}

        <Link href={`https://github.com/${githubUsername}`}>
          <FaGithub size="1.75rem" />
        </Link>
      </Links>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem;
  background: ${({ theme }) => theme.background.sub};
  border-radius: 1rem;
`
const Image = styled.img`
  width: 6rem;
  border-radius: 50%;
`
const Badges = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const Badge_wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0rem 0.15rem;
`
const Hover = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const Badge = styled(GatsbyImage)`
  width: 1.15rem;
  object-fit: contain;
  &:hover {
    & + div {
      display: inline-block;
      animation-name: ${Hover};

      animation-duration: 0.25s;
      animation-timing-function: ease-out;
    }
  }
`

const Hover_Text = styled.div`
  position: absolute;
  bottom: 90%;
  left: 50%;
  display: none;

  flex-wrap: wrap;
  min-width: 70px;
  word-break: keep-all;

  padding: 3px 7px;
  color: white;
  font-size: 12px;
  text-align: center;
  background-color: gray;
  border-radius: 0.7rem;
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
