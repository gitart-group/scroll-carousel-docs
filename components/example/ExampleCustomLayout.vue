<script setup lang="ts">
import { GSCarousel } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'

import CustomLayout from '@/components/shared/CustomLayout.vue'
import ImageSlide from '@/components/shared/ImageSlide.vue'

const items = useItems(15)

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
