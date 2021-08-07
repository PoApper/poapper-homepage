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

  result.data.map(async member =>
    createNode({
      id: member.node_id,
      avatarUrl: member.avatar_url,
      url: member.url,
      name: await (
        await octokit.request("GET /users/{username}", {
          username: member.login,
        })
      ).data.name,
      login: member.login,
      parent: null,
      children: [],
      internal: {
        type: "GithubMember",
        contentDigest: createContentDigest(member),
      },
    })
  )
}
