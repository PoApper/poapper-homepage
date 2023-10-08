import React from "react"
import styled, { keyframes } from "styled-components"
import { FaGithub, FaHome } from "react-icons/fa"

import Dartgold from "../../images/badge/Dart_gold.png"
import Dart from "../../images/badge/Dart.png"
import Nestgold from "../../images/badge/Nest_gold.png"
import Nest from "../../images/badge/Nest.png"
import Nodejsgold from "../../images/badge/Nodejs_gold.png"
import Nodejs from "../../images/badge/Nodejs.png"
import Photoshopgold from "../../images/badge/Photoshop_gold.png"
import Photoshop from "../../images/badge/Photoshop.png"
import PoApperpre from "../../images/badge/PoApper_pre.png"
import PoAppervice from "../../images/badge/PoApper_vice.png"
import Reactgold from "../../images/badge/React_gold.png"
import React_ from "../../images/badge/React.png"

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
  const badge_image = props => {
    switch (props) {
      case "Dart_gold":
        return <Badge src={Dartgold} alt={props} />
      case "Dart":
        return <Badge src={Dart} alt={props} />
      case "Nest_gold":
        return <Badge src={Nestgold} alt={props} />
      case "Nest":
        return <Badge src={Nest} alt={props} />
      case "Nodejs_gold":
        return <Badge src={Nodejsgold} alt={props} />
      case "Nodejs":
        return <Badge src={Nodejs} alt={props} />
      case "Photoshop_gold":
        return <Badge src={Photoshopgold} alt={props} />
      case "Photoshop":
        return <Badge src={Photoshop} alt={props} />
      case "PoApper_pre":
        return <Badge src={PoApperpre} alt={props} />
      case "PoApper_vice":
        return <Badge src={PoAppervice} alt={props} />
      case "React_gold":
        return <Badge src={Reactgold} alt={props} />
      case "React":
        return <Badge src={React_} alt={props} />
      default:
        return null
    }
  }
  const badge_hover_text = props => {
    switch (props) {
      case "Dart_gold":
        return "모바일 세미나 멘토"
      case "Dart":
        return "모바일 세미나 수강자"
      case "Nest_gold":
        return "NestJS 세미나 멘토"
      case "Nest":
        return "NestJS 세미나 수강자"
      case "Nodejs_gold":
        return "백엔드 세미나 멘토"
      case "Nodejs":
        return "백엔드 세미나 수강자"
      case "Photoshop_gold":
        return "디자인 세미나 멘토"
      case "Photoshop":
        return "디자인 세미나 수강자"
      case "PoApper_pre":
        return "PoApper 회장"
      case "PoApper_vice":
        return "PoApper 부회장"
      case "React_gold":
        return "프런트 세미나 멘토"
      case "React":
        return "프런트 세미나 수강자"
      default:
        return null
    }
  }
  return (
    <Container {...props}>
      <Image src={image} alt={name} />
      <Badges>
        {(badges ?? []).map(badge => (
          <BadgeWrapper>
            {badge_image(badge)}
            <HoverText>{badge_hover_text(badge)}</HoverText>
          </BadgeWrapper>
        ))}
      </Badges>
      <Name>{name}</Name>
      <Tags>{(tags ?? []).map(tag => (tag ? <Tag>#{tag}</Tag> : null))}</Tags>
      <Text>{text}</Text>
      <Links>
        {website ? (
          <Link href={website} target="_blank">
            <FaHome size="1.75rem" />
          </Link>
        ) : null}
        {githubUsername ? (
          <Link href={`https://github.com/${githubUsername}`} target="_blank">
            <FaGithub size="1.75rem" />
          </Link>
        ) : null}
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
  height: 1.5rem;
  margin-top: 16px;
`

const BadgeWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 0.15rem;
`
const Hover = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const Badge = styled.img`
  width: 1.3rem;
  height: 1.3rem;
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

const HoverText = styled.div`
  position: absolute;
  bottom: 90%;
  left: 50%;
  display: none;

  flex-wrap: wrap;
  min-width: 70px;

  padding: 3px 7px;
  color: white;
  font-size: 12px;
  text-align: center;
  word-break: keep-all;
  background-color: rgba(80, 80, 80, 0.8);
  border-radius: 0.7rem;
`

const Name = styled.h4`
  margin: 4px 0 0 0;
  font-weight: 700;
  font-size: 1.125em;
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 1.8rem;
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
