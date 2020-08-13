module.exports = {
  siteMetadata: {
    title: 'Pledge to Vote 2020',
    description: '',
    author: 'Sunrise Movement',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'graphics',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-W953ZHL',
        includeInDevelopment: false,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'graphics', // Must match the source name ^
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [`Source Sans Pro`],
            },
            display: 'swap',
          },
        ],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/admin/cms.tsx`,
      },
    },
  ],
}
