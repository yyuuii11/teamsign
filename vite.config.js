import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// 生产环境部署在 http://8.148.24.170/teamsign/ 子路径下，
// 本地开发（npm run dev）仍使用根路径，互不影响。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/teamsign/' : '/',
  plugins: [vue()],
}))
