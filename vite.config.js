import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "commonjs/[name].js", // Output CommonJS files to commonjs/ directory
        format: "es",
      },
    },
  },
});
