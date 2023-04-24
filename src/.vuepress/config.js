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
      '/pages/02-bases',
      '/pages/03-control-de-flujo',
      '/pages/04-funciones',
      '/pages/05-arreglos',
      '/pages/06-objetos',
      '/pages/07-api-rest',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
