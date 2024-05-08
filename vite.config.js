import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    root: './src',
    plugins: [ vue() ],
    build: {
        outDir: '../.build',
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                desktop: resolve(__dirname, 'src/views/desktop.html'),
                mobile: resolve(__dirname, 'src/views/mobile.html')
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    },
    base: '/cv'
})
