import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build:{
        emptyOutDir: false,
        target:"node16",
        rollupOptions:{
        input:{
            background: "./src/background/background.ts",
        },
        output:{
            entryFileNames: "assets/[name].js"
        }
        },
    },
})