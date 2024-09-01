import normalizeSlashes from './utilities/normalizeSlashes';

// URL
export const siteUrl = 'https://example.com/'

// SEO, OGP
export const siteTitle       = ['タイトル', 'ogタグ用タイトル'];
export const siteDescription = ['ディスクリプション', 'ogディスクリプション'];
export const siteOgSiteName  = 'サイト名'
export const siteOgUrl       = siteUrl
export const siteOgImage     = normalizeSlashes(`${siteUrl}/assets/img/og/og-img.jpg`)
export const siteOgType      = 'website'

// Path
export const pathImg = '/assets/img/'
