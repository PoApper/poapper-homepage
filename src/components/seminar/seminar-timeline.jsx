import React, { useState } from "react"
import styled from "styled-components"
import { getRegExp } from "korean-regexp"

import { meetingSeminarList } from "./seminar-list"
import { MeetingSeminarCard } from "./meeting-seminar-card"
import TimelineBar from "./seminar-timeline-bard"

const SeminarTimeline = () => {
  const [yearFilter, setYearFilter] = useState("all")
  const [sortMethod, setSortMethod] = useState("latest")
  const [searchQuery, setSearchQuery] = useState("")

  const queryRegExp = getRegExp(searchQuery, {
    initialSearch: true,
    ignoreSpace: true,
    ignoreCase: true,
  })

  return (
    <MeetingSeminar>
      <TimelineBar
        year={yearFilter}
        sort={sortMethod}
        searchQuery={searchQuery}
        setYear={setYearFilter}
        setSort={setSortMethod}
        setSearchQuery={setSearchQuery}
      />
      {meetingSeminarList
        .filter(seminar =>
          yearFilter === "all" ? true : seminar.year === yearFilter
        )
        .filter(seminar => seminar.cardTitle.match(queryRegExp))
        .sort((a, b) => {
          switch (sortMethod) {
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

const MeetingSeminar = styled.div`
  margin: 1.3rem 0;
`

export default SeminarTimeline
