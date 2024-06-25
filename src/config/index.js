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
    sm : 767,
    md : 768,
  },
  path: {
    image: {
      dir: '/assets/img/',
      sm : '/',
      md : '/md/',
    }
  },
};

export default config;