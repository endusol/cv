import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'


export default defineConfig({
    root: './src',
    plugins: [ vue() ],
    build: {
        outDir: '../.build',
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    },
    base: '/cv',
    resolve: {
        alias: {
            '@':           path.resolve(__dirname, 'src'           ),
            '@assets':     path.resolve(__dirname, 'src/assets'    ),
            '@components': path.resolve(__dirname, 'src/components'),
            '@data':       path.resolve(__dirname, 'src/data'      )
        },
    },
})
