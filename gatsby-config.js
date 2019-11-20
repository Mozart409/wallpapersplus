require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const myQuery = `
{
  allFile {
    edges {
      node {
        name
        objectID: id
        base
        relativeDirectory
        extension
        prettySize
        publicURL
        image_url: publicURL
      }
    }
  }
}

`;

const queries = [
  {
    transformer: ({ data }) => data.allFile.edges.map(({ node }) => node),
    query: myQuery
  }
];

module.exports = {
  siteMetadata: {
    title: `WPlus`,
    description: `Wallpapers for mobile devices`,
    author: `@mozart409`,
    siteUrl: "https://www.wplus.space"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: false
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "YOUR_SENTRY_DSN_URL",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            };
          })
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.wplus.space",
        sitemap: "https://www.wplus.space/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-cookiehub`,
      options: {
        // your cookiehub widget ID
        cookihubId: `67569ecb`,
        // your google analytics tracking id
        trackingId: `UA-148437297-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WPlus`,
        short_name: `WPlus`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/walls`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/walls/featured`
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.wplus.space",
        sitemap: "https://www.wplus.space/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },

    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
