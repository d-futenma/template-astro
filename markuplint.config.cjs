module.exports = {
  extends: ['markuplint:recommended'],
	parser: {
		".astro$": "@markuplint/astro-parser",
	},
  rules: {
    "['required-attr']": true
  },
  nodeRules: [
    {
			selector: 'script',
      rules: {
        "required-attr": false
      }
    },
    {
      selector: ".svg-sprites",
      rules: {
        "ineffective-attr": false
      }
    }
  ],
};