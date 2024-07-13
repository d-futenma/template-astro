const config = {
  siteUrl: 'https://example.com/',
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
  image: {
    smDir   : '/',
    mdDir   : '/md/',
    loading : 'lazy',
    decoding: 'async',
    format  : 'webp',
    retina  : true,
  },
  path: {
    image: '/assets/img/',
  },
}

export default config
