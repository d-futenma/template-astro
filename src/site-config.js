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
  build: {
    root   : 'htdocs',
    deletes: ['url-list'],
    html: {
      minify      : true,
      relativePath: false,
    },
    css: {
      path  : 'assets/css/style[extname]',
      minify: true,
    },
    js: {
      path  : 'assets/js/bundle.js',
      minify: true,
    },
  },
}

export default config
