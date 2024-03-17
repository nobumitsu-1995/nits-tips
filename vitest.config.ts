import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [tsconfigPaths(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/testUtils/mocks/setup.ts'],
  },
})
