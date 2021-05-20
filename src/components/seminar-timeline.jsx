import React, { Component } from "react"
import { Chrono } from "react-chrono"

import { meetingSeminarList } from "./seminar-list"

class SeminarTimeline extends Component {
  render() {
    return (
      <div>
        <Chrono
          items={meetingSeminarList}
          mode="VERTICAL"
          hideControls={true}
          useReadMore={false}
          cardHeight={100}
        />
      </div>
    )
  }
}

export default SeminarTimeline
