// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://crows-inspiring-astro-puppy.netlify.app/",
  integrations: [preact()]
});