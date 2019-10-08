const config = require('../config.json');
module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }],
    ['link', { rel: "stylesheet", href: '/fonts/stylesheet.css' }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
