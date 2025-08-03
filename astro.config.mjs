import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import staticAdapter from "@astrojs/static";

export default defineConfig({
  site: 'https://LucianaMa1.github.io',
  base: '/LucianaPortfolio/',
  integrations: [tailwind()],
  adapter: staticAdapter(),
});
