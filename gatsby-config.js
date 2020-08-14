module.exports = {
  siteMetadata: {
    title: `Website`,
    description: `Add description here.`,
    author: `Nitesh Srivats <niteshsrivats.k@gmail.com>`,
    siteUrl: `https://www.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `website`,
        short_name: `website`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#0093DE`,
        display: `minimal-ui`,
        // icon: `src/assets/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
