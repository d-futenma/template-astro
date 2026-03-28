import { defineConfig } from 'astro/config'
import path from 'path'
import url from 'url'
import config from './src/site-config'
import { siteUrl } from './src/consts'
import deleteDirectory from './integrations/deleteDirectory'

const dirName = path.dirname(url.fileURLToPath(import.meta.url))
const { root, html, css, js, deletes } = config.build

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  outDir: root,
  compressHTML: html.minify,
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
    format: 'preserve',
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
    server: {
      watch: {
        ignored: process.env.IGNORE_SCRIPTS === 'true' ? ['**/scripts/**'] : [],
      },
    },
    environments: {
      client: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: js.path,
            },
          },
        },
      },
    },
    build: {
      minify: js.minify,
      cssMinify: css.minify,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.names?.[0] ?? ''
            const extType = fileName.split('.').at(-1)
            if (/png|jpg|jpeg|gif|svg|webp/.test(extType ?? '')) {
              return `assets/img/[name][extname]`
            }
            if (/css|scss|styl/i.test(extType ?? '')) {
              return css.path
            }
            return `assets/[name][extname]`
          },
        },
      },
    },
  },
  integrations: [deleteDirectory(root, deletes)],
})
