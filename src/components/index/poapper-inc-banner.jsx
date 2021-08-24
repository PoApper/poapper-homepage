import React from "react"
import styled from "styled-components"

import PoApperIncLogo from "../../images/poapper-inc-logo.svg"

const PoApperIncBanner = () => {
  return (
    <Container>
      <BannerWrapper>
        <div>
          <a href="https://poapper.com">
            <Icon src={PoApperIncLogo} alt="icon" />
          </a>
        </div>
        <DescTitle>2020년 9월, 법인 포애퍼 설립</DescTitle>
        <DescText>
          동아리 포애퍼에서 출발한 포애퍼 법인은
          <br />
          동아리 외주, 프로젝트 사업화 측면에서 협력하고 있습니다.
        </DescText>
      </BannerWrapper>
    </Container>
  )
}

export default PoApperIncBanner

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 1rem auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column-reverse;
  }
`

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 13rem;
  background: linear-gradient(30deg, #dc96ff, #fc9656);
  border-radius: 1rem;
`

const Icon = styled.img`
  flex: 0 0;
  width: 10rem;
  height: 3.5rem;
`

const DescTitle = styled.h3`
  margin: 0;
  color: #050f2c;
  font-size: 1.4rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 1.2rem;
  }
`

const DescText = styled.p`
  text-align: center;
`
