module.exports = {
  siteMetadata: {
    title: `In Beauty of code I trust`,
    description: `Scroll down`,
    author: `Aleksei Dmitrijev`,
    additionalSkills: [
      {
        image: 'csharp.png',
        imageAlt: 'Csharp',
      },
      {
        image: 'java.png',
        imageAlt: 'Java',
        imageFilter: 'brightness(5)',
      },
    ],
    skills: [
      {
        image: 'js.png',
        imageAlt: 'JS',
        title: 'Javascript',
        shortTitle: 'JS',
        percent: 80
      },
      {
        image: 'react.png',
        imageAlt: 'React',
        title: 'ReactJS',
        shortTitle: 'React',
        percent: 75
      },
      {
        image: 'vue.png',
        imageAlt: 'Vue',
        title: 'VueJs',
        shortTitle: 'Vue',
        percent: 72
      },
      {
        image: 'redux.png',
        imageAlt: 'Redux',
        title: 'ReduxJs',
        shortTitle: 'Redux',
        percent: 90
      },
      {
        image: 'node.png',
        imageAlt: 'Node',
        title: 'NodeJs',
        shortTitle: 'Node',
        percent: 78
      },
      {
        image: 'mongo.png',
        imageAlt: 'Mongo',
        title: 'MongoDb',
        shortTitle: 'Mongo',
        percent: 69
      },
      {
        image: 'html5.png',
        imageAlt: 'Html',
        title: 'HTML5/CSS',
        shortTitle: 'HTML5',
        percent: 94
      },
      {
        image: 'vuetify.png',
        imageAlt: 'Vuetify',
        title: 'VuetifyJs',
        shortTitle: 'Vuetify',
        percent: 87
      },
      {
        image: 'feathers.png',
        imageAlt: 'Feathers',
        imageFilter: 'brightness(10)',
        title: 'FeathersJs',
        shortTitle: 'Feather',
        percent: 75,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
