import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import postcss from "postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss(),
    AutoImport({
      dirs: ["./src/hooks"],
      dts: true,
      imports: ["react", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/app",
  },
  server: {
    port: 5177,
  },
});
