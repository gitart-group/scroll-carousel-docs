<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps({
  min: {
    type: [Number, String],
    default: 0,
  },
  max: {
    type: [Number, String],
    default: 100,
  },

  // put %{1} to put there modelValue
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Number,
    default: 0,
  },
})

const proxiedModelValue = useVModel(props, 'modelValue')

const inputLabel = computed(() => {
  const { label, modelValue } = props
  return label.replace('%{1}', modelValue.toString())
})

</script>

<template>
  <label class="inline-flex flex-col">
    <span class="text-sm font-medium mb-2">
      {{ inputLabel }}
    </span>

    <input
      v-model.number="proxiedModelValue"
      type="range"
      :min="min"
      :max="max"
      class="form-range"
    >
  </label>
</template>

<style lang="scss" scoped></style>
