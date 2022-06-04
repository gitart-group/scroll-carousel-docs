import fs from 'fs'
import path from 'path'
import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'

/**
 * Module
 */
export default defineNuxtModule({
  meta: {
    name: 'helper-module',
  },

  async setup(_, nuxt) {
    const srcDir = nuxt.options.srcDir
    const resolve = (...args) => path.resolve(srcDir, ...args)

    const components = await Promise.all([
      resolve('components/demo'),
      resolve('components/example'),
    ].map(async(dir) => {
      const files = await fs.promises.readdir(dir)
      return files.map((fileName) => {
        const filePath = resolve(dir, fileName)
        const name = fileName.replace(/\.vue$/, '')
        const component = {
          name,
          path: filePath,
        }
        return component
      })
    }))

    const flattenComponents = components.flat()

    addPluginTemplate({
      filename: 'demo-components.ts',
      write: true,
      getContents: () => {
        return [
          'import { defineNuxtPlugin } from \'#app\'',
          ...flattenComponents.map((component) => {
            return `const ${component.name} = defineAsyncComponent(() => import('${component.path}'))`
          }),
          '\n',
          'export default defineNuxtPlugin(async(nuxtApp) => {',
          ...flattenComponents
            .map(component => ` nuxtApp.vueApp.component('${component.name}', ${component.name})`),
          '})',
        ].join('\n')
      },
    })
  },
})
