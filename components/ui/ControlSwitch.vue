<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  items: Array<{
    label: string
    value: string | number
  }>
  modelValue: string | number
}>()

const proxiedModelValue = useVModel(props, 'modelValue')
</script>

<template>
  <div>
    <button
      v-for="(item, index) in items"
      :key="item.value"
      class="btn btn--group"
      :class="{
        'btn--active': modelValue === item.value,
        'btn--group-first': index === 0,
        'btn--group-last': index === items.length - 1,
      }"
      @click="proxiedModelValue = item.value"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
