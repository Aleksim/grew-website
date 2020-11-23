

module.exports = {
    siteMetadata: {
    title: `Grew`,
    titleTemplate: `%s | Digital Innovation Grewing`,
    description:
      `We build and grow digital products.`,
    url: `https://www.grew.dev`, 
    image: `/grew.png`,
    twitterUsername: `@Grewdev`,
  },
  plugins: [`gatsby-plugin-sass`,`gatsby-plugin-react-helmet`, `gatsby-plugin-sharp`,`gatsby-plugin-styled-components`,'gatsby-plugin-simple-analytics',`gatsby-transformer-sharp`,{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Permanent Marker`, "Roboto"],
        display: "swap",
      },
    }, ]
}
