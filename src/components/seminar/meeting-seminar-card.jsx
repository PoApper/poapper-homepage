import React from "react"
import styled from "styled-components"
import { FiDownload } from "react-icons/fi"

export const MeetingSeminarCard = ({
  cardTitle,
  date,
  datePriority,
  author,
  githubId,
  cardDetailedText,
  ...props
}) => (
  <SeminarCard {...props}>
    <Head>
      <Title>{cardTitle}</Title>
      <FiDownload size="1rem" />
    </Head>

    <Info>
      <Date>{date}</Date>|
      <Presenter>
        {author}{" "}
        <Link href={`https://github.com/${githubId}`} target="_blank">
          (@{githubId})
        </Link>
      </Presenter>
    </Info>

    <Content>{cardDetailedText}</Content>
    <hr className="hrcss" />
  </SeminarCard>
)

const SeminarCard = styled.div`
  margin: 1.5rem 1rem 0 1rem;
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h3`
  margin: 0 0.8rem 0 0;
`
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  font-size: 0.9rem;
`

const Date = styled.div`
  margin-right: 0.3rem;
`

const Presenter = styled.div`
  margin-left: 0.3rem;
  color: black;
  text-decoration: none;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const Content = styled.div`
  margin: 0 0 1.5rem 0;
  color: #969696;
  font-size: 0.9rem;
`
