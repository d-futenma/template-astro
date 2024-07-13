import astro from 'eslint-plugin-astro'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...astro.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
]
