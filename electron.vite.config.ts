import injectProcessEnvPlugin from 'rollup-plugin-inject-process-env'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const shareableAliases = {
  shared: {
    '@shared': resolve(__dirname, 'src/shared'),
  },
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],

    resolve: {
      alias: {
        ...shareableAliases.shared,
      },
    },

    publicDir: resolve('resources'),
  },

  preload: {
    plugins: [externalizeDepsPlugin()],

    resolve: {
      alias: {
        ...shareableAliases.shared,
      },
    },
  },

  renderer: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.platform': JSON.stringify(process.platform),
    },

    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        ...shareableAliases.shared,
      },
    },

    plugins: [react()],

    publicDir: resolve('resources'),

    build: {
      rollupOptions: {
        plugins: [
          injectProcessEnvPlugin({
            NODE_ENV: 'production',
            platform: process.platform,
          }),
        ],
      },
    },
  },
})
