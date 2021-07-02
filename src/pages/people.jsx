import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"

import PersonCard from "../components/person-card"

const people = [
  {
    name: "이윤규",
    position: "Developer",
    text: "Web developer, SciML research",
    mail: "me@luc.li",
    githubUsername: "https://github.com/rocketll",
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

  return people.map(person => (
    <PersonCard
      image={getImage(
        data.allFile.nodes.find(node => node.name === person.name)
      )}
      name={person.name}
      position={person.position}
      text={person.text}
      mail={person.mail}
      githubUsername={person.githubUsername}
    />
  ))
}

export default PeoplePage
