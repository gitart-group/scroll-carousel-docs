<script setup lang="ts">
import { GSCarousel, GSLayoutDefault } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutDefault.css'

import ImageSlide from '@/components/shared/ImageSlide.vue'

const items = useItems(15)

const props = reactive({
  itemGap: 12,
})

const layoutProps = reactive({
  disableArrows: false,
})
</script>

<template>
  <div>
    <div class="mb-5 flex flex-wrap gap-5">
      <ControlCheckbox
        v-model="layoutProps.disableArrows"
        :label="'disable-arrows'"
      />
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
