const config = {
  siteUrl: 'https://example.com/',
  outDir : 'htdocs',
  meta: {
    title      : ['タイトル', 'ogタグ用タイトル'],
    description: ['ディスクリプション', 'ogディスクリプション'],
    ogSiteName : 'サイト名',
    ogImage    : 'https://example.com/assets/img/og/og-img.jpg',
    ogType     : 'website',
  },
  breakPoint: {
    sm: 767,
    md: 768,
  },
  path: {
    image: '/assets/img/',
  },
  image: {
    smDir   : '/',
    mdDir   : '/md/',
    loading : 'lazy',
    decoding: 'async',
    format  : 'webp',
    retina  : true,
  },
  deletes: [
    'url-list'
  ]
}

export default config
