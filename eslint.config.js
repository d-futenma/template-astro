import js from '@eslint/js'
import astro from 'eslint-plugin-astro'

export default [
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['src/**/*.js', 'src/**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
  {
    files: ['src/utilities/**/*.js', 'integrations/**/*.js'],
    rules: {
      'no-undef': 'off',
    },
  },
]
