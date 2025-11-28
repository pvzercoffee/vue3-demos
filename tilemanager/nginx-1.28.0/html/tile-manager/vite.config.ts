import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      // 匹配所有以 "/api" 开头的请求
      '/api': {
        target: 'http://localhost:90', // 后端服务器地址（注意：这里不要加 /api，因为 baseURL 里已经有了）
        changeOrigin: true, // 允许跨域（关键配置）
        // 可选：如果后端不需要 /api 前缀，这里可以重写路径（你的情况不需要，因为后端接口本身带 /api）
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
