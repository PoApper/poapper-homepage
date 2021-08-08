/**
 * Any files interfacing with the Gatsby Node API goes here.
 */

const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch("https://github.club.poapper.com/member")
  const members = await result.json()

  for (const member of members) {
    createNode({
      id: member.node_id,
      avatarUrl: member.avatar_url,
      url: member.url,
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
