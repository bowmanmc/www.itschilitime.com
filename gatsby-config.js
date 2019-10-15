/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.itschilitime.com`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `writing`,
                path: `${__dirname}/src/writing`,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ["src"],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
                head: false,
            },
        },
    ],
};
