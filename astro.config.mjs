import { defineConfig } from "astro/config";
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx()],
  output: "server",
  adapter: vercel(),
  vite: {
    optimizeDeps: {
      exclude: ["oslo"],
    },
  },
});
