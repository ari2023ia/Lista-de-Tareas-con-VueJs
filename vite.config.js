import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          runtimeCompiler: true
        }
      }
    }),
    ghPages()
  ],
  base: 'Lista-de-Tareas-con-VueJs',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
})