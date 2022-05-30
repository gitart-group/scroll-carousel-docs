<script setup lang="ts">
import { GSCarousel, GSLayoutNumeric } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutNumeric.css'

import { createItems } from './shared/helpers'
import ImageSlide from './shared/ImageSlide.vue'

const items = createItems(15)
</script>

<template>
  <GSCarousel
    :items="items"
    :item-gap="12"
    :preview-size="30"
    :items-to-show="2"
    :layout="GSLayoutNumeric"
  >
    <template #item="{ data }">
      <ImageSlide :index="data" />
    </template>
  </GSCarousel>
</template>
