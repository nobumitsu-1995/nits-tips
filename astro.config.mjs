import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  },
  output: "server",
  adapter: vercel()
});