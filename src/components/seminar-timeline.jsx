import React from "react"
import styled from "styled-components"
import { FiDownload } from "react-icons/fi"
import { AiOutlineSearch } from "react-icons/ai"
import Select from 'react-select'

import { meetingSeminarList } from "./seminar-list"

const MeetingSeminarCard = props => (
  <SeminarCard>
    <Head>
      <Title>{props.seminar.cardTitle}</Title>
      <FiDownload size="1rem" />
    </Head>

    <Info>
      <Date>{props.seminar.title}</Date>|
      <Presenter>{props.seminar.author} <Link href={props.seminar.author_github}>(@{props.seminar.github_id})</Link></Presenter>
    </Info>

    <Content>{props.seminar.cardDetailedText}</Content>
  </SeminarCard>
)

const SeminarTimeline = () => (
  <MeetingSeminar>
    <Tool>
      <Year>
        <DropdownYear/>
      </Year>
      <Search>
        <SearchInput />
        &nbsp; | &nbsp;
        <AiOutlineSearch />
      </Search>
        <DropdownSort />
    </Tool>
    <MeetingSeminarCard seminar={meetingSeminarList[0]} />
    <hr className="hrcss" />
    <MeetingSeminarCard seminar={meetingSeminarList[1]} />
    <hr className="hrcss" />
    <MeetingSeminarCard seminar={meetingSeminarList[2]} />
    <hr className="hrcss" />
    <MeetingSeminarCard seminar={meetingSeminarList[3]} />
  </MeetingSeminar>
)

const yearoptions = [
  { value: 'every history', label: '전체 년도' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' }
]

const DropdownYear = () => (
  <div style={{width:'120px'}}>
    <Select 
      options={yearoptions}
      isSearchable={false}
      defaultValue={yearoptions[0]}
    />
  </div>
)

const sortoptions = [
  { value: 'date ascending', label: '날짜 오름차순' },
  { value: 'date descending', label: '날짜 내림차순' },
  { value: 'alphabetical', label: 'ABC순' }
]

const DropdownSort = () => (
  <div style={{width:'160px'}}>
  <Select 
    options={sortoptions}
    isSearchable={false}
    defaultValue={sortoptions[0]}/>
  </div>
)

const Tool = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;    
  }
`
const Year = styled.div`
 margin: 0 1rem 0 0;
`

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 14rem;
  margin: 5px 1rem 5px 0;
  padding: 0.25rem 0.6rem;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  height: 20.667px
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
  margin: 0;
  color: #969696;
  font-size: 0.9rem;
`

export default SeminarTimeline
