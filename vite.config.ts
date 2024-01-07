import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "HTML2MD",
      fileName: "html2md",
    },
  },
});
