module.exports = {
  siteMetadata: {
    title: 'Donte Hightower'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/DDH.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
};
