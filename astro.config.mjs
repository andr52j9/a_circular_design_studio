import { defineConfig } from "astro/config";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://a-circular-design-studio.netlify.app",
  integrations: [sitemap()],
});
