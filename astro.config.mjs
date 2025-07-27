// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; 

// https://astro.build/config
export default defineConfig({
  site: 'https://LucianaMa1.github.io',
  base: '/LucianaPortfolio/',
  integrations: [tailwind()]    
});
