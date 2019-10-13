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
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
                head: false,
            },
        },
    ],
};
