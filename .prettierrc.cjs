/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 1000,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: "lf", // lf|crlf|cr|auto
  plugins: ['prettier-plugin-astro'],
}
