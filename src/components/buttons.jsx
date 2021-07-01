import { css } from "styled-components"

const buttonStyle = css`
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.foreground.button};
  text-decoration: none;
  background: ${({ theme }) => theme.background.button};
  border-radius: 1rem;
`

export { buttonStyle }
