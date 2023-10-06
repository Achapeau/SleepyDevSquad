import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: {
          "assets/[name]": "assets/[name]",
          "assets/Images/[name]": "assets/Images/[name]",
          "assets/Images/blasons/[name]": "assets/Images/blasons/[name]",
          "assets/Images/options/[name]": "assets/Images/options/[name]",
        },
      },
    },
  },
  publicDir: "src/assets",

  plugins: [react()],
  server: {
    port: 3000,
  },
})
