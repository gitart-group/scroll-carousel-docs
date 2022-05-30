import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutDefault.css'
import 'gitart-scroll-carousel/dist/GSLayoutNumeric.css'

import { GSCarousel } from 'gitart-scroll-carousel'

import ToggleBlock from '@/components/ui/ToggleBlock.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('GSCarousel', GSCarousel)
  nuxtApp.vueApp.component('ToggleBlock', ToggleBlock)
})
