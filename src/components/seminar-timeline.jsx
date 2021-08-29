import React, { useState } from "react"
import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"
import Select from "react-select"

import { meetingSeminarList } from "./seminar-list"
import { MeetingSeminarCard } from "./meeting-seminar-card"

const SeminarTimeline = () => {
  const [year, setYear] = useState("all")
  const [sort, setSort] = useState("latest")

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
        .sort((a, b) => {
          switch (sort) {
            case "latest":
              return b.datePriority - a.datePriority
            case "oldest":
              return a.datePriority - b.datePriority
            case "alphabetical":
              return a.cardTitle.localeCompare(b.cardTitle)
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
  { value: "latest", label: "최신순" },
  { value: "oldest", label: "오래된순" },
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

export default SeminarTimeline
