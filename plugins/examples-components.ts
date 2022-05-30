import ExampleLayoutSwitch from '~~/components/example/ExampleLayoutSwitch.vue'
import ExampleDocsBase from '~~/components/example/ExampleDocsBase.vue'
import ExampleBase from '~~/components/example/ExampleBase.vue'
import ExampleLayoutNumeric from '~~/components/example/ExampleLayoutNumeric.vue'
import ExampleLayoutDefault from '~~/components/example/ExampleLayoutDefault.vue'
import ExampleCustomLayout from '~~/components/example/ExampleCustomLayout.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ExampleDocsBase', ExampleDocsBase)

  nuxtApp.vueApp.component('ExampleBase', ExampleBase)
  nuxtApp.vueApp.component('ExampleLayoutSwitch', ExampleLayoutSwitch)
  nuxtApp.vueApp.component('ExampleLayoutNumeric', ExampleLayoutNumeric)
  nuxtApp.vueApp.component('ExampleLayoutDefault', ExampleLayoutDefault)
  nuxtApp.vueApp.component('ExampleCustomLayout', ExampleCustomLayout)
})
