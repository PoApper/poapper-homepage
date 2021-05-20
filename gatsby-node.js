/**
 * Any files interfacing with the Gatsby Node API goes here.
 */

const { Octokit } = require("@octokit/core")

const octokit = new Octokit()

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const res = await octokit.request("GET /orgs/{org}/members", {
    org: "PoApper",
  })

  return res.data.map(user => {
    const node = {
      id: createNodeId(`${user.id}`),
      avatar_url: user.avatar_url,
      url: user.url,
      internal: {
        type: "GithubMember",
        contentDigest: createContentDigest(user),
      },
    }
    createNode(node)
  })
}
