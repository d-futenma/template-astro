import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import path from 'path'
import url from 'url'
import config from './src/config'

const dirName = path.dirname(url.fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: config.siteUrl,
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  outDir: './htdocs',
  compressHTML: false,
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(dirName, 'src')}/`,
      },
    },
    build: {
      minify: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split('.').at(-1)
            if (/png|jpg|jpeg|gif|svg|webp/.test(extType)) {
              return `assets/img/[name][extname]`
            }
            if (/css|scss|styl/i.test(extType)) {
              return `assets/css/style[extname]`
            }
          },
          entryFileNames: `assets/js/bundle.js`,
        },
      },
    },
  },
  integrations: [tailwind()],
})
