import { defineConfig } from 'astro/config'
import path from 'path'
import url from 'url'
import config from './src/config'
import deleteDirectory from './src/integrations/deleteDirectory.js';

const dirName = path.dirname(url.fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: config.siteUrl,
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  outDir: config.outDir,
  compressHTML: false,
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(dirName, 'src')}/`,
      },
    },
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            path.resolve(dirName, './src/styles/global'),
          ],
        },
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
  integrations: [deleteDirectory(config.outDir, config.deletes)],
})
