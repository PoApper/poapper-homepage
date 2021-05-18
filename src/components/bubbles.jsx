import React, { useEffect } from "react"
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
import { graphql, useStaticQuery } from "gatsby"

const BubbleClipPath = ({ r, id, className, ...props }) => (
  <clipPath id={id}>
    <circle r={r} className={className} {...props} />
  </clipPath>
)

const Bubbles = ({ width, height }) => {
  const w = 800,
    h = 800,
    hoverScale = 1.15

  const members = useStaticQuery(graphql`
    query GH {
      github {
        organization(login: "poapper") {
          id
          name
          membersWithRole(first: 30) {
            edges {
              node {
                name
                avatarUrl(size: 200)
                url
                login
              }
            }
          }
        }
      }
    }
  `).github.organization.membersWithRole.edges

  const nodes = members.map(({ node: member }, i) => ({
    index: i,
    radius: Math.floor(Math.random() * 30 + 40),
    x: Math.floor(Math.random() * w),
    y: Math.floor(Math.random() * h),
    to: member.url,
    img: member.avatarUrl,
    imgSize: 200,
    name: member.name ?? member.login,
  }))

  useEffect(() => {
    const bubbles = selectAll(".bubble")
    bubbles.data(nodes)

    const tooltip = select("#bubble-tooltip")
    tooltip.data(nodes).style("position", "fixed")

    bubbles.on("mouseover", function (d, t) {
      t.radius *= hoverScale
      select(this)
        .select("clipPath > circle")
        .attr("r", d => d.radius)
      select(this)
        .select("image")
        .style("width", d => 2 * d.radius)
        .style("height", d => 2 * d.radius)
        .attr("x", d => -d.radius)
        .attr("y", d => -d.radius)
      tooltip.html(t.name).style("display", "block")
      simulation.nodes(nodes)
    })

    bubbles.on("mouseout", function (d, t) {
      t.radius /= hoverScale
      select(this)
        .select("clipPath > circle")
        .attr("r", d => d.radius)
      select(this)
        .select("image")
        .style("width", d => 2 * d.radius)
        .style("height", d => 2 * d.radius)
        .attr("x", d => -d.radius)
        .attr("y", d => -d.radius)
      tooltip.style("display", "none")
      simulation.nodes(nodes)
    })

    bubbles.on("mousemove", function (d, t) {
      tooltip.style(
        "transform",
        `translate(${d.pageX + 10}px, ${d.pageY + 10}px)`
      )
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
        forceCollide().radius(d => d.radius + 3)
      )
      .nodes(nodes)
      .on("tick", () => {
        bubbles.attr("transform", d => `translate(${d.x}, ${d.y})`)
      })
      .alphaTarget(0.1)
  }, [nodes])

  return (
    <>
      <ScaledSvg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMid meet"
        scaledWidth={width}
        scaledHeight={height}
      >
        {nodes.map(node => (
          <a href={node.to} className="bubble">
            <BubbleClipPath
              r={node.radius}
              id={`bubble-clip-path-${node.index}`}
            />
            <image
              x={-node.radius}
              y={-node.radius}
              width={node.imgSize}
              height={node.imgSize}
              xlinkHref={node.img}
              clipPath={`url(#bubble-clip-path-${node.index})`}
              className="bubble-image"
              style={{ width: node.radius * 2, height: node.radius * 2 }}
            />
          </a>
        ))}
      </ScaledSvg>
      <Tooltip id="bubble-tooltip"></Tooltip>
    </>
  )
}

const ScaledSvg = styled.svg`
  width: ${props => props.scaledWidth};
  height: ${props => props.scaledHeight};
`

const Tooltip = styled.div`
  top: 0;
  left: 0;
  display: none;
  padding: 0.8rem;
  font-size: 0.8em;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 7px #00000055;
  will-change: transform;
`

export default Bubbles
