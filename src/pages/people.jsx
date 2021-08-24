import React, { useEffect, useState } from "react"
import styled from "styled-components"

import PersonCard from "../components/person-card"

// Priority is sorted in ascending order
const PeoplePage = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/people`, {})
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [])

  return (
    <>
      <Title>People</Title>
      <Layout>
        {people
          .sort((a, b) => a.priority - b.priority)
          .map(person => (
            <PersonCard
              image={`https://avatars.githubusercontent.com/${[person.github]}`}
              name={person.name}
              tags={person.tags.split(",")}
              text={person.text}
              website={person.website}
              githubUsername={person.github}
              badges={person.badge.split(",")}
            />
          ))}
      </Layout>
    </>
  )
}

const Title = styled.h2`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 4rem auto;
  font-size: 1.75em;
  letter-spacing: -0.0375em;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 4rem auto;
`

export default PeoplePage
