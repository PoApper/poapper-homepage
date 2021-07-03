import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import PersonCard from "../components/person-card"

const people = [
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
  },
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
  },
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
  },
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
  },
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
  },
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
  },
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML enthusiast",
    website: "https://luc.li",
    githubUsername: "rocketll",
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
        {people.map(person => (
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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 4rem auto;
`

export default PeoplePage
