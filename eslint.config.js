import js from '@eslint/js'
import astro from 'eslint-plugin-astro'

export default [
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['src/**/*.js'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
]
