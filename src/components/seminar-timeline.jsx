import React, { Component } from "react"
import styled from "styled-components"
import { FiDownload } from "react-icons/fi"
import { AiOutlineSearch } from "react-icons/ai"
import { GoChevronDown } from "react-icons/go"

import { meetingSeminarList } from "./seminar-list"

const MeetingSeminarCard = props => (
  <SeminarCard>
    <Head>
      <Title>{props.seminar.cardTitle}</Title>
      <FiDownload size="1rem" />
    </Head>

    <Info>
      <Date>{props.seminar.title}</Date>|
      <Presenter>{props.seminar.cardSubtitle}</Presenter>
    </Info>

    <Content>{props.seminar.cardDetailedText}</Content>
  </SeminarCard>
)

const SeminarTimeline = () => (
  <MeetingSeminar>
    <Tool>
      <Year>
        2021 &nbsp;
        <GoChevronDown />
      </Year>
      <Search>
        | &nbsp;
        <AiOutlineSearch />
      </Search>
      <Sort>
        날짜 오름차순 &nbsp;
        <GoChevronDown />
      </Sort>
    </Tool>
    <MeetingSeminarCard seminar={meetingSeminarList[0]} />
    <hr class="hrcss"></hr>
    <MeetingSeminarCard seminar={meetingSeminarList[1]} />
    <hr class="hrcss"></hr>
    <MeetingSeminarCard seminar={meetingSeminarList[2]} />
    <hr class="hrcss"></hr>
    <MeetingSeminarCard seminar={meetingSeminarList[3]} />
  </MeetingSeminar>
)

const Tool = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;
`

const Year = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 1rem;
  padding: 0.3rem 0.6rem;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
`

const Search = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 12rem;
  margin-right: 1rem;
  padding: 0.3rem 0.6rem;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
`

const Sort = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0.25rem 0.6rem;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
`

const MeetingSeminar = styled.div`
  margin: 1.3rem 0;
`

const SeminarCard = styled.div`
  margin: 1.5rem 1rem;
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h3`
  margin: 0;
  margin-right: 0.8rem;
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
`

const Content = styled.div`
  margin: 0;
  color: #969696;
  font-size: 0.9rem;
`

export default SeminarTimeline
