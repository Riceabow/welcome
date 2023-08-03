import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPx2rem from 'postcss-px2rem'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const postcss = postcssPx2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})
// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ['vue'],
      // 第三方组件库的解析器
      // resolvers: [ElementPlusResolver()],
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue', 'md'],
      // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
      // resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                postcss
            ]
        }
    }
}
})
