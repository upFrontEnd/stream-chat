import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        sourceMap: true,
      },
    },
  },
  build: {
    sourcemap: true,
  },
})
