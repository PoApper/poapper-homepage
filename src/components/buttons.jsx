import { css } from "styled-components"

const buttonStyle = css`
  padding: 0.3rem 1rem;
  color: ${({ theme }) => theme.foreground.button};
  background: ${({ theme }) => theme.background.button};
  border-radius: 1rem;
`

export { buttonStyle }
