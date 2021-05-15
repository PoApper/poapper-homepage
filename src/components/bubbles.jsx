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

const BubbleClipPath = ({ r, id, className, ...props }) => (
  <clipPath id={id} pointerEvents="none">
    <circle r={r} className={className} {...props} />
  </clipPath>
)

const Bubbles = ({ width, height }) => {
  const w = 800,
    h = 800,
    hoverScale = 1.2
  const el = useRef(null)

  const nodes = [...Array(25).keys()].map(i => ({
    index: i,
    radius: Math.floor(Math.random() * 30 + 40),
    x: Math.floor(Math.random() * w),
    y: Math.floor(Math.random() * h),
    to: "https://github.com/poapper",
    img: `https://source.unsplash.com/random/200x200/?${i}`,
    imgSize: 200,
  }))

  useEffect(() => {
    const bubbles = selectAll(".bubble")
    bubbles.data(nodes).attr("r", d => d.radius)

    const bubbleImages = selectAll(".bubble-images")
    bubbleImages.data(nodes)

    const tooltip = select("#bubble-tooltip")
    tooltip.data(nodes).style("position", "fixed")

    bubbles.on("mouseover", function (d, i) {
      i.radius *= hoverScale
      select(this)
        .select("clipPath > circle")
        .attr("r", d => d.radius)
      select(this)
        .select("image")
        .attr("width", d => d.imgSize * hoverScale)
        .attr("height", d => d.imgSize * hoverScale)
        .attr("x", d => (-d.imgSize * hoverScale) / 2)
        .attr("y", d => (-d.imgSize * hoverScale) / 2)
      tooltip.html(`Bubble #${i.index}`).style("display", "block")
      simulation.nodes(nodes)
    })

    bubbles.on("mouseout", function (d, i) {
      i.radius /= hoverScale
      select(this)
        .select("clipPath > circle")
        .attr("r", d => d.radius)
      select(this)
        .select("image")
        .attr("width", d => d.imgSize)
        .attr("height", d => d.imgSize)
        .attr("x", d => -d.imgSize / 2)
        .attr("y", d => -d.imgSize / 2)
      tooltip.style("display", "none")
      simulation.nodes(nodes)
    })

    bubbles.on("mousemove", function (d, i) {
      tooltip
        .style("left", `${d.pageX + 10}px`)
        .style("top", `${d.pageY + 10}px`)
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
        bubbles.attr("transform", d => `translate(${d.x}, ${d.y})`)
      })
      .alphaTarget(0.1)
  }, [nodes])

  return (
    <>
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
          <a href={node.to} className="bubble">
            <BubbleClipPath
              r={node.radius}
              id={`bubble-clip-path-${node.index}`}
            />
            <image
              x={-node.imgSize / 2}
              y={-node.imgSize / 2}
              width={node.imgSize}
              height={node.imgSize}
              xlinkHref={node.img}
              clipPath={`url(#bubble-clip-path-${node.index})`}
              className="bubble-image"
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
  display: none;
  padding: 0.8rem;
  font-size: 0.8em;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 7px #00000055;
`

export default Bubbles
