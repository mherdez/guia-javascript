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
      '/pages/02-js-basico',
      '/pages/03-js-intermedio',
      '/pages/04-js-moderno',
      '/pages/05-js-dom',
      '/pages/06-js-vite',
      '/pages/07-jest',
      '/pages/08-ejercicios',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
