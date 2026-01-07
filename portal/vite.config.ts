import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // <--- 2. This tells Vite: "@" means "src folder"
        },
    },

    server: {
        port: 5173, // Ensures we always run on this port
        proxy: {
            // THE BRIDGE: Connects React to Java
            '/api': {
                target: 'http://localhost:8080', // The address of your Spring Boot Backend
                changeOrigin: true,
                secure: false,
            },
        },
    },
})