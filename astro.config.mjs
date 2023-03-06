import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";
import { manifest, seoConfig } from "./src/seoConfig";
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  output: 'server',
  integrations: [tailwind(), image(), robotsTxt({
    policy: [{
      userAgent: '*',
      disallow: ''
    }]
  }), AstroPWA({
    registerType: "autoUpdate",
    manifest,
    devOptions:{
      enabled: true
    }
  }), sitemap(), compress()],
  adapter: vercel()
});