import React from "react"
import styled from "styled-components"

import ContentCard from "./content-card"

const ProjectsAndActivities = () => {
  return (
    <Container>
      <Project>
        <Header>Projects</Header>
        {project_contents.map(content => (
          <ContentCard
            name={content.name}
            category={content.category}
            description={content.description}
            links={content.links}
            img={content.img}
          />
        ))}
      </Project>

      <Project>
        <Header>Activities</Header>
        {activity_contents.map(content => (
          <ContentCard
            name={content.name}
            category={content.category}
            description={content.description}
            links={content.links}
            img={content.img}
          />
        ))}
      </Project>
    </Container>
  )
}

const project_contents = [
  {
    name: "POPO",
    category: "Web",
    description:
      "포포(POPO, POstechian's POrtal)은 포스텍 총학생회의 장비/장소를 예약할 수 있는 편의 서비스입니다. 포스텍 총학생회에서 운영을 포애퍼가 개발 및 유지/보수를 진행하고 있습니다. 학교 공용 시설을 손쉽게 예약하고, 교내 학생단체와 동아리 정보 등을 확인할 수 있습니다.",
    links: [{ to: "https://popo.poapper.com", text: "Open" }],
    img: "https://raw.githubusercontent.com/PoApper/POPO-nest-api/master/assets/popo.svg",
  },
  {
    name: "인포스택",
    category: "Web",
    description:
      "2016년 개발된 인포스택(InPoStack)은 포스텍 인근의 배달 음식점에 대한 정보를 제공하는 서비스 입니다. 학생들은 쉽고 간편하게 음식점에 주문할 수 있고, 점주에게는 월별 주문 리포트를 제공하고 있습니다. 또한, PODAC 서비스와 연계하여 인포스택에 등록된 음식점 위치와 메뉴 정보를 공개 API로 제공하고 있습니다.",
    links: [{ to: "https://inpostack.poapper.com", text: "Open" }],
    img: "https://raw.githubusercontent.com/PoApper/POPO-nest-api/master/assets/popo.svg",
  },
]

const activity_contents = [
  {
    name: "세미나",
    category: "Co-Education",
    description:
      "포애퍼는 정기 세미나와 정모 세미나를 통해 기술을 공유하고 교류하며 성장합니다. 누구나 세미나 열 수 있고, 자유롭게 참가할 수 있습니다. 모든 세미나는 PoApper Archive로 관리되며 자유롭게 열람할 수 있습니다!",
    links: [{ to: "/seminar", text: "Open" }],
    img: "https://source.unsplash.com/random/600x600",
  },
  {
    name: "해커톤",
    category: "Develop Festival",
    description:
      "포애퍼는 매년 봄과 가을에 교내 해커톤을 개최하고 있습니다. 자유롭게 아이디어를 제시하고 개발 및 검증하며 마음껏 창의성을 발휘하는 포애퍼의 🎉Develop Festival🎊입니다. 좋은 아이디어는 포애퍼 법인의 도움을 받아 사업화 하거나, 포애퍼의 후속 프로젝트로 발전시킵니다.",
    links: [{ to: "/hackathon", text: "Open" }],
    img: "https://source.unsplash.com/random/600x600",
  },
]

const Header = styled.h3`
  margin: 3rem 0 2rem 0;
  font-weight: 700;
  font-size: 1.5em;
`

const Project = styled.div`
  margin: 8rem 0;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 6rem auto;
`

export default ProjectsAndActivities
