/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
	    title: `Beautybox Website`,
	    description: `Sourcing data from Local Beautybox`,
	  },
    plugins: [
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          /*
           * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
           * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
           */
          baseUrl: `http://beautybox.local`,
          protocol: `http`,
          hostingWPCOM: false,
          useACF: true,
        },
      },
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Roboto`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
