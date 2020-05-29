const siteMetadata = {
  title: 'Patrick Passarella',
  author: 'Patrick Passarella',
  description: 'I\'m Patrick, a fullstack web developer, here I write about some technical and career stuff, also there is some information about me',
  image: '/website-cover.png',
  siteUrl: 'https://patrickpassarella.com/',
  siteLanguage: 'en-US',
  siteLocale: 'en_us',
  twitterUsername: '@P_Passarella',
  menus: ['Home', 'About', 'Blog', 'Contact'],
  socialMedia: {
    linkedin: 'https://linkedin.com/in/patrick-passarella/',
    twitter: 'https://twitter.com/P_Passarella',
    instagram: 'https://instagram.com/patrick_passarella/',
    github: 'https://github.com/PatrickRNG',
    email: 'patrickpassarella@hotmail.com',
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1032,
              linkImagesToOriginal: false,
              tracedSVG: true,
              disableBgImage: true,
              wrapperStyle: 'margin: 30px 0;',
            },
          },
        ],
        plugin: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1032,
              linkImagesToOriginal: false,
              tracedSVG: true,
              disableBgImage: true,
              wrapperStyle: 'margin: 30px 0;',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp'
  ],
};
