import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import PersonCard from "../components/people/person-card"

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
      <Helmet lang="en" title="people" />
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
  font-size: 2.75em;
  letter-spacing: -0.05em;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(97.75deg, #1602ff 0%, #ff00a8 25%);
  -webkit-background-clip: text;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 4rem auto;
`

export default PeoplePage
