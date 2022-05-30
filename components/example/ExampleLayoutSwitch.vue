<script setup lang="ts">
import { GSCarousel, GSLayoutDefault, GSLayoutNumeric } from 'gitart-scroll-carousel'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutNumeric.css'
import 'gitart-scroll-carousel/dist/GSLayoutDefault.css'

import { createItems } from './shared/helpers'
import ImageSlide from './shared/ImageSlide.vue'

const items = createItems(15)

const layout = ref('default')

const layouts = [
  {
    key: 'default',
    component: GSLayoutDefault,
  },
  {
    key: 'numeric',
    component: GSLayoutNumeric,
  },
]

const layoutComponent = computed(() => layouts.find(({ key }) => key === layout.value)?.component)

const onLayoutChange = (newLayout: string) => {
  layout.value = newLayout
}

const props = reactive({
  itemGap: 12,
  previewSize: 30,
  itemsToShow: 2,
})

</script>

<template>
  <div>
    <div>
      <button
        v-for="(l, index) in layouts"
        :key="l.key"
        class="btn btn--group"
        :class="{
          'btn--active': layout === l.key,
          'btn--group-first': index === 0,
          'btn--group-last': index === layouts.length - 1,
        }"
        @click="onLayoutChange(l.key)"
      >
        {{ l.key }}
      </button>
    </div>

    <div class="pt-2 flex flex-wrap gap-5">
      <label class="inline-flex flex-col">
        <span class="text-sm font-medium mb-2">
          Item gap {{ props.itemGap }}
        </span>

        <input
          v-model.number="props.itemGap"
          type="range"
          min="0"
          max="50"
          class="form-range"
        >
      </label>

      <label class="inline-flex flex-col">
        <span class="text-sm font-medium mb-2">
          Preview size {{ props.previewSize }}
        </span>

        <input
          v-model.number="props.previewSize"
          type="range"
          min="0"
          max="220"
          class="form-range"
        >
      </label>

      <label class="inline-flex flex-col">
        <span class="text-sm font-medium mb-2">
          Items to show {{ props.itemsToShow }}
        </span>

        <input
          v-model.number="props.itemsToShow"
          type="range"
          min="1"
          max="5"
          class="form-range"
        >
      </label>
    </div>

    <GSCarousel
      :key="layout"
      :items="items"
      :layout="layoutComponent"
      v-bind="props"
    >
      <template #item="{ data }">
        <ImageSlide :index="data" />
      </template>
    </GSCarousel>
  </div>
</template>
