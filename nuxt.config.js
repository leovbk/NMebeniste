// à ajouter pour le deploiement !!!!!!!!

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/NMebeniste/' : '/'

// !!!!!!!!!!!!!!

export default {
  // à ajouter pour le deploiement !!!!!!!!
  router: {
    base: routerBase,
  },
  
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  // !!!!!!!!!!!!!!

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nicolasmichaudebeniste',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/prismic/prismicLinks', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  modules: ['@nuxtjs/prismic'],

  prismic: {
    endpoint: 'https://nico-michaud.prismic.io/api/v2',
    modern: true,
    linkResolver: '~/plugins/prismic/link-resolver',
    htmlSerializer: '~/plugins/prismic/html-serializer',
    // see documentation for more!
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
