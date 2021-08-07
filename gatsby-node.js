/**
 * Any files interfacing with the Gatsby Node API goes here.
 */

require("dotenv").config()
const { Octokit } = require("@octokit/core")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  const result = await octokit.request("GET /orgs/{org}/public_members", {
    org: "poapper",
  })
  const members = result.data

  for (const member of members) {
    member.name = (
      await octokit.request("GET /users/{username}", {
        username: member.login,
      })
    ).data.name

    createNode({
      id: member.node_id,
      avatarUrl: member.avatar_url,
      url: member.url,
      name: member.name,
      login: member.login,
      parent: null,
      children: [],
      internal: {
        type: "GithubMember",
        contentDigest: createContentDigest(member),
      },
    })
  }
}
