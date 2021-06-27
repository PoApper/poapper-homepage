import React from "react"
import styled from "styled-components"

import { regularSeminarList } from "./seminar-list"

const RegularSeminarCard = props => (
  <SeminarCard>
    <Title>{props.seminar.name}</Title>
    <SubTitle>{props.seminar.meta}</SubTitle>
    <LogoList>
      <Logo>
        <img style={{ width: "100%" }} src={props.seminar.images[0]} alt="" />
      </Logo>
      <Logo>
        <img style={{ width: "100%" }} src={props.seminar.images[1]} alt="" />
      </Logo>
      <Logo>
        <img style={{ width: "100%" }} src={props.seminar.images[2]} alt="" />
      </Logo>
    </LogoList>
  </SeminarCard>
)

const SeminarCardGrid = () => (
  <RegularSeminar>
    <RegularSeminarCard seminar={regularSeminarList[0]} />
    <RegularSeminarCard seminar={regularSeminarList[1]} />
    <RegularSeminarCard seminar={regularSeminarList[2]} />
    <RegularSeminarCard seminar={regularSeminarList[3]} />
    <RegularSeminarCard seminar={regularSeminarList[4]} />
  </RegularSeminar>
)

const RegularSeminar = styled.div`
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 18px;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px;
`

const SeminarCard = styled.div`
  padding: 15px 20px;
  border: 1.5px solid lightgrey;
  border-radius: 20px;
  box-shadow: 3px 3px 3px lightslategrey;
`

const Title = styled.h3`
  margin: 0;
`

const LogoList = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-around;
`

const Logo = styled.div`
  flex-shrink: 1;
  justify-content: center;
  width: 70%;
  padding: 8px;
`

const SubTitle = styled.h4`
  margin: 0;
  color: grey;
`

export default SeminarCardGrid
