import type { ComponentPublicInstance } from 'vue'
import { GSLayoutDefault, GSLayoutNumeric } from 'gitart-scroll-carousel'
import { reactiveComputed } from '@vueuse/core'

export const useLayouts = () => {
  const currentLayoutKey = ref('default')
  const layouts = [
    {
      value: 'default',
      label: 'default',
      component: GSLayoutDefault,
    },
    {
      value: 'numeric',
      label: 'numeric',
      component: GSLayoutNumeric,
    },
  ]

  const layout = reactiveComputed(() => {
    const layout = layouts.find(l => l.value === currentLayoutKey.value)
    return {
      ...layout,
      component: markRaw(layout.component) as ComponentPublicInstance<any>,
    }
  })

  return {
    currentLayoutKey,
    layout,
    layouts,
  }
}
