import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: [`@techstark/opencv-js`], // needed for stencil
    },
    ssr: {
      noExternal: ['@techstark/opencv-js']
    }
  },
});
