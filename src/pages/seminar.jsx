// ES6 import syntax
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import "semantic-ui-css/semantic.min.css"
import { Card, Divider, Grid, Image, Item } from "semantic-ui-react"

import CSS_logo from "../images/seminar/css.png"
import HTML_logo from "../images/seminar/html.png"
import REACT_logo from "../images/seminar/react.png"
import EXPRESS_logo from "../images/seminar/express.png"
import NODEJS_logo from "../images/seminar/nodejs.png"
import MYSQL_logo from "../images/seminar/mysql.png"
import SeminarTimeline from "../components/seminar-timeline"

// TODO: export to seminar-list.js file
const regular_seminars = [
  {
    name: "FrontEnd Seminar",
    meta: "PoApper/frontEnd-seminar",
    images: [CSS_logo, HTML_logo, REACT_logo],
  },
  {
    name: "BackEnd Seminar",
    meta: "PoApper/backEnd-seminar",
    images: [NODEJS_logo, EXPRESS_logo, MYSQL_logo],
  },
  {
    name: "Mobile Seminar",
    meta: "PoApper/frontEnd-seminar",
    images: [],
  },
  {
    name: "Design Seminar",
    meta: "PoApper/frontEnd-seminar",
    images: [],
  },
  {
    name: "NestJS Seminar",
    meta: "PoApper/frontEnd-seminar",
    images: [],
  },
]

// Uses React functional components
const SeminarPage = () => (
  <>
    {/* <head> management by react-helmet */}
    <Helmet lang="en" title="seminar" />
    <Title>Seminar</Title>
    <p>
      포애퍼는 정기 세미나와 정모 세미나를 통해 최신 기술을 공유하고 있습니다
    </p>

    <h2>정기 세미나</h2>

    <Grid centered>
      <Grid.Row centered columns={3}>
        {regular_seminars.slice(0, 2).map(seminar => {
          return (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{seminar.name}</Card.Header>
                  <Card.Meta>{seminar.meta}</Card.Meta>
                  <Card.Description>
                    <Image.Group size="tiny">
                      {seminar.images.map(image => {
                        return <Image src={image} />
                      })}
                    </Image.Group>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid.Row>
      <Grid.Row centered columns={3}>
        {regular_seminars.slice(2, 6).map(seminar => {
          return (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{seminar.name}</Card.Header>
                  <Card.Meta>{seminar.meta}</Card.Meta>
                  <Card.Description>
                    <Image.Group size="tiny">
                      {seminar.images.map(image => {
                        return <Image src={""} />
                      })}
                    </Image.Group>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>

    <Divider />

    <h2>정모 세미나</h2>

    <div>태그 넣을 자리</div>

    <div style={{ margin: "20px 0" }}>
      <SeminarTimeline />
    </div>
  </>
)

// Example of CSS-in-JS by styled-components
const Title = styled.h1`
  margin: 0;
`

export default SeminarPage
