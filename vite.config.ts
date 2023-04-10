/* eslint-env node */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: '@giraugh/tools',
      fileName: 'main',
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['lib/**/*.{js,ts}']
  }
})
