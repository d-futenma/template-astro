const config = {
  build: {
    root   : 'htdocs',
    css    : 'assets/css/style[extname]',
    js     : 'assets/js/bundle.js',
    minify : true,
    deletes: ['url-list']
  },
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
}

export default config
