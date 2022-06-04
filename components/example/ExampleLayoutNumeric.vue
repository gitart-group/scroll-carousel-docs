<script setup lang="ts">
import { GSCarousel, GSLayoutNumeric } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutNumeric.css'

import ImageSlide from '@/components/shared/ImageSlide.vue'

const items = useItems(15)

const layoutProps = reactive({
  disableControls: false,
})
</script>

<template>
  <div>
    <div>
      <label class="inline-flex items-center py-2 cursor-pointer">
        <input
          v-model="layoutProps.disableControls"
          type="checkbox"
          class="form-checkbox"
        >
        <span class="ml-2 font-medium text-sm">Disable controls</span>
      </label>
    </div>

    <GSCarousel
      :items="items"
      :item-gap="12"
      :preview-size="30"
      :items-to-show="2"
      :layout="GSLayoutNumeric"
      :layout-props="layoutProps"
    >
      <template #item="{ data }">
        <ImageSlide :index="data" />
      </template>
    </GSCarousel>
  </div>
</template>
