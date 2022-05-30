<script setup lang="ts">
import { GSCarousel } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'

import { createItems } from './shared/helpers'
import ImageSlide from './shared/ImageSlide.vue'
import CustomLayout from './shared/CustomLayout.vue'

const items = createItems(15)

const layoutProps = reactive({
  title: 'Hello Custom Layout',
})
</script>

<template>
  <GSCarousel
    :items="items"
    :item-gap="12"
    :preview-size="30"
    :items-to-show="2"
    :layout="CustomLayout"
    :layout-props="layoutProps"
  >
    <template #item="{ data }">
      <ImageSlide :index="data" />
    </template>
  </GSCarousel>
</template>
