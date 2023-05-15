module.exports = {
  title: 'frontools',

  description: '',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/cocobytes/AssetsInfo/master/asset/codigo.png', type: 'image/icon type' }]
  ],

  dest: 'docs',
  base: '/frontools/',

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: 'https://raw.githubusercontent.com/cocobytes/AssetsInfo/master/asset/codigo.png',
    lastUpdated: false,
    nav: [
      {
        text: 'Javascript',
        ariaLabel: 'Javascript Menu',
        items: [
          { text: 'AnimeJS', link: 'https://animejs.com/' }
        ]
      },
      {
        text: 'Css3',
        ariaLabel: 'css Menu',
        items: [
          { text: 'Box shadow', link: 'https://box-shadow.dev/' },
          { text: 'Box shadow gradients', link: 'https://alvarotrigo.com/shadow-gradients/' },
          { text: 'clipath', link: 'https://bennettfeely.com/clippy/' },
          { text: 'Buttons animations', link: 'https://www.cattocss.com/' },
          { text: 'Transitions style', link: 'https://www.transition.style' },
          { text: 'Loaders', link: 'https://cssloaders.github.io/' },
          { text: 'Animatiss', link: 'https://xsgames.co/animatiss/' },
          { text: 'AnimistaCss', link: 'https://animista.net/' },
          { text: 'HoverCss', link: 'https://ianlunn.github.io/Hover/' },
          { text: 'Components Css', link: 'https://uiverse.io/' },
        ]
      },
      {
        text: 'Iconos',
        ariaLabel: 'Iconos Menu',
        items: [
          { text: 'tabler', link: 'https://tabler-icons.io/' },
        ]
      },
      {
        text: 'Practicas',
        ariaLabel: 'practicas Menu',
        items: [
          { text: 'devchallenge', link: 'https://devchallenges.io/' },
          { text: 'frontendmentor', link: 'https://www.frontendmentor.io/' }
        ]
      },
      {
        text: 'Recursos',
        ariaLabel: 'recursos Menu',
        items: [
          { text: 'collect ui', link: 'https://collectui.com/designs' },
          { text: 'devdocs', link: 'https://devdocs.io/' },
          { text: 'roadmap', link: 'https://roadmap.sh/frontend' },
          { text: 'code image', link: 'https://app.codeimage.dev' },
        ]
      }
    ],
    sidebar: {
      '/javascript/': [
        {
          title: 'JAVASCRIPT',
          collapsable: false,
          children: [
            '',
            'numbers',
            'objects',
            'arrays',
            'iteradores',
            'generadores',
            'function-constructor',
            'class-function',
            'localstorage',
            'sessionstorage',
            'indexeddb',
            'cookies',
            'callbacks',
            'promises',
            'asyn-await',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ["vuepress-plugin-code-copy", {
        color: '#555f69',
        backgroundColor: '#f5f7f930',
        successText: 'Copiado'
        }
    ]
  ]
}
