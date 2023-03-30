import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000,
  // },
  // preview: {
  //   port: 8080,
  // },
  build: {
    chunkSizeWarningLimit: 1600,
    commonjsOptions: {
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": ["createContext"],
      },
    },
  },
});
