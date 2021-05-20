import React, { Component } from "react"
import { Card, Grid, Image } from "semantic-ui-react"

import { regularSeminarList } from "./seminar-list"

class SeminarCardGrid extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row centered columns={3}>
          {regularSeminarList.slice(0, 2).map(seminar => {
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
          {regularSeminarList.slice(2, 6).map(seminar => {
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
    )
  }
}

export default SeminarCardGrid
