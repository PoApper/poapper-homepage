module.exports = {
  siteMetadata: {
    title: "gatsby-starter-sane",
    description: "A Gatsby starter to keep your sanity",
    author: "Lucas Yunkyu Lee",
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
    "gatsby-plugin-preact", // Uses Preact for better performance
  ],
}
