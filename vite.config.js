import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/RiivSherr/ ',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
            '@components': path.resolve(__dirname, '/src/components'),
            '@assets': path.resolve(__dirname, '/src/assets'),
            '@modules': path.resolve(__dirname, '/src/modules'),
            '@pages': path.resolve(__dirname, '/src/pages'),
        },
    },
})
