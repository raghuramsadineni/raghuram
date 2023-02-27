import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), image(), robotsTxt({
    policy:[
      {userAgent: '*', disallow: ''}
    ]
  })],
  adapter: vercel()
});