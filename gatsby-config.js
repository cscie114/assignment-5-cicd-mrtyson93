/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Assignment 5 - Mitchell Tyson - CI/CD`,
    description: `An Anthology of Adam Driver Movies`,
    course: `CSCI E-114`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Movie',  
        imagePath: 'Poster',  // navigating from the nodeType down
        name: 'GatsbyPoster',  // name of property in graphql schema to contain the new, cached processed image
        silent: true   // ignore 404s
      },
    },


  ],
}
