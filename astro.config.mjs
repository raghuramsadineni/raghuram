import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";
import { VitePWA } from "vite-plugin-pwa";
import { manifest, seoConfig } from "./src/seoConfig";
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  output: 'server',
  integrations: [tailwind(), image(), robotsTxt({
    policy: [{
      userAgent: '*',
      disallow: ''
    }]
  }), sitemap(), compress()],
  plugins: [VitePWA({
    registerType: "autoUpdate",
    manifest,
    devOptions:{
      enabled: true
    }
  })],
  adapter: vercel()
});