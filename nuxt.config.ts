import { defineNuxtConfig } from 'nuxt'
import helperModule from './helper-module'

export default defineNuxtConfig({
  css: [
    '~/scss/main.scss',
  ],

  head: {
    titleTemplate: 'Gitart Scroll Carousel - %s',
    meta: [
      { name: 'description', content: 'Documentation for Gitart Scroll Carousel. Carousel Vue Component. Docs' },
    ],
  },

  components: true,

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    helperModule,
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    navigation: {
      fields: ['navTitle'],
    },
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  build: {
    transpile: [
      'gitart-scroll-carousel',
    ],
  },
})
