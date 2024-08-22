import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    emptyOutDir: false,
    rollupOptions:{
      input:{
        content: "./src/content-script/content-script.ts",
        "content-index": "./src/content-script/index.tsx",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})



