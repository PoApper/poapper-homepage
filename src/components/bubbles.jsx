import React, { useEffect, useRef } from "react"
import {
  forceCollide,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  select,
  selectAll,
} from "d3"
import styled from "styled-components"

const Bubble = ({ radius, fill, cx, cy, ...props }) => (
  <circle r={radius} fill={fill} cx={cx} cy={cy} {...props} />
)

const Bubbles = ({ width, height }) => {
  const w = 800,
    h = 800
  const el = useRef(null)

  const nodes = [...Array(25).keys()].map(() => ({
    radius: Math.floor(Math.random() * 30 + 40),
    x: Math.floor(Math.random() * w),
    y: Math.floor(Math.random() * h),
  }))

  useEffect(() => {
    const bubbles = selectAll(".bubble")
    bubbles.data(nodes).attr("r", d => d.radius)

    bubbles.on("mouseover", function (d, i) {
      i.radius += 30
      select(this).attr("r", d => d.radius)
      simulation.nodes(nodes)
    })

    bubbles.on("mouseout", function (d, i) {
      i.radius -= 30
      select(this).attr("r", d => d.radius)
      simulation.nodes(nodes)
    })

    const simulation = forceSimulation()
      .force(
        "charge",
        forceManyBody().strength(d => d ** 2 * 0.1)
      )
      .force(
        "x",
        forceX()
          .strength(0.05)
          .x(w / 2)
      )
      .force(
        "y",
        forceY()
          .strength(0.05)
          .y(h / 2)
      )
      .force(
        "collision",
        forceCollide().radius(d => d.radius + 2)
      )
      .nodes(nodes)
      .on("tick", () => {
        bubbles.attr("cx", d => d.x).attr("cy", d => d.y)
      })
      .alphaTarget(0.1)
  }, [nodes])

  return (
    <ScaledSvg
      width={w}
      height={h}
      ref={el}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      scaledWidth={width}
      scaledHeight={height}
    >
      {nodes.map(node => (
        <Bubble
          cx={node.x}
          cy={node.y}
          radius={node.radius}
          fill="#999999"
          className="bubble"
        />
      ))}
    </ScaledSvg>
  )
}

const ScaledSvg = styled.svg`
  width: ${props => props.scaledWidth};
  height: ${props => props.scaledHeight};
`

export default Bubbles
