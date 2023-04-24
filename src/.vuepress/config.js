module.exports = {
  dest: 'docs',
  base: '/guia-javascript/',
  lang: 'es-ES',
  title: 'Fundamentos de Javascript',
  description: 'Taller de javascript. ITCampeche',
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: 'MDN web docs. Referencia',
        link: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
      },
      {
        text: 'MDN web docs. Guía',
        link: 'https://developer.mozilla.org/es/docs/Learn/JavaScript'
      },
      {
        text: 'Javscript.info',
        link: 'https://javascript.info/'
      },
      {
        text: 'w3schools.com',
        link: 'https://www.w3schools.com/js/default.asp'
      },
    ],
    sidebar: [
      '/',
      '/pages/01-introduccion',
      // '/pages/02-clases',
      // '/pages/03-herencia',
      // '/pages/04-polimorfismo',
      // '/pages/05-encapsulamiento',
      // '/pages/06-excepcion',
      // '/pages/07-batalla',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
