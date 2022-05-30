<script setup lang="ts">
import { GSCarousel, GSLayoutDefault } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutDefault.css'

import { createItems } from './shared/helpers'
import ImageSlide from './shared/ImageSlide.vue'

const items = createItems(15)

const props = reactive({
  itemGap: 12,
})

const layoutProps = reactive({
  disableArrows: false,
})
</script>

<template>
  <div>
    <div>
      <label class="inline-flex items-center py-2 cursor-pointer">
        <input
          v-model="layoutProps.disableArrows"
          type="checkbox"
          class="form-checkbox"
        >
        <span class="ml-2 font-medium text-sm">Disable arrows</span>
      </label>
    </div>

    <GSCarousel
      :items="items"
      :item-gap="12"
      :preview-size="30"
      :items-to-show="2"
      :layout="GSLayoutDefault"
      :layout-props="layoutProps"
      v-bind="props"
    >
      <template #item="{ data }">
        <ImageSlide :index="data" />
      </template>
    </GSCarousel>
  </div>
</template>
