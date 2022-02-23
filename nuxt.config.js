// à ajouter pour le deploiement !!!!!!!!

// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/NMebeniste/' : '/'

const routerBase = process.env.DEPLOY_ENV === '/'

// !!!!!!!!!!!!!!

export default {
  // à ajouter pour le deploiement !!!!!!!!
  router: {
    base: routerBase,
  },

  server: {
    host: '0.0.0.0', // default: localhost,
  },

  // !!!!!!!!!!!!!!

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nicolas Michaud Ebeniste',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nicolas MICHAUD artisan ébéniste éco-responsable dans les Hauts-de-France. Découvrez mes réalisations et créations en bois.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      {
        name: 'og:title',
        hid: 'og:title',
        property: 'og:title',
        content: 'NM Ebeniste',
      },
      {
        name: 'og:description',
        hid: 'og:description',
        property: 'og:description',
        content:
          'Nicolas MICHAUD artisan ébéniste éco-responsable dans les Hauts-de-France.',
      },
      {
        name: 'og:image',
        hid: 'og:image',
        property: 'og:image',
        content: '/NMebeniste/FBIMG.jpg',
      },
    ],
    link: [
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
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '57x57',
      //   href: '/icons/apple-icon-57x57.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '60x60',
      //   href: '/icons/apple-icon-60x60.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '72x72',
      //   href: '/icons/apple-icon-72x72.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '76x76',
      //   href: '/icons/apple-icon-76x76.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '114x114',
      //   href: '/icons/apple-icon-114x114.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '120x120',
      //   href: '/icons/apple-icon-120x120.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '144x144',
      //   href: '/icons/apple-icon-144x144.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '152x152',
      //   href: '/icons/apple-icon-152x152.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '180x180',
      //   href: '/icons/apple-icon-180x180.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '192x192',
      //   href: '/icons/android-icon-192x192.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '32x32',
      //   href: '/icons/favicon-32x32.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '96x96',
      //   href: '/icons/favicon-96x96.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '16x16',
      //   href: '/icons/favicon-16x16.png',
      // },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
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
