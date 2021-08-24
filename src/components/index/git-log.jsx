import React, { useEffect, useState } from "react"
import styled from "styled-components"

const GitLog = () => {
  const [gitData, setGitData] = useState(null)

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/github/event`, {})
      // Parse response JSON
      .then(res => res.json())
      // Reduce 3 commits of 3 latest pushes
      .then(data =>
        data
          .filter(event => event.type === "PushEvent")
          .slice(0, 4)
          .reduce((acc, val) => [...acc, ...val.payload.commits], [])
          .slice(0, 4)
      )
      .then(commits =>
        commits
          .map(
            commit =>
              `commit ${commit.sha}
Author: ${commit.author.name} <${commit.author.email}>

        ${commit.message}
`
          )
          .join("\n\n")
      )
      .then(result => "poapper@postech ~ $ git log HEAD~4..HEAD\n\n" + result)
      .then(result => {
        setGitData(result)
      })
  })

  return <GitLogContainer>{gitData}</GitLogContainer>
}

const GitLogContainer = styled.pre`
  flex: 1 0;
  max-width: 50%;
  margin: 0 0 0 1rem;
  padding: 2rem 1rem 2rem 2rem;
  overflow-x: scroll;
  color: #dddddd;
  font-size: 0.8em;
  background: #000000;
  border-radius: 1rem;

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoint.gitLog}) {
    display: none;
  }
`

export default GitLog
