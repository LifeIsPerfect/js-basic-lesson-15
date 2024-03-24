module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest', '@stylistic/js'],
  rules: {
    '@stylistic/js/max-len': ['error', { code: 80 }, { ignoreComments: true }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-plusplus': 'off',
    /* '@stylistic/js/space-in-parens': ['error', 'always'], */
    '@stylistic/js/newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
