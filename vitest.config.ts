import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),    
    tailwindcss(),
    tsConfigPaths(),
],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@infra": path.resolve(__dirname, "./src/infra"),
      "@http": path.resolve(__dirname, "./src/http"),
      "@presentation": path.resolve(__dirname, "./src/presentation"),
      "@ui": path.resolve(__dirname, "./src/presentation/ui"),
      "@pattern": path.resolve(__dirname, "./src/presentation/pattern"),
      "@features": path.resolve(__dirname, "./src/presentation/features"),
      "@layouts": path.resolve(__dirname, "./src/presentation/layouts"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
    },
  },
  test: {
    globals: true,
    root: './',
    environment: "jsdom",
    setupFiles: ["./src/mocks/setup-specs.ts"],
    include: [
      "src/**/__specs__/**/*.{spec.ts,spec.tsx}",
      "src/**/__integration__/**/*.spec.ts",
    ],
  },
});
