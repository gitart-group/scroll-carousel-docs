<script setup lang="ts">
import { GSCarousel } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutNumeric.css'
import 'gitart-scroll-carousel/dist/GSLayoutDefault.css'

import ImageSlide from '@/components/shared/ImageSlide.vue'

const items = useItems(15)
const {
  currentLayoutKey,
  layout,
  layouts,
} = useLayouts()

const props = computed(() => ({
  items,
  itemGap: 12,
  layout: layout.component,
  previewSize: 30,
  itemsToShow: 2,
  key: layout.value, // re-render on layout change
}))
</script>

<template>
  <div>
    <div class="mb-5">
      <ControlSwitch
        v-model="currentLayoutKey"
        :items="layouts"
      />
    </div>

    <GSCarousel v-bind="props">
      <template #item="{ data }">
        <ImageSlide :index="data" />
      </template>
    </GSCarousel>
  </div>
</template>
