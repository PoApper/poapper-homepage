import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { buttonStyle } from "./buttons"

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

const ExternalLinkButton = styled.a`
  ${buttonStyle}
`

export { InternalLink, ExternalLink, ExternalLinkButton }
