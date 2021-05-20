/**
 * Any files interfacing with the Gatsby Node API goes here.
 */

require("dotenv").config()
const { Octokit } = require("@octokit/core")

// Uses GitHub's OctoKit
const octokit = new Octokit({
  // Authentication is optional,
  // simply do not provide GITHUB_TOKEN in .env if unwanted
  auth: process.env.GITHUB_TOKEN,
})

// Sources GitHub API data into GraphQL
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const resOrg = await octokit.request("GET /orgs/{org}/public_members", {
    // Only public members
    org: "PoApper",
  })

  const createNodes = resOrg.data.map(async user => {
    // GET /orgs/{org}/public_members does not include username, so we query it here
    const resMember = await octokit.request("GET /users/{username}", {
      username: user.login,
    })

    // GraphQL node to generate
    const node = {
      id: createNodeId(`${user.id}`),
      avatarUrl: user.avatar_url,
      url: user.url,
      name: resMember.data.name,
      internal: {
        type: "githubMember",
        contentDigest: createContentDigest(user),
      },
    }

    createNode(node)
  })

  await Promise.all(createNodes) // Parallelism used for build speedup
}
