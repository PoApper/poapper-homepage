import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import PersonCard from "../components/person-card"

// Priority is sorted in ascending order
const people = [
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
    priority: 39,
  },
  {
    name: "하석윤",
    position: "Developer",
    text: "Some guy",
    website: "https://google.com",
    githubUsername: "BlueHorn07",
    priority: 321,
  },
  {
    name: "유병호",
    position: "Developer",
    text: "Placeholder text",
    website: "https://google.com",
    githubUsername: "4-Rem",
    priority: 2391,
  },
  {
    name: "최정원",
    position: "Developer",
    text: "Blah blah blah",
    website: "https://google.com",
    githubUsername: "jjeongone",
    priority: 41,
  },
  {
    name: "노연서",
    position: "Developer",
    text: "Lorem ipsum",
    website: "https://google.com",
    githubUsername: "Yeonseo0419",
    priority: 2015,
  },
]

const PeoplePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "people" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
          name
        }
      }
    }
  `)

  return (
    <>
      <Title>People</Title>
      <Layout>
        {people
          .sort((a, b) => a.priority - b.priority)
          .map(person => (
            <PersonCard
              image={getImage(
                data.allFile.nodes.find(node => node.name === person.name)
              )}
              name={person.name}
              position={person.position}
              text={person.text}
              website={person.website}
              githubUsername={person.githubUsername}
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
