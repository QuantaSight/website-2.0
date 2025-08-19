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
//     },
//     // SEO and Performance Optimizations
//     build: {
//         rollupOptions: {
//             output: {
//                 manualChunks: {
//                     vendor: ['react', 'react-dom'],
//                     router: ['react-router-dom'],
//                     seo: ['react-helmet-async'],
//                     ui: ['lucide-react']
//                 }
//             }
//         },
//         // Optimize for better loading
//         minify: 'terser',
//         terserOptions: {
//             compress: {
//                 drop_console: true,
//                 drop_debugger: true
//             }
//         }
//     },
//     // Optimize dependencies for faster loading
//     optimizeDeps: {
//         include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', 'lucide-react']
//     },
//     // Define for better tree-shaking
//     define: {
//         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//     }
// })

// Production
export default defineConfig({
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
    },
    // SEO and Performance Optimizations for Production
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    seo: ['react-helmet-async'],
                    ui: ['lucide-react']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', 'lucide-react']
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
})
