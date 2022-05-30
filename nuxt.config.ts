import { defineNuxtConfig } from 'nuxt'

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

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
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
