import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@astrojs/react'

export default defineConfig({
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
})
