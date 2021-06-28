import React from "react"
import styled from "styled-components"

import Box from "./boxes"

const ProjectsAndActivities = () => {
  return (
    <div>
      <Project>
        <Header>Project</Header>
        {project_contents.map(content => (
          <Box
            name={content.name}
            category={content.category}
            description={content.description}
            links={content.links}
            img={content.img}
          />
        ))}
      </Project>

      <Project>
        <Header>Activity</Header>
        {activity_contents.map(content => (
          <Box
            name={content.name}
            category={content.category}
            description={content.description}
            links={content.links}
            img={content.img}
          />
        ))}
      </Project>
    </div>
  )
}

const project_contents = [
  {
    name: "project one",
    category: "web app",
    description:
      "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
    links: [{ to: "/", text: "Open" }],
    img: "https://source.unsplash.com/random/600x600",
  },
  {
    name: "project two",
    category: "web",
    description:
      "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
    links: [{ to: "/", text: "Open" }],
    img: "https://source.unsplash.com/random/600x600",
  },
]

const activity_contents = [
  {
    name: "activity one",
    category: "web app",
    description:
      "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
    links: [
      { to: "/seminar", text: "Open" },
      { to: "https://github.com/poapper", text: "GitHub" },
    ],
    img: "https://source.unsplash.com/random/600x600",
  },
  {
    name: "activity two",
    category: "web",
    description:
      "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
    links: [
      { to: "/seminar", text: "Open" },
      { to: "https://github.com/poapper", text: "GitHub" },
    ],
    img: "https://source.unsplash.com/random/600x600",
  },
  {
    name: "activity three",
    category: "web",
    description:
      "피닉스 선즈는 23일(이하 한국시간) 미국 피닉스 선즈 아레나에서 열린 2020-2021시즌 NBA 서부 콘퍼런스 파이널 2차전에서 LA 클리퍼스를 104-103으로 이겼다. 크리스 폴 빈자리가 느껴지지 않았다. 폴은 코로나19 프로토콜로 1차전에 이어 2차전도 빠졌다.하지만 폴 대신 주전 포인트가드로 나온 카메론 페인이 29득점 9어시스트 2스틸 2블록슛으로 맹활약했다. 득점과 어시스트 모두 양팀 선수 중 가",
    links: [{ to: "/", text: "Open" }],
    img: "https://source.unsplash.com/random/600x600",
  },
]

const Header = styled.h3`
  margin: 2rem 0 1rem 0;
  font-weight: 700;
  font-size: 1.5em;
`

const Project = styled.div`
  margin: 1rem 0;
`

export default ProjectsAndActivities
