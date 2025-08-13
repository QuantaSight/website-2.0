// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// localhost
// export default defineConfig({
//     plugins: [
//         react(),
//         tailwindcss()
//     ],
//     server: {
//         host: '0.0.0.0',
//         port: 5173,
//         allowedHosts: ['quantasight.com'],
//     }
// })

// Production
export default defineConfig({
    base: '/website/',
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: ['quantasight.com'],
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        }
    }
})
