import { defineConfig } from 'astro/config'
import path from 'path'
import url from 'url'
import config from './src/site-config'
import { siteUrl } from './src/consts'
import deleteDirectory from './integrations/deleteDirectory'

const dirName = path.dirname(url.fileURLToPath(import.meta.url))
const { root, css, js, minify, deletes } = config.build

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  outDir: root,
  compressHTML: minify,
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
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
          imports: [path.resolve(dirName, './src/styles/global')],
        },
      },
    },
    build: {
      minify: minify,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split('.').at(-1)
            if (/png|jpg|jpeg|gif|svg|webp/.test(extType)) {
              return `assets/img/[name][extname]`
            }
            if (/css|scss|styl/i.test(extType)) {
              return css
            }
          },
          entryFileNames: js,
        },
      },
    },
  },
  integrations: [deleteDirectory(root, deletes)],
})
