import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/2025-12-08-urbnstep-layout/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        productDetail: resolve(__dirname, "product-detail.html"),
      },
    },
  },
});
