require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "poapper-homepage",
    description: "PoApper Club Homepage",
    author: "PoApper",
    siteUrl: "https://club.poapper.com",
    facebook: "https://www.facebook.com/poapper.club",
    github: "https://github.com/poapper",
    mail: "poapper@gmail.com",
  },
  plugins: [
    "gatsby-plugin-styled-components", // Uses styled-components for styling, ...
    "gatsby-plugin-sass", // ... with sass support
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-preact", // Uses Preact for better performance,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
}
