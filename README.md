# poapper-homepage

PoApper club homepage.

## Instructions

### Prerequisites

A [GitHub personal access token(https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) is required for building.
It must be specified in [`.env`](https://www.npmjs.com/package/dotenv) with the key `GITHUB_TOKEN`.
An example is at [`.env.example`](.env.example).

### Development

```shell
npm run develop
```

### Building

```shell
npm run build
```

## Technology Stack

### Frontend

- React with Gatsby
- CSS-in-JS via styled-components

### Tooling

- Formatted and linted automatically via lint-staged
- Formatted with prettier
- Linted with eslint and stylelint
