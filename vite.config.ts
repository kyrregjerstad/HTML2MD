import { resolve } from "path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "HTML2MD",
      fileName: "html2md",
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    target: "esnext",
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.spec.ts", "**/*.test.ts"],
    }),
  ],
});
