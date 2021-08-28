import React, { useState } from "react"
import styled from "styled-components"
import { FiDownload } from "react-icons/fi"
import { AiOutlineSearch } from "react-icons/ai"
import Select from "react-select"

import { meetingSeminarList } from "./seminar-list"

const MeetingSeminarCard = ({
  cardTitle,
  date,
  datepriority,
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
        <Link href={`https://github.com/${githubId}`}>(@{githubId})</Link>
      </Presenter>
    </Info>

    <Content>{cardDetailedText}</Content>
    <hr className="hrcss" />
  </SeminarCard>
)

const SeminarTimeline = () => {
  const [year, setYear] = useState("all")
  const [sort, setSort] = useState("dateAscending")

  return (
    <MeetingSeminar>
      <Tool>
        <Year>
          <div style={{ width: "110px" }}>
            <Select
              options={YearOptions}
              isSearchable={false}
              defaultValue={YearOptions[0]}
              styles={CustomStyles}
              onChange={({ value, label }) => {
                console.log(year, value)
                setYear(value)
              }}
            />
          </div>
        </Year>
        <Search>
          <SearchInput />
          &nbsp; | &nbsp;
          <AiOutlineSearch />
        </Search>
          <div style={{ width: "140px" }}>
            <Select
              options={SortOptions}
              isSearchable={false}
              defaultValue={SortOptions[0]}
              styles={CustomStyles}
              onChange={({ value, label }) => {
                console.log(sort, value)
                setSort(value)
              }}
            />
          </div>
       </Tool>
      {meetingSeminarList
        .filter(seminar => (year === "all" ? true : seminar.year === year))
        .sort(seminar => {
          switch(sort){
            case "dateAscending":
              meetingSeminarList.sort((a,b) => b.datepriority - a.datepriority)
              seminar.sort === sort;
              break;
            case "dateDescending":
              meetingSeminarList.sort((a,b) => a.datepriority - b.datepriority)
              seminar.sort === sort;
              break;
            case "alphabetical":
              meetingSeminarList.sort(function(a,b) {
                return a.cardTitle < b.cardTitle ? -1 : a.cardTitle > b.cardTitle ? 1: 0;
              })
              seminar.sort === sort;
              break;
            default:
              null;
          }
        })
        .map(seminar => (
          <MeetingSeminarCard
            cardTitle={seminar.cardTitle}
            date={seminar.date}
            author={seminar.author}
            githubId={seminar.githubId}
            cardDetailedText={seminar.cardDetailedText}
          />
        ))}
    </MeetingSeminar>
  )
}

const YearOptions = [
  { value: "all", label: "전체 년도" },
  { value: 2021, label: "2021" },
  { value: 2020, label: "2020" },
]

const SortOptions = [
  { value: "dateAscending", label: "날짜 오름차순" },
  { value: "dateDescending", label: "날짜 내림차순" },
  { value: "alphabetical", label: "ABC순" },
]

const CustomStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    border: "1.5px solid lightgrey",
    borderRadius: "5px",
    minHeight: 33.67,
    height: 33.67,
    boxShadow: "none",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),

  indicatorSeparator: state => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0",
  }),
  menu: (provided, state) => ({
    ...provided,
    border: "1.5px solid lightgrey",
    borderRadius: "5px",
    boxShadow: "none",
  }),
}

const Tool = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;
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
  height: 20.667px;
  border: none;
`

const MeetingSeminar = styled.div`
  margin: 1.3rem 0;
`

const SeminarCard = styled.div`
  margin: 1.5rem 1rem 0rem 1rem;
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

export default SeminarTimeline
