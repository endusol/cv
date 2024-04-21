import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    root: './app',
    plugins: [ vue() ],
    resolve: { alias: { '@': fileURLToPath(new URL('./app', import.meta.url)) } }
})
