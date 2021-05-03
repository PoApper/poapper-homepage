import styled, { css } from "styled-components"
import { Link } from "gatsby"

const linkStyle = css`
  color: ${({ theme }) => theme.foreground.link}; /* Uses color from theme */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const InternalLink = styled(Link)`
  ${linkStyle}
`

const ExternalLink = styled.a`
  ${linkStyle}
`

export { InternalLink, ExternalLink }
