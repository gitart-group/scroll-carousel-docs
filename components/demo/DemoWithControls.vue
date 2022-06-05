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

const propsValues = reactive({
  itemGap: 12,
  previewSize: 30,
  itemsToShow: 2,
  sticky: false,
})

const props = computed(() => ({
  items,
  itemGap: propsValues.itemGap,
  layout: layout.component,
  previewSize: propsValues.previewSize,
  itemsToShow: propsValues.itemsToShow,
  sticky: propsValues.sticky,
  key: layout.value, // re-render on layout change
}))
</script>

<template>
  <div>
    <ControlSwitch
      v-model="currentLayoutKey"
      :items="layouts"
    />

    <div class="my-5 flex flex-wrap gap-5">
      <ControlRange
        v-model.number="propsValues.previewSize"
        :label="'preview-size | %{1}'"
        min="0"
        max="220"
      />

      <ControlRange
        v-model.number="propsValues.itemsToShow"
        :label="'items-to-show | %{1}'"
        min="1"
        max="5"
      />

      <ControlRange
        v-model.number="propsValues.itemGap"
        :label="'item-gap | %{1}'"
        min="0"
        max="50"
      />

      <ControlCheckbox
        v-model="propsValues.sticky"
        :label="'sticky'"
      />
    </div>

    <GSCarousel v-bind="props">
      <template #item="{ data }">
        <ImageSlide :index="data" />
      </template>
    </GSCarousel>
  </div>
</template>
