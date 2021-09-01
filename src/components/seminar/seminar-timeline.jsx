import React, { useState } from "react"
import styled from "styled-components"

import { meetingSeminarList } from "./seminar-list"
import { MeetingSeminarCard } from "./meeting-seminar-card"
import TimelineBar from "./seminar-timeline-bard"

const SeminarTimeline = () => {
  const [yearFilter, setYearFilter] = useState("all")
  const [sortMethod, setSortMethod] = useState("latest")

  return (
    <MeetingSeminar>
      <TimelineBar
        year={yearFilter}
        sort={sortMethod}
        setYear={setYearFilter}
        setSort={setSortMethod}
      />
      {meetingSeminarList
        .filter(seminar =>
          yearFilter === "all" ? true : seminar.year === yearFilter
        )
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
