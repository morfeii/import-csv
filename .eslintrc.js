module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
      },
    ],
  },
}
