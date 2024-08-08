const config = {
  breakPoints: {
    sm: 767,
    md: 768,
  },
  images: {
    smDir       : '/',
    mdDir       : '/md/',
    retinaSuffix: '@2x',
    optimize: {
      inputDir  : './src/images/',
      outputDir : './public/',
      format    : 'webp',
      allowedExtensions: ['.jpg', '.png'],
      options: {
        jpg : { quality: 80, progressive: true },
        png : { quality: 80 },
        gif : {},
        svg : {},
        webp: { quality: 80 },
      }
    }
  },
  outDir: {
    root: 'htdocs',
    css : 'assets/css/style[extname]',
    js  : 'assets/js/bundle.js',
  },
  deletes: ['url-list']
}

export default config
