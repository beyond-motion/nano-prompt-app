import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',  // ✅ 改为根路径
  plugins: [vue()],
  server: {
    port: 5173,
    host: true
  }
})
