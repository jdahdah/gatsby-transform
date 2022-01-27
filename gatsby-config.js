module.exports = {
  siteMetadata: {
    title: `gatsby-transform`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `html`,
        path: `${__dirname}/src/files`,
      },
    },
  ],
};
