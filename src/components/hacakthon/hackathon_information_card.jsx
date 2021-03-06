import React from "react"
import styled from "styled-components"

import hackathon_spring from "../../images/hackathon/HackathonSpring.png"
import hackathon_fall from "../../images/hackathon/HackathonFall.png"
import { ExternalLinkButton } from "../links"

const HackathonCardGrid = () => (
  <HackathonInformation>
    <HackathonCard>
      <HackathonSpringImageCard />
      <HackathonTextCard>
        <HackathonCardTitle>
          <span role="img" aria-label="flower">
            πΈ{" "}
          </span>
          λ΄: λ΄λΆ ν΄μ»€ν€
          <span role="img" aria-label="flower">
            {" "}
            πΈ
          </span>
        </HackathonCardTitle>
        <HackathonCardBody>
          ν¬μ νΌ λ΄λΆμμ μ§ννλ ν΄μ»€ν€μλλ€. μμ§ ν¬μ νΌ λΆμμ΄
          μλμλΌκ΅¬μ?
        </HackathonCardBody>
        <div style={{ margin: "20px 0px 15px 0px", textAlign: "center" }}>
          <StyledExternalLinkButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6hXlX5QnVsKacXmFgrW5FN51ouw9w3YY4zqpyJ8pOi58a9Q/viewform"
            target="_blank"
          >
            &gt;&gt; ν¬μ νΌ μ§μνκΈ° &lt;&lt;
          </StyledExternalLinkButton>
        </div>
      </HackathonTextCard>
    </HackathonCard>

    <HackathonCard>
      <HackathonFallImageCard />
      <HackathonTextCard>
        <HackathonCardTitle>
          <span role="img" aria-label="leaf">
            π{" "}
          </span>
          κ°μ: μΈλΆ ν΄μ»€ν€
          <span role="img" aria-label="leaf">
            {" "}
            π
          </span>
        </HackathonCardTitle>
        <HackathonCardBody>
          ν¬μ€ν κ΅¬μ±μμ΄λ©΄ λκ΅¬λ μ°Έμ¬ν  μ μλ ν΄μ»€ν€μλλ€. νμμ
          μκ°νμ§λ§ κ΅¬ννμ§ λͺ»ν μμ΄λμ΄κ° μλμ? μμμ μ§ννλ νλ‘μ νΈκ°
          μλμ? ν¬μ€ν ν΄μ»€ν€μ ν΅ν΄ μμ±ν΄ λ³΄μΈμ.
        </HackathonCardBody>
      </HackathonTextCard>
    </HackathonCard>
  </HackathonInformation>
)

const HackathonSpringImageCard = styled.div`
  height: 300px;
  background-image: url("${hackathon_spring}");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    height: 200px;
  }
`

const HackathonFallImageCard = styled.div`
  height: 300px;
  background-image: url("${hackathon_fall}");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    height: 200px;
  }
`

const HackathonTextCard = styled.div`
  height: auto;
  height: 180px;
  padding: 5px 20px;
  border: 1px solid lightgray;
  border-radius: 0px 0px 10px 10px;
`

const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`

const HackathonInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: stretch;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-wrap: wrap;
  }
`

const HackathonCardTitle = styled.h3`
  padding: 0;
`

const HackathonCardBody = styled.p`
  padding: 0;
`

const StyledExternalLinkButton = styled(ExternalLinkButton)`
  margin: 0 0.5rem 0 0;
  color: black;
  background: white;
  box-shadow: 2px 2px 2px 2px lightgray;
`

export default HackathonCardGrid
